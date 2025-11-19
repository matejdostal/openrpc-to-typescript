# JSON‑RPC TypeScript Client — scaffolding + generator

Minimal, stable scaffolding (`/src/rpc/base`) plus a Node ESM generator that emits a fully‑typed JSON‑RPC client from an OpenRPC file.
Validated against the uploaded “User Management API” spec (`getUsers`, `getUserById`, `createUser`, `updateUser`, `deleteUser`).

---

## Contents

- [Folder layout](#folder-layout)
- [Scaffolding: `/src/rpc/base` (handwritten, stable)](#scaffolding-srcrpcbase-handwritten-stable)

  - [`errors.ts`](#errorsts)
  - [`client.ts`](#clientts)
  - [`react-query.ts`](#react-queryts)
  - [`index.ts`](#indexts)

- [Generator: `scripts/generate.mjs` (Node ESM)](#generator-scriptsgeneratemjs-node-esm)
- [Install](#install)
- [Initialize in a React project](#initialize-in-a-react-project)
- [Generate API code](#generate-api-code)
- [Use in application code](#use-in-application-code)

  - [Query example](#query-example)
  - [Mutation example](#mutation-example)
  - [Per‑call Axios override](#per-call-axios-override)

- [Naming & regeneration guarantees](#naming--regeneration-guarantees)
- [Troubleshooting](#troubleshooting)

---

## Folder layout

```
src/rpc/
  base/                # stable, NEVER regenerated
    client.ts
    errors.ts
    react-query.ts
    index.ts
  generated/           # SAFE to delete & regenerate
    types.ts           # component schemas + all (Method)Params + (Method)Result*
    api.ts             # 1:1 JSON-RPC wrappers
    options.ts         # both QueryOptions & MutationOptions per method (static imports, mutationKey)
    index.ts           # barrel
scripts/
  generate.mjs         # the generator script (ESM)
```

- `Result` is emitted only when needed (e.g., inline result schema or differing `$ref` name). No `type X = X` self‑aliases. No duplicates like `GetUsersResultResult`.

---

## Scaffolding (`/src/rpc/base`) — copy once, do not regenerate

### `src/rpc/base/errors.ts`

```ts
export interface JsonRpcErrorObject<D = unknown> {
  code: number;
  message: string;
  data?: D;
}

export class JsonRpcError<D = unknown> extends Error {
  readonly code: number;
  readonly data?: D;
  constructor(obj: JsonRpcErrorObject<D>) {
    super(obj.message);
    this.name = "JsonRpcError";
    this.code = obj.code;
    this.data = obj.data;
  }
}
```

### `src/rpc/base/client.ts`

```ts
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { JsonRpcError, type JsonRpcErrorObject } from "./errors";

export class JsonRpcClient {
  constructor(private readonly http: AxiosInstance) {}

  async call<TParams, TResult>(
    method: string,
    params: TParams,
    config?: AxiosRequestConfig
  ): Promise<TResult> {
    const payload = {
      jsonrpc: "2.0" as const,
      method,
      params,
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    };

    const res = await this.http.post("", payload, config);
    const json: unknown = res.data;

    if (isRpcFailure(json)) throw new JsonRpcError(json.error);
    if (isRpcSuccess<TResult>(json)) return json.result;

    throw new JsonRpcError({ code: -32700, message: "Invalid JSON-RPC response", data: json });
  }
}

export interface RpcSuccess<TResult = unknown> {
  jsonrpc: "2.0";
  result: TResult;
  id: string | number | null;
}
export interface RpcFailure {
  jsonrpc: "2.0";
  error: JsonRpcErrorObject;
  id: string | number | null;
}

function isRecord(x: unknown): x is Record<string, unknown> {
  return x !== null && typeof x === "object";
}
function isRpcSuccess<T>(x: unknown): x is RpcSuccess<T> {
  return isRecord(x) && x.jsonrpc === "2.0" && "result" in x;
}
function isRpcFailure(x: unknown): x is RpcFailure {
  return isRecord(x) && x.jsonrpc === "2.0" && "error" in x;
}

/** App-level injection of a ready Axios instance (baseURL, auth, interceptors). */
let _client: JsonRpcClient | null = null;

export function configureRpcClient(http: AxiosInstance): void {
  _client = new JsonRpcClient(http);
}

export function getRpcClient(): JsonRpcClient {
  if (!_client) {
    throw new Error(
      "RPC client not configured. Call configureRpcClient(axiosInstance) at app startup."
    );
  }
  return _client;
}
```

### `src/rpc/base/react-query.ts`

```ts
import type { UseMutationOptions, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";

export interface QueryOptionsFactory<TParams, TResult> {
  params: TParams;
  axios?: AxiosRequestConfig;
  query?: Omit<UseQueryOptions<TResult, unknown, TResult, QueryKey>, "queryKey" | "queryFn">;
}

export interface MutationOptionsFactory<TParams, TResult> {
  axios?: AxiosRequestConfig;
  mutation?: Omit<UseMutationOptions<TResult, unknown, TParams>, "mutationFn">;
}
```

### `src/rpc/base/index.ts`

```ts
export * from "./errors";
export * from "./client";
export * from "./react-query";
```

---

## Generator (`scripts/generate.mjs`) — ESM, Node 18+

- No dynamic imports in generated code.
- `generated/options.ts` now uses **top‑level imports** and adds a **static `mutationKey: ["<methodName>"]`** for every mutation options factory.
- Strict naming by method for `Params` and `Result`. No self‑aliases.

```js
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
const safeFnIdent = (n) => {
  const c = isIdent(n) ? n : camel(n);
  return RESERVED.has(c) ? `${c}_` : c;
};
const escProp = (n) => (isIdent(n) ? n : JSON.stringify(n));
const refName = (ref) => String(ref ?? "").replace(/^#\/components\/schemas\//, "");
const P = (m) => `${pascal(m)}Params`;
const R = (m) => `${pascal(m)}Result`;

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

  // 1) Component schemas (e.g., User, GetUsersResult, ...)
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

  // 3) Results: emit only if schema name ≠ method-named Result or schema is inline.
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
        `  ${safeFnIdent(m.name)}: (params: ${P(m.name)}, axios?: AxiosRequestConfig) =>` +
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
    const ident = safeFnIdent(m.name);
    const p = P(m.name);
    const r = R(m.name);

    lines.push(
      `export function ${ident}QueryOptions(
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
      `export function ${ident}MutationOptions(
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
```

---

## Install

```bash
# peer libraries used by base/options
npm i axios @tanstack/react-query
# or
pnpm add axios @tanstack/react-query
```

---

## Initialize in a React project

Create the scaffolding files under `src/rpc/base` (exact contents above).

Configure the RPC client once at app startup with a preconfigured Axios instance:

```ts
// src/main.tsx (or similar)
import axios from "axios";
import { configureRpcClient } from "@/rpc/base"; // or "@/rpc" if you also export a top-level barrel

configureRpcClient(axios.create({ baseURL: "/rpc", timeout: 10_000 }));
// Add your own interceptors for auth/logging if needed — at the app level.
```

---

## Generate API code

```bash
# From repository root
node scripts/generate.mjs --input ./openrpc.json --out ./src/rpc/generated
```

Generated files:

- `src/rpc/generated/types.ts` – component schemas + all `(Method)Params` + method‑named `Result` types (only when needed).
- `src/rpc/generated/api.ts` – 1:1 wrappers: `(params, axios?)`.
- `src/rpc/generated/options.ts` – **both** `methodQueryOptions` and `methodMutationOptions` per RPC method.
  Now with static top‑level imports and `mutationKey: ["<methodName>"]`.
- `src/rpc/generated/index.ts` – barrel.

Regeneration is safe; only `src/rpc/generated/*` is overwritten.

---

## Use in application code

### Query example

```tsx
import { useQuery } from "@tanstack/react-query";
import { getUserByIdQueryOptions } from "@/rpc/generated";

export function UserDetail({ id }: { id: number }) {
  const q = useQuery(
    getUserByIdQueryOptions({
      params: { id },
      query: { staleTime: 10_000 },
    })
  );

  if (q.isLoading) return <>Loading…</>;
  if (q.error) return <>Error</>;

  return <div>{q.data.data.name}</div>;
}
```

### Mutation example (with `mutationKey`)

```tsx
import { useMutation } from "@tanstack/react-query";
import { createUserMutationOptions } from "@/rpc/generated";

export function CreateUserButton() {
  const m = useMutation(
    createUserMutationOptions({
      // You can still pass React Query options here:
      mutation: { retry: 0 },
    })
  );

  return (
    <button onClick={() => m.mutate({ name: "Ada", email: "ada@example.com" })}>Create</button>
  );
}
```

> The generated mutation options include `mutationKey: ["createUser"]`. You can rely on this for cache scoping or custom mutation behaviors.

### Per‑call Axios override

```ts
import { api } from "@/rpc/generated";

// Override timeout for a single RPC
await api.getUsers({}, { timeout: 4000 });
```

---

## Naming & regeneration guarantees

- One **Params** and one **Result** per method, named strictly by method:
  `PascalCase(method) + "Params"` and `PascalCase(method) + "Result"`.
- If the OpenRPC result `$ref` name equals the method‑named `Result`, **no alias** is emitted.
  If it differs, the generator emits a single alias:

  ```ts
  export type GetUsersResult = GetUsersResponse;
  ```

  No `type X = X`, no `GetUsersResultResult`.

- `/src/rpc/base/*` is handwritten and **never** overwritten. `/src/rpc/generated/*` is safe to regenerate.

---

## Troubleshooting

- Ensure Node 18+ and TypeScript 5+. The generator is ESM; keep filename `.mjs`.
- If your OpenRPC uses non‑identifier names or reserved words, exported function identifiers are sanitized (reserved words gain a trailing `_`), while the **wire method string** passed to `.call("<original>")` remains unchanged.
- This setup was validated against the uploaded OpenRPC spec for a user CRUD API.

---
