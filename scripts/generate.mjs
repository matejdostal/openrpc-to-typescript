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
const USE_SNAKE =
  !!args["use-snake-case"] && String(args["use-snake-case"]).toLowerCase() !== "false";

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
  await mkdir(outDir, { recursive: true });

  await writeFile(join(outDir, "types.ts"), emitTypesTs(schemas, spec.methods), "utf8");
  await writeFile(join(outDir, "api.ts"), emitApiTs(spec.methods), "utf8");
  await writeFile(join(outDir, "options.ts"), emitOptionsTs(spec.methods), "utf8");
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

function emitOptionsTs(methods) {
  const allTypes = Array.from(new Set(methods.flatMap((m) => [P(m.name), R(m.name)])));
  const lines = [];

  lines.push(header("options.ts"));
  lines.push(
    `import type { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";`,
    `import { api } from "./api";`,
    `import type { QueryOptionsFactory, MutationOptionsFactory } from "../base";`,
    `import type { ${allTypes.join(", ")} } from "./types";`,
    ``
  );

  for (const m of methods) {
    const ident = FN(m.name);
    const qName = QFN(m.name);
    const mName = MFN(m.name);
    const p = P(m.name);
    const r = R(m.name);

    lines.push(
      `export function ${qName}(
  opts: QueryOptionsFactory<${p}, ${r}>
) {
  return {
    queryKey: [${JSON.stringify(m.name)}, opts.params] as const,
    queryFn: () => api.${ident}(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<${r}, unknown, ${r}, readonly unknown[]>;
}
`
    );

    lines.push(
      `export function ${mName}(
  opts: MutationOptionsFactory<${p}, ${r}>
) {
  return {
    mutationKey: [${JSON.stringify(m.name)}] as const,
    mutationFn: (params: ${p}) => api.${ident}(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<${r}, unknown, ${p}>;
}
`
    );
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
