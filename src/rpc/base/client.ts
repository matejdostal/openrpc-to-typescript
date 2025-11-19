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
