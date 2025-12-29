/* AUTO-GENERATED: options.ts — do not edit by hand. */

import type { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { queryOptions, mutationOptions } from "@tanstack/react-query";
import { api } from "./api";
import type { QueryOptionsFactory, MutationOptionsFactory } from "../base";
import type { GetUsersParams, GetUsersResult, GetUserByIdParams, GetUserByIdResult, CreateUserParams, CreateUserResult, UpdateUserParams, UpdateUserResult, DeleteUserParams, DeleteUserResult } from "./types";

export function getUsersQueryOptions(
  opts: QueryOptionsFactory<GetUsersParams, GetUsersResult>
) {
  return queryOptions({
    queryKey: ["getUsers", opts.params] as const,
    queryFn: () => api.getUsers(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<GetUsersResult, unknown, GetUsersResult, readonly unknown[]>);
}

export function getUserByIdQueryOptions(
  opts: QueryOptionsFactory<GetUserByIdParams, GetUserByIdResult>
) {
  return queryOptions({
    queryKey: ["getUserById", opts.params] as const,
    queryFn: () => api.getUserById(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<GetUserByIdResult, unknown, GetUserByIdResult, readonly unknown[]>);
}

export function createUserMutationOptions(
  opts: MutationOptionsFactory<CreateUserParams, CreateUserResult>
) {
  return mutationOptions({
    mutationKey: ["createUser"] as const,
    mutationFn: (params: CreateUserParams) => api.createUser(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<CreateUserResult, unknown, CreateUserParams>);
}

export function updateUserMutationOptions(
  opts: MutationOptionsFactory<UpdateUserParams, UpdateUserResult>
) {
  return mutationOptions({
    mutationKey: ["updateUser"] as const,
    mutationFn: (params: UpdateUserParams) => api.updateUser(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<UpdateUserResult, unknown, UpdateUserParams>);
}

export function deleteUserMutationOptions(
  opts: MutationOptionsFactory<DeleteUserParams, DeleteUserResult>
) {
  return mutationOptions({
    mutationKey: ["deleteUser"] as const,
    mutationFn: (params: DeleteUserParams) => api.deleteUser(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<DeleteUserResult, unknown, DeleteUserParams>);
}
