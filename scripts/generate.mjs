#!/usr/bin/env node
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, join } from "node:path";

/* ---------- CLI ---------- */
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const m = a.match(/^--?([^=]+)(?:=(.*))?$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2];
    if (val === undefined) {
      const next = argv[i + 1];
      if (next && !next.startsWith("-")) {
        val = next;
        i++;
      } else {
        val = "true";
      }
    }
    out[key] = val;
  }
  return out;
}
const args = parseArgs(process.argv.slice(2));
const inputPath = resolve(process.cwd(), args.input || args.i || "./openrpc.json");
const outDir = resolve(process.cwd(), args.out || args.o || "./src/rpc/generated");
const configPath = resolve(
  process.cwd(),
  args.config || args.c || "./openrpc-generator.config.json"
);
const USE_SNAKE =
  !!args["use-snake-case"] && String(args["use-snake-case"]).toLowerCase() !== "false";
const DEFAULT_OPTIONS_CONFIG = {
  queryOnlyPrefixes: ["get", "list"],
  mutationOnlyPrefixes: ["create", "update", "delete"],
};

/* ---------- Helpers ---------- */
const RESERVED = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "enum",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "await",
]);
const header = (n) => `/* AUTO-GENERATED: ${n} — do not edit by hand. */\n`;
const isIdent = (n) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(n);

/* case helpers */
const pascal = (s) =>
  String(s)
    .replace(/[_\-\s]+/g, " ")
    .replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/[^A-Za-z0-9]/g, "");
const camel = (s) => {
  const p = pascal(s);
  return p ? p[0].toLowerCase() + p.slice(1) : p;
};

/* snake id helpers: keep underscores, make TS-safe */
function snakeIdent(s) {
  let out = String(s).replace(/[^A-Za-z0-9_]/g, "_");
  if (!/^[A-Za-z_]/.test(out)) out = `_${out}`;
  if (RESERVED.has(out)) out = `${out}_`;
  return out;
}

/* function identifiers */
function safeFnIdent(n) {
  // camelCase path (legacy)
  const c = isIdent(n) ? n : camel(n);
  return RESERVED.has(c) ? `${c}_` : c;
}
function safeSnakeFnIdent(n) {
  // snake_case path
  return snakeIdent(n);
}

/* property keys for object fields */
const escProp = (n) => (isIdent(n) ? n : JSON.stringify(n));

/* schema refs and type name builders */
const refName = (ref) => String(ref ?? "").replace(/^#\/components\/schemas\//, "");
const P = (m) => (USE_SNAKE ? `${snakeIdent(m)}_params` : `${pascal(m)}Params`);
const R = (m) => (USE_SNAKE ? `${snakeIdent(m)}_result` : `${pascal(m)}Result`);
const FN = (m) => (USE_SNAKE ? safeSnakeFnIdent(m) : safeFnIdent(m));
const QFN = (m) => (USE_SNAKE ? `${snakeIdent(m)}_query_options` : `${safeFnIdent(m)}QueryOptions`);
const MFN = (m) =>
  USE_SNAKE ? `${snakeIdent(m)}_mutation_options` : `${safeFnIdent(m)}MutationOptions`;
const normalizePrefixes = (vals) =>
  (vals ?? [])
    .map((v) => String(v).trim().toLowerCase())
    .filter((v) => v.length > 0);

function parsePrefixList(val) {
  if (val === undefined || val === null) return null;
  if (Array.isArray(val)) return normalizePrefixes(val);
  const raw = String(val).trim();
  if (!raw) return null;

  // Attempt JSON parsing to allow CLI strings like '["get","list"]'
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return normalizePrefixes(parsed);
  } catch {
    /* ignore */
  }

  return normalizePrefixes(raw.split(","));
}

async function readConfigFile(p) {
  try {
    return JSON.parse(await readFile(p, "utf8"));
  } catch (err) {
    if (err?.code === "ENOENT") return null;
    throw err;
  }
}

