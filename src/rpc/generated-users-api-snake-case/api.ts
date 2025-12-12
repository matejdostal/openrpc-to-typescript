/* AUTO-GENERATED: api.ts — do not edit by hand. */

import type { AxiosRequestConfig } from "axios";
import { getRpcClient } from "../base";
import type { get_users_params, get_users_result, get_user_by_id_params, get_user_by_id_result, create_user_params, create_user_result, update_user_params, update_user_result, delete_user_params, delete_user_result } from "./types";

export const api = {
  get_users: (params: get_users_params, axios?: AxiosRequestConfig) => getRpcClient().call<get_users_params, get_users_result>("get_users", params, axios),
  get_user_by_id: (params: get_user_by_id_params, axios?: AxiosRequestConfig) => getRpcClient().call<get_user_by_id_params, get_user_by_id_result>("get_user_by_id", params, axios),
  create_user: (params: create_user_params, axios?: AxiosRequestConfig) => getRpcClient().call<create_user_params, create_user_result>("create_user", params, axios),
  update_user: (params: update_user_params, axios?: AxiosRequestConfig) => getRpcClient().call<update_user_params, update_user_result>("update_user", params, axios),
  delete_user: (params: delete_user_params, axios?: AxiosRequestConfig) => getRpcClient().call<delete_user_params, delete_user_result>("delete_user", params, axios),
} as const;
