/* AUTO-GENERATED: options.ts — do not edit by hand. */

import type { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { api } from "./api";
import type { QueryOptionsFactory, MutationOptionsFactory } from "../base";
import type { get_users_params, get_users_result, get_user_by_id_params, get_user_by_id_result, create_user_params, create_user_result, update_user_params, update_user_result, delete_user_params, delete_user_result } from "./types";

export function get_users_query_options(
  opts: QueryOptionsFactory<get_users_params, get_users_result>
) {
  return {
    queryKey: ["get_users", opts.params] as const,
    queryFn: () => api.get_users(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_users_result, unknown, get_users_result, readonly unknown[]>;
}

export function get_user_by_id_query_options(
  opts: QueryOptionsFactory<get_user_by_id_params, get_user_by_id_result>
) {
  return {
    queryKey: ["get_user_by_id", opts.params] as const,
    queryFn: () => api.get_user_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_user_by_id_result, unknown, get_user_by_id_result, readonly unknown[]>;
}

export function create_user_mutation_options(
  opts: MutationOptionsFactory<create_user_params, create_user_result>
) {
  return {
    mutationKey: ["create_user"] as const,
    mutationFn: (params: create_user_params) => api.create_user(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_user_result, unknown, create_user_params>;
}

export function update_user_mutation_options(
  opts: MutationOptionsFactory<update_user_params, update_user_result>
) {
  return {
    mutationKey: ["update_user"] as const,
    mutationFn: (params: update_user_params) => api.update_user(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_user_result, unknown, update_user_params>;
}

export function delete_user_mutation_options(
  opts: MutationOptionsFactory<delete_user_params, delete_user_result>
) {
  return {
    mutationKey: ["delete_user"] as const,
    mutationFn: (params: delete_user_params) => api.delete_user(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_user_result, unknown, delete_user_params>;
}
