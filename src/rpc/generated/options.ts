/* AUTO-GENERATED: options.ts — do not edit by hand. */

import type { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { api } from "./api";
import type { QueryOptionsFactory, MutationOptionsFactory } from "../base";
import type { GetUsersParams, GetUsersResult, GetUserByIdParams, GetUserByIdResult, CreateUserParams, CreateUserResult, UpdateUserParams, UpdateUserResult, DeleteUserParams, DeleteUserResult } from "./types";

export function getUsersQueryOptions(
  opts: QueryOptionsFactory<GetUsersParams, GetUsersResult>
) {
  return {
    queryKey: ["getUsers", opts.params] as const,
    queryFn: () => api.getUsers(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<GetUsersResult, unknown, GetUsersResult, readonly unknown[]>;
}

export function getUsersMutationOptions(
  opts: MutationOptionsFactory<GetUsersParams, GetUsersResult>
) {
  return {
    mutationKey: ["getUsers"] as const,
    mutationFn: (params: GetUsersParams) => api.getUsers(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<GetUsersResult, unknown, GetUsersParams>;
}

export function getUserByIdQueryOptions(
  opts: QueryOptionsFactory<GetUserByIdParams, GetUserByIdResult>
) {
  return {
    queryKey: ["getUserById", opts.params] as const,
    queryFn: () => api.getUserById(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<GetUserByIdResult, unknown, GetUserByIdResult, readonly unknown[]>;
}

export function getUserByIdMutationOptions(
  opts: MutationOptionsFactory<GetUserByIdParams, GetUserByIdResult>
) {
  return {
    mutationKey: ["getUserById"] as const,
    mutationFn: (params: GetUserByIdParams) => api.getUserById(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<GetUserByIdResult, unknown, GetUserByIdParams>;
}

export function createUserQueryOptions(
  opts: QueryOptionsFactory<CreateUserParams, CreateUserResult>
) {
  return {
    queryKey: ["createUser", opts.params] as const,
    queryFn: () => api.createUser(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<CreateUserResult, unknown, CreateUserResult, readonly unknown[]>;
}

export function createUserMutationOptions(
  opts: MutationOptionsFactory<CreateUserParams, CreateUserResult>
) {
  return {
    mutationKey: ["createUser"] as const,
    mutationFn: (params: CreateUserParams) => api.createUser(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<CreateUserResult, unknown, CreateUserParams>;
}

export function updateUserQueryOptions(
  opts: QueryOptionsFactory<UpdateUserParams, UpdateUserResult>
) {
  return {
    queryKey: ["updateUser", opts.params] as const,
    queryFn: () => api.updateUser(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<UpdateUserResult, unknown, UpdateUserResult, readonly unknown[]>;
}

export function updateUserMutationOptions(
  opts: MutationOptionsFactory<UpdateUserParams, UpdateUserResult>
) {
  return {
    mutationKey: ["updateUser"] as const,
    mutationFn: (params: UpdateUserParams) => api.updateUser(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<UpdateUserResult, unknown, UpdateUserParams>;
}

export function deleteUserQueryOptions(
  opts: QueryOptionsFactory<DeleteUserParams, DeleteUserResult>
) {
  return {
    queryKey: ["deleteUser", opts.params] as const,
    queryFn: () => api.deleteUser(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<DeleteUserResult, unknown, DeleteUserResult, readonly unknown[]>;
}

export function deleteUserMutationOptions(
  opts: MutationOptionsFactory<DeleteUserParams, DeleteUserResult>
) {
  return {
    mutationKey: ["deleteUser"] as const,
    mutationFn: (params: DeleteUserParams) => api.deleteUser(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<DeleteUserResult, unknown, DeleteUserParams>;
}
