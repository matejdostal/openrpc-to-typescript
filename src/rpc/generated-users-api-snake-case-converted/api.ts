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
    const result = await getRpcClient().call<any, any>("get_users", transformedParams, axios);
    return transformKeys(result, { data: "data", user_id: "userId", user_name: "userName", user_email: "userEmail", total_count: "totalCount" }) as GetUsersResult;
  },
  getUserById: async (params: GetUserByIdParams, axios?: AxiosRequestConfig) => {
    const transformedParams = transformKeys(params, { userId: "user_id" });
    const result = await getRpcClient().call<any, any>("get_user_by_id", transformedParams, axios);
    return transformKeys(result, { data: "data", user_id: "userId", user_name: "userName", user_email: "userEmail" }) as GetUserByIdResult;
  },
  createUser: async (params: CreateUserParams, axios?: AxiosRequestConfig) => {
    const transformedParams = transformKeys(params, { userName: "user_name", userEmail: "user_email" });
    const result = await getRpcClient().call<any, any>("create_user", transformedParams, axios);
    return transformKeys(result, { data: "data", user_id: "userId", user_name: "userName", user_email: "userEmail" }) as CreateUserResult;
  },
  updateUser: async (params: UpdateUserParams, axios?: AxiosRequestConfig) => {
    const transformedParams = transformKeys(params, { userId: "user_id", userName: "user_name", userEmail: "user_email" });
    const result = await getRpcClient().call<any, any>("update_user", transformedParams, axios);
    return transformKeys(result, { data: "data", user_id: "userId", user_name: "userName", user_email: "userEmail" }) as UpdateUserResult;
  },
  deleteUser: async (params: DeleteUserParams, axios?: AxiosRequestConfig) => {
    const transformedParams = transformKeys(params, { userId: "user_id" });
    const result = await getRpcClient().call<any, any>("delete_user", transformedParams, axios);
    return result as DeleteUserResult;
  },
} as const;
