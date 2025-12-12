/* AUTO-GENERATED: api.ts — do not edit by hand. */

import type { AxiosRequestConfig } from "axios";
import { getRpcClient } from "../base";
import type { GetUsersParams, GetUsersResult, GetUserByIdParams, GetUserByIdResult, CreateUserParams, CreateUserResult, UpdateUserParams, UpdateUserResult, DeleteUserParams, DeleteUserResult } from "./types";

/* Transform helpers for snake_case <-> camelCase */
function transformKeys(obj: any, keyMap: Record<string, string>): any {
  if (!obj || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map((item: any) => transformKeys(item, keyMap));
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = keyMap[key] ?? key;
    result[newKey] = transformKeys(value, keyMap);
  }
  return result;
}

export const api = {
  getUsers: async (params: GetUsersParams, axios?: AxiosRequestConfig) => {
    const transformedParams = params;
    const result = await getRpcClient().call<any, any>("getUsers", transformedParams, axios);
    return transformKeys(result, { data: "data" }) as GetUsersResult;
  },
  getUserById: async (params: GetUserByIdParams, axios?: AxiosRequestConfig) => {
    const transformedParams = params;
    const result = await getRpcClient().call<any, any>("getUserById", transformedParams, axios);
    return transformKeys(result, { data: "data" }) as GetUserByIdResult;
  },
  createUser: async (params: CreateUserParams, axios?: AxiosRequestConfig) => {
    const transformedParams = params;
    const result = await getRpcClient().call<any, any>("createUser", transformedParams, axios);
    return transformKeys(result, { data: "data" }) as CreateUserResult;
  },
  updateUser: async (params: UpdateUserParams, axios?: AxiosRequestConfig) => {
    const transformedParams = params;
    const result = await getRpcClient().call<any, any>("updateUser", transformedParams, axios);
    return transformKeys(result, { data: "data" }) as UpdateUserResult;
  },
  deleteUser: (params: DeleteUserParams, axios?: AxiosRequestConfig) => getRpcClient().call<DeleteUserParams, DeleteUserResult>("deleteUser", params, axios),
} as const;
