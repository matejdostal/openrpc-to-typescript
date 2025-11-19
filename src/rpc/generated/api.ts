/* AUTO-GENERATED: api.ts — do not edit by hand. */

import type { AxiosRequestConfig } from "axios";
import { getRpcClient } from "../base";
import type { GetUsersParams, GetUsersResult, GetUserByIdParams, GetUserByIdResult, CreateUserParams, CreateUserResult, UpdateUserParams, UpdateUserResult, DeleteUserParams, DeleteUserResult } from "./types";

export const api = {
  getUsers: (params: GetUsersParams, axios?: AxiosRequestConfig) => getRpcClient().call<GetUsersParams, GetUsersResult>("getUsers", params, axios),
  getUserById: (params: GetUserByIdParams, axios?: AxiosRequestConfig) => getRpcClient().call<GetUserByIdParams, GetUserByIdResult>("getUserById", params, axios),
  createUser: (params: CreateUserParams, axios?: AxiosRequestConfig) => getRpcClient().call<CreateUserParams, CreateUserResult>("createUser", params, axios),
  updateUser: (params: UpdateUserParams, axios?: AxiosRequestConfig) => getRpcClient().call<UpdateUserParams, UpdateUserResult>("updateUser", params, axios),
  deleteUser: (params: DeleteUserParams, axios?: AxiosRequestConfig) => getRpcClient().call<DeleteUserParams, DeleteUserResult>("deleteUser", params, axios),
} as const;