async function loadOptionsConfig() {
  const fileCfgRaw = await readConfigFile(configPath);
  const fileCfg = fileCfgRaw?.options ?? fileCfgRaw ?? {};

  return {
    queryOnlyPrefixes:
      parsePrefixList(args["query-only-prefixes"]) ??
      parsePrefixList(fileCfg?.queryOnlyPrefixes) ??
      DEFAULT_OPTIONS_CONFIG.queryOnlyPrefixes,
    mutationOnlyPrefixes:
      parsePrefixList(args["mutation-only-prefixes"]) ??
      parsePrefixList(fileCfg?.mutationOnlyPrefixes) ??
      DEFAULT_OPTIONS_CONFIG.mutationOnlyPrefixes,
  };
}

function buildOptionsSelector(optionsCfg) {
  const queryOnly = normalizePrefixes(optionsCfg?.queryOnlyPrefixes);
  const mutationOnly = normalizePrefixes(optionsCfg?.mutationOnlyPrefixes);

  return (methodName) => {
    const lowerName = String(methodName).toLowerCase();
    const isQueryOnly = queryOnly.some((p) => lowerName.startsWith(p));
    const isMutationOnly = mutationOnly.some((p) => lowerName.startsWith(p));

    return {
      emitQuery: isQueryOnly || !isMutationOnly,
      emitMutation: isMutationOnly || !isQueryOnly,
    };
  };
}

function schemaToTs(s, schemas) {
  if (!s) return "unknown";
  if (s.$ref) return refName(s.$ref) || "unknown";
  const t = s.type;
  if (Array.isArray(t)) return t.map((x) => schemaToTs({ ...s, type: x }, schemas)).join(" | ");
  switch (t) {
    case "integer":
    case "number":
      return "number";
    case "string":
      return Array.isArray(s.enum) && s.enum.length
        ? s.enum.map((v) => JSON.stringify(v)).join(" | ")
        : "string";
    case "boolean":
      return "boolean";
    case "array":
      return `${schemaToTs(s.items, schemas)}[]`;
    case "object": {
      const props = s.properties ?? {};
      const req = new Set(s.required ?? []);
      const rows = Object.entries(props).map(([k, v]) => {
        const opt = req.has(k) ? "" : "?";
        return `  ${escProp(k)}${opt}: ${schemaToTs(v, schemas)};`;
      });
      return rows.length ? `{\n${rows.join("\n")}\n}` : "{}";
    }
    default:
      return "unknown";
  }
}

/* ---------- Main ---------- */
main().catch((e) => {
  console.error(e);
  process.exit(1);
});

async function main() {
  const spec = JSON.parse(await readFile(inputPath, "utf8"));
  if (!Array.isArray(spec?.methods)) throw new Error("Invalid OpenRPC: missing .methods[]");

  const schemas = spec?.components?.schemas ?? {};
  const optionsConfig = await loadOptionsConfig();
  await mkdir(outDir, { recursive: true });

  await writeFile(join(outDir, "types.ts"), emitTypesTs(schemas, spec.methods), "utf8");
  await writeFile(join(outDir, "api.ts"), emitApiTs(spec.methods), "utf8");
  await writeFile(
    join(outDir, "options.ts"),
    emitOptionsTs(spec.methods, optionsConfig),
    "utf8"
  );
  await writeFile(join(outDir, "index.ts"), emitIndexTs(), "utf8");
}

/* ---------- Emitters ---------- */
function emitTypesTs(schemas, methods) {
  const out = [header("types.ts")];

  // 1) Component schemas (preserve names exactly as in OpenRPC)
  for (const [name, sch] of Object.entries(schemas)) {
    const ts = schemaToTs(sch, schemas);
    if (sch?.type === "object" && ts.startsWith("{")) out.push(`export interface ${name} ${ts}\n`);
    else out.push(`export type ${name} = ${ts};\n`);
  }

  // 2) Params by method name
  for (const m of methods) {
    const pName = P(m.name);
    const fields = (m.params ?? [])
      .map((p) => {
        const opt = p.required ? "" : "?";
        return `  ${escProp(p.name)}${opt}: ${schemaToTs(p.schema ?? {}, schemas)};`;
      })
      .join("\n");
    out.push(`export interface ${pName} ${fields ? `{\n${fields}\n}` : "{}"}\n`);
  }

  // 3) Result: emit alias only if $ref name differs; inline otherwise
  for (const m of methods) {
    const rName = R(m.name);
    const rs = m?.result?.schema;
    if (rs?.$ref) {
      const target = refName(rs.$ref);
      if (target !== rName) out.push(`export type ${rName} = ${target};\n`); // avoid "type X = X"
    } else if (rs) {
      const ts = schemaToTs(rs, schemas);
      if (rs.type === "object" && ts.startsWith("{")) out.push(`export interface ${rName} ${ts}\n`);
      else out.push(`export type ${rName} = ${ts};\n`);
    } else {
      out.push(`export type ${rName} = unknown;\n`);
    }
  }

  return out.join("\n");
}

function emitApiTs(methods) {
  const allTypes = Array.from(new Set(methods.flatMap((m) => [P(m.name), R(m.name)])));
  return [
    header("api.ts"),
    `import type { AxiosRequestConfig } from "axios";`,
    `import { getRpcClient } from "../base";`,
    `import type { ${allTypes.join(", ")} } from "./types";`,
    ``,
    `export const api = {`,
    ...methods.map(
      (m) =>
        `  ${FN(m.name)}: (params: ${P(m.name)}, axios?: AxiosRequestConfig) =>` +
        ` getRpcClient().call<${P(m.name)}, ${R(m.name)}>(${JSON.stringify(
          m.name
        )}, params, axios),`
    ),
    `} as const;`,
    ``,
  ].join("\n");
}

function emitOptionsTs(methods, optionsConfig) {
  const allTypes = Array.from(new Set(methods.flatMap((m) => [P(m.name), R(m.name)])));
  const shouldEmit = buildOptionsSelector(optionsConfig);
  const methodOptions = methods.map((m) => ({
    ident: FN(m.name),
    qName: QFN(m.name),
    mName: MFN(m.name),
    params: P(m.name),
    result: R(m.name),
    method: m,
    ...shouldEmit(m.name),
  }));
  const hasQueries = methodOptions.some((m) => m.emitQuery);
  const hasMutations = methodOptions.some((m) => m.emitMutation);
  const reactQueryImports = [];
  if (hasQueries) reactQueryImports.push("UseQueryOptions");
  if (hasMutations) reactQueryImports.push("UseMutationOptions");
  const baseFactoryImports = [];
  if (hasQueries) baseFactoryImports.push("QueryOptionsFactory");
  if (hasMutations) baseFactoryImports.push("MutationOptionsFactory");

  const lines = [];

  lines.push(header("options.ts"));
  if (reactQueryImports.length) {
    lines.push(
      `import type { ${reactQueryImports.join(", ")} } from "@tanstack/react-query";`
    );
  }
  lines.push(`import { api } from "./api";`);
  if (baseFactoryImports.length) {
    lines.push(`import type { ${baseFactoryImports.join(", ")} } from "../base";`);
  }
  lines.push(`import type { ${allTypes.join(", ")} } from "./types";`, ``);

  for (const m of methodOptions) {
    if (m.emitQuery) {
      lines.push(
        `export function ${m.qName}(
  opts: QueryOptionsFactory<${m.params}, ${m.result}>
) {
  return {
    queryKey: [${JSON.stringify(m.method.name)}, opts.params] as const,
    queryFn: () => api.${m.ident}(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<${m.result}, unknown, ${m.result}, readonly unknown[]>;
}
`
      );
    }

    if (m.emitMutation) {
      lines.push(
        `export function ${m.mName}(
  opts: MutationOptionsFactory<${m.params}, ${m.result}>
) {
  return {
    mutationKey: [${JSON.stringify(m.method.name)}] as const,
    mutationFn: (params: ${m.params}) => api.${m.ident}(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<${m.result}, unknown, ${m.params}>;
}
`
      );
    }
  }

  return lines.join("\n");
}

function emitIndexTs() {
  return [
    header("index.ts"),
    `export * from "./types";`,
    `export * from "./api";`,
    `export * from "./options";`,
    ``,
  ].join("\n");
}
