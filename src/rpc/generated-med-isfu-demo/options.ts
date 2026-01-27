/* AUTO-GENERATED: options.ts — do not edit by hand. */

import type { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { queryOptions, mutationOptions } from "@tanstack/react-query";
import { api } from "./api";
import type { QueryOptionsFactory, MutationOptionsFactory } from "../base";
import type { Login_params, Login_result, Logout_params, Logout_result, GetSessionStatus_params, GetSessionStatus_result, RdsBillingTariff_Create_params, RdsBillingTariff_Create_result, RdsBillingTariff_Update_params, RdsBillingTariff_Update_result, RdsBillingTariff_Delete_params, RdsBillingTariff_Delete_result, RdsBillingTariff_GetAll_params, RdsBillingTariff_GetAll_result, Dodavatel_Create_params, Dodavatel_Create_result, Dodavatel_Update_params, Dodavatel_Update_result, Dodavatel_Delete_params, Dodavatel_Delete_result, Dodavatel_GetAll_params, Dodavatel_GetAll_result, InvoiceItem_Create_params, InvoiceItem_Create_result, InvoiceItem_Update_params, InvoiceItem_Update_result, InvoiceItem_Delete_params, InvoiceItem_Delete_result, InvoiceItemRevision_Create_params, InvoiceItemRevision_Create_result, InvoiceItemRevision_Update_params, InvoiceItemRevision_Update_result, InvoiceItemRevision_Delete_params, InvoiceItemRevision_Delete_result, Mds_Create_params, Mds_Create_result, Mds_Update_params, Mds_Update_result, Mds_Delete_params, Mds_Delete_result, Mds_GetAll_params, Mds_GetAll_result, Mds_GetByEic_params, Mds_GetByEic_result, MdsPurgeById_params, MdsPurgeById_result, MdsRevision_Create_params, MdsRevision_Create_result, MdsRevision_Update_params, MdsRevision_Update_result, MdsRevision_Delete_params, MdsRevision_Delete_result, Oom_Create_params, Oom_Create_result, Oom_Update_params, Oom_Update_result, Oom_Delete_params, Oom_Delete_result, OomGetByEic_params, OomGetByEic_result, OomGetByMdsId_params, OomGetByMdsId_result, OomRevision_InsertNewRevision_params, OomRevision_InsertNewRevision_result, OomRevision_Create_params, OomRevision_Create_result, OomRevision_Update_params, OomRevision_Update_result, OomRevision_Delete_params, OomRevision_Delete_result } from "./types";

export function Login_query_options(
  opts: QueryOptionsFactory<Login_params, Login_result>
) {
  return queryOptions({
    queryKey: ["Login", opts.params] as const,
    queryFn: () => api.Login(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Login_result, unknown, Login_result, readonly unknown[]>);
}

export function Login_mutation_options(
  opts: MutationOptionsFactory<Login_params, Login_result>
) {
  return mutationOptions({
    mutationKey: ["Login"] as const,
    mutationFn: (params: Login_params) => api.Login(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Login_result, unknown, Login_params>);
}

export function Logout_query_options(
  opts: QueryOptionsFactory<Logout_params, Logout_result>
) {
  return queryOptions({
    queryKey: ["Logout", opts.params] as const,
    queryFn: () => api.Logout(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Logout_result, unknown, Logout_result, readonly unknown[]>);
}

export function Logout_mutation_options(
  opts: MutationOptionsFactory<Logout_params, Logout_result>
) {
  return mutationOptions({
    mutationKey: ["Logout"] as const,
    mutationFn: (params: Logout_params) => api.Logout(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Logout_result, unknown, Logout_params>);
}

export function GetSessionStatus_query_options(
  opts: QueryOptionsFactory<GetSessionStatus_params, GetSessionStatus_result>
) {
  return queryOptions({
    queryKey: ["GetSessionStatus", opts.params] as const,
    queryFn: () => api.GetSessionStatus(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<GetSessionStatus_result, unknown, GetSessionStatus_result, readonly unknown[]>);
}

export function RdsBillingTariff_Create_query_options(
  opts: QueryOptionsFactory<RdsBillingTariff_Create_params, RdsBillingTariff_Create_result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_Create", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_Create_result, unknown, RdsBillingTariff_Create_result, readonly unknown[]>);
}

export function RdsBillingTariff_Create_mutation_options(
  opts: MutationOptionsFactory<RdsBillingTariff_Create_params, RdsBillingTariff_Create_result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_Create"] as const,
    mutationFn: (params: RdsBillingTariff_Create_params) => api.RdsBillingTariff_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_Create_result, unknown, RdsBillingTariff_Create_params>);
}

export function RdsBillingTariff_Update_query_options(
  opts: QueryOptionsFactory<RdsBillingTariff_Update_params, RdsBillingTariff_Update_result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_Update", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_Update_result, unknown, RdsBillingTariff_Update_result, readonly unknown[]>);
}

export function RdsBillingTariff_Update_mutation_options(
  opts: MutationOptionsFactory<RdsBillingTariff_Update_params, RdsBillingTariff_Update_result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_Update"] as const,
    mutationFn: (params: RdsBillingTariff_Update_params) => api.RdsBillingTariff_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_Update_result, unknown, RdsBillingTariff_Update_params>);
}

export function RdsBillingTariff_Delete_query_options(
  opts: QueryOptionsFactory<RdsBillingTariff_Delete_params, RdsBillingTariff_Delete_result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_Delete", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_Delete_result, unknown, RdsBillingTariff_Delete_result, readonly unknown[]>);
}

export function RdsBillingTariff_Delete_mutation_options(
  opts: MutationOptionsFactory<RdsBillingTariff_Delete_params, RdsBillingTariff_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_Delete"] as const,
    mutationFn: (params: RdsBillingTariff_Delete_params) => api.RdsBillingTariff_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_Delete_result, unknown, RdsBillingTariff_Delete_params>);
}

export function RdsBillingTariff_GetAll_query_options(
  opts: QueryOptionsFactory<RdsBillingTariff_GetAll_params, RdsBillingTariff_GetAll_result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_GetAll", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_GetAll(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_GetAll_result, unknown, RdsBillingTariff_GetAll_result, readonly unknown[]>);
}

export function RdsBillingTariff_GetAll_mutation_options(
  opts: MutationOptionsFactory<RdsBillingTariff_GetAll_params, RdsBillingTariff_GetAll_result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_GetAll"] as const,
    mutationFn: (params: RdsBillingTariff_GetAll_params) => api.RdsBillingTariff_GetAll(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_GetAll_result, unknown, RdsBillingTariff_GetAll_params>);
}

export function Dodavatel_Create_query_options(
  opts: QueryOptionsFactory<Dodavatel_Create_params, Dodavatel_Create_result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_Create", opts.params] as const,
    queryFn: () => api.Dodavatel_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_Create_result, unknown, Dodavatel_Create_result, readonly unknown[]>);
}

export function Dodavatel_Create_mutation_options(
  opts: MutationOptionsFactory<Dodavatel_Create_params, Dodavatel_Create_result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_Create"] as const,
    mutationFn: (params: Dodavatel_Create_params) => api.Dodavatel_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_Create_result, unknown, Dodavatel_Create_params>);
}

export function Dodavatel_Update_query_options(
  opts: QueryOptionsFactory<Dodavatel_Update_params, Dodavatel_Update_result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_Update", opts.params] as const,
    queryFn: () => api.Dodavatel_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_Update_result, unknown, Dodavatel_Update_result, readonly unknown[]>);
}

export function Dodavatel_Update_mutation_options(
  opts: MutationOptionsFactory<Dodavatel_Update_params, Dodavatel_Update_result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_Update"] as const,
    mutationFn: (params: Dodavatel_Update_params) => api.Dodavatel_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_Update_result, unknown, Dodavatel_Update_params>);
}

export function Dodavatel_Delete_query_options(
  opts: QueryOptionsFactory<Dodavatel_Delete_params, Dodavatel_Delete_result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_Delete", opts.params] as const,
    queryFn: () => api.Dodavatel_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_Delete_result, unknown, Dodavatel_Delete_result, readonly unknown[]>);
}

export function Dodavatel_Delete_mutation_options(
  opts: MutationOptionsFactory<Dodavatel_Delete_params, Dodavatel_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_Delete"] as const,
    mutationFn: (params: Dodavatel_Delete_params) => api.Dodavatel_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_Delete_result, unknown, Dodavatel_Delete_params>);
}

export function Dodavatel_GetAll_query_options(
  opts: QueryOptionsFactory<Dodavatel_GetAll_params, Dodavatel_GetAll_result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_GetAll", opts.params] as const,
    queryFn: () => api.Dodavatel_GetAll(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_GetAll_result, unknown, Dodavatel_GetAll_result, readonly unknown[]>);
}

export function Dodavatel_GetAll_mutation_options(
  opts: MutationOptionsFactory<Dodavatel_GetAll_params, Dodavatel_GetAll_result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_GetAll"] as const,
    mutationFn: (params: Dodavatel_GetAll_params) => api.Dodavatel_GetAll(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_GetAll_result, unknown, Dodavatel_GetAll_params>);
}

export function InvoiceItem_Create_query_options(
  opts: QueryOptionsFactory<InvoiceItem_Create_params, InvoiceItem_Create_result>
) {
  return queryOptions({
    queryKey: ["InvoiceItem_Create", opts.params] as const,
    queryFn: () => api.InvoiceItem_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItem_Create_result, unknown, InvoiceItem_Create_result, readonly unknown[]>);
}

export function InvoiceItem_Create_mutation_options(
  opts: MutationOptionsFactory<InvoiceItem_Create_params, InvoiceItem_Create_result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItem_Create"] as const,
    mutationFn: (params: InvoiceItem_Create_params) => api.InvoiceItem_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItem_Create_result, unknown, InvoiceItem_Create_params>);
}

export function InvoiceItem_Update_query_options(
  opts: QueryOptionsFactory<InvoiceItem_Update_params, InvoiceItem_Update_result>
) {
  return queryOptions({
    queryKey: ["InvoiceItem_Update", opts.params] as const,
    queryFn: () => api.InvoiceItem_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItem_Update_result, unknown, InvoiceItem_Update_result, readonly unknown[]>);
}

export function InvoiceItem_Update_mutation_options(
  opts: MutationOptionsFactory<InvoiceItem_Update_params, InvoiceItem_Update_result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItem_Update"] as const,
    mutationFn: (params: InvoiceItem_Update_params) => api.InvoiceItem_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItem_Update_result, unknown, InvoiceItem_Update_params>);
}

export function InvoiceItem_Delete_query_options(
  opts: QueryOptionsFactory<InvoiceItem_Delete_params, InvoiceItem_Delete_result>
) {
  return queryOptions({
    queryKey: ["InvoiceItem_Delete", opts.params] as const,
    queryFn: () => api.InvoiceItem_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItem_Delete_result, unknown, InvoiceItem_Delete_result, readonly unknown[]>);
}

export function InvoiceItem_Delete_mutation_options(
  opts: MutationOptionsFactory<InvoiceItem_Delete_params, InvoiceItem_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItem_Delete"] as const,
    mutationFn: (params: InvoiceItem_Delete_params) => api.InvoiceItem_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItem_Delete_result, unknown, InvoiceItem_Delete_params>);
}

export function InvoiceItemRevision_Create_query_options(
  opts: QueryOptionsFactory<InvoiceItemRevision_Create_params, InvoiceItemRevision_Create_result>
) {
  return queryOptions({
    queryKey: ["InvoiceItemRevision_Create", opts.params] as const,
    queryFn: () => api.InvoiceItemRevision_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItemRevision_Create_result, unknown, InvoiceItemRevision_Create_result, readonly unknown[]>);
}

export function InvoiceItemRevision_Create_mutation_options(
  opts: MutationOptionsFactory<InvoiceItemRevision_Create_params, InvoiceItemRevision_Create_result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItemRevision_Create"] as const,
    mutationFn: (params: InvoiceItemRevision_Create_params) => api.InvoiceItemRevision_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItemRevision_Create_result, unknown, InvoiceItemRevision_Create_params>);
}

export function InvoiceItemRevision_Update_query_options(
  opts: QueryOptionsFactory<InvoiceItemRevision_Update_params, InvoiceItemRevision_Update_result>
) {
  return queryOptions({
    queryKey: ["InvoiceItemRevision_Update", opts.params] as const,
    queryFn: () => api.InvoiceItemRevision_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItemRevision_Update_result, unknown, InvoiceItemRevision_Update_result, readonly unknown[]>);
}

export function InvoiceItemRevision_Update_mutation_options(
  opts: MutationOptionsFactory<InvoiceItemRevision_Update_params, InvoiceItemRevision_Update_result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItemRevision_Update"] as const,
    mutationFn: (params: InvoiceItemRevision_Update_params) => api.InvoiceItemRevision_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItemRevision_Update_result, unknown, InvoiceItemRevision_Update_params>);
}

export function InvoiceItemRevision_Delete_query_options(
  opts: QueryOptionsFactory<InvoiceItemRevision_Delete_params, InvoiceItemRevision_Delete_result>
) {
  return queryOptions({
    queryKey: ["InvoiceItemRevision_Delete", opts.params] as const,
    queryFn: () => api.InvoiceItemRevision_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItemRevision_Delete_result, unknown, InvoiceItemRevision_Delete_result, readonly unknown[]>);
}

export function InvoiceItemRevision_Delete_mutation_options(
  opts: MutationOptionsFactory<InvoiceItemRevision_Delete_params, InvoiceItemRevision_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItemRevision_Delete"] as const,
    mutationFn: (params: InvoiceItemRevision_Delete_params) => api.InvoiceItemRevision_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItemRevision_Delete_result, unknown, InvoiceItemRevision_Delete_params>);
}

export function Mds_Create_query_options(
  opts: QueryOptionsFactory<Mds_Create_params, Mds_Create_result>
) {
  return queryOptions({
    queryKey: ["Mds_Create", opts.params] as const,
    queryFn: () => api.Mds_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_Create_result, unknown, Mds_Create_result, readonly unknown[]>);
}

export function Mds_Create_mutation_options(
  opts: MutationOptionsFactory<Mds_Create_params, Mds_Create_result>
) {
  return mutationOptions({
    mutationKey: ["Mds_Create"] as const,
    mutationFn: (params: Mds_Create_params) => api.Mds_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_Create_result, unknown, Mds_Create_params>);
}

export function Mds_Update_query_options(
  opts: QueryOptionsFactory<Mds_Update_params, Mds_Update_result>
) {
  return queryOptions({
    queryKey: ["Mds_Update", opts.params] as const,
    queryFn: () => api.Mds_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_Update_result, unknown, Mds_Update_result, readonly unknown[]>);
}

export function Mds_Update_mutation_options(
  opts: MutationOptionsFactory<Mds_Update_params, Mds_Update_result>
) {
  return mutationOptions({
    mutationKey: ["Mds_Update"] as const,
    mutationFn: (params: Mds_Update_params) => api.Mds_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_Update_result, unknown, Mds_Update_params>);
}

export function Mds_Delete_query_options(
  opts: QueryOptionsFactory<Mds_Delete_params, Mds_Delete_result>
) {
  return queryOptions({
    queryKey: ["Mds_Delete", opts.params] as const,
    queryFn: () => api.Mds_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_Delete_result, unknown, Mds_Delete_result, readonly unknown[]>);
}

export function Mds_Delete_mutation_options(
  opts: MutationOptionsFactory<Mds_Delete_params, Mds_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["Mds_Delete"] as const,
    mutationFn: (params: Mds_Delete_params) => api.Mds_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_Delete_result, unknown, Mds_Delete_params>);
}

export function Mds_GetAll_query_options(
  opts: QueryOptionsFactory<Mds_GetAll_params, Mds_GetAll_result>
) {
  return queryOptions({
    queryKey: ["Mds_GetAll", opts.params] as const,
    queryFn: () => api.Mds_GetAll(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_GetAll_result, unknown, Mds_GetAll_result, readonly unknown[]>);
}

export function Mds_GetAll_mutation_options(
  opts: MutationOptionsFactory<Mds_GetAll_params, Mds_GetAll_result>
) {
  return mutationOptions({
    mutationKey: ["Mds_GetAll"] as const,
    mutationFn: (params: Mds_GetAll_params) => api.Mds_GetAll(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_GetAll_result, unknown, Mds_GetAll_params>);
}

export function Mds_GetByEic_query_options(
  opts: QueryOptionsFactory<Mds_GetByEic_params, Mds_GetByEic_result>
) {
  return queryOptions({
    queryKey: ["Mds_GetByEic", opts.params] as const,
    queryFn: () => api.Mds_GetByEic(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_GetByEic_result, unknown, Mds_GetByEic_result, readonly unknown[]>);
}

export function Mds_GetByEic_mutation_options(
  opts: MutationOptionsFactory<Mds_GetByEic_params, Mds_GetByEic_result>
) {
  return mutationOptions({
    mutationKey: ["Mds_GetByEic"] as const,
    mutationFn: (params: Mds_GetByEic_params) => api.Mds_GetByEic(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_GetByEic_result, unknown, Mds_GetByEic_params>);
}

export function MdsPurgeById_query_options(
  opts: QueryOptionsFactory<MdsPurgeById_params, MdsPurgeById_result>
) {
  return queryOptions({
    queryKey: ["MdsPurgeById", opts.params] as const,
    queryFn: () => api.MdsPurgeById(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsPurgeById_result, unknown, MdsPurgeById_result, readonly unknown[]>);
}

export function MdsPurgeById_mutation_options(
  opts: MutationOptionsFactory<MdsPurgeById_params, MdsPurgeById_result>
) {
  return mutationOptions({
    mutationKey: ["MdsPurgeById"] as const,
    mutationFn: (params: MdsPurgeById_params) => api.MdsPurgeById(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsPurgeById_result, unknown, MdsPurgeById_params>);
}

export function MdsRevision_Create_query_options(
  opts: QueryOptionsFactory<MdsRevision_Create_params, MdsRevision_Create_result>
) {
  return queryOptions({
    queryKey: ["MdsRevision_Create", opts.params] as const,
    queryFn: () => api.MdsRevision_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsRevision_Create_result, unknown, MdsRevision_Create_result, readonly unknown[]>);
}

export function MdsRevision_Create_mutation_options(
  opts: MutationOptionsFactory<MdsRevision_Create_params, MdsRevision_Create_result>
) {
  return mutationOptions({
    mutationKey: ["MdsRevision_Create"] as const,
    mutationFn: (params: MdsRevision_Create_params) => api.MdsRevision_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsRevision_Create_result, unknown, MdsRevision_Create_params>);
}

export function MdsRevision_Update_query_options(
  opts: QueryOptionsFactory<MdsRevision_Update_params, MdsRevision_Update_result>
) {
  return queryOptions({
    queryKey: ["MdsRevision_Update", opts.params] as const,
    queryFn: () => api.MdsRevision_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsRevision_Update_result, unknown, MdsRevision_Update_result, readonly unknown[]>);
}

export function MdsRevision_Update_mutation_options(
  opts: MutationOptionsFactory<MdsRevision_Update_params, MdsRevision_Update_result>
) {
  return mutationOptions({
    mutationKey: ["MdsRevision_Update"] as const,
    mutationFn: (params: MdsRevision_Update_params) => api.MdsRevision_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsRevision_Update_result, unknown, MdsRevision_Update_params>);
}

export function MdsRevision_Delete_query_options(
  opts: QueryOptionsFactory<MdsRevision_Delete_params, MdsRevision_Delete_result>
) {
  return queryOptions({
    queryKey: ["MdsRevision_Delete", opts.params] as const,
    queryFn: () => api.MdsRevision_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsRevision_Delete_result, unknown, MdsRevision_Delete_result, readonly unknown[]>);
}

export function MdsRevision_Delete_mutation_options(
  opts: MutationOptionsFactory<MdsRevision_Delete_params, MdsRevision_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["MdsRevision_Delete"] as const,
    mutationFn: (params: MdsRevision_Delete_params) => api.MdsRevision_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsRevision_Delete_result, unknown, MdsRevision_Delete_params>);
}

export function Oom_Create_query_options(
  opts: QueryOptionsFactory<Oom_Create_params, Oom_Create_result>
) {
  return queryOptions({
    queryKey: ["Oom_Create", opts.params] as const,
    queryFn: () => api.Oom_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Oom_Create_result, unknown, Oom_Create_result, readonly unknown[]>);
}

export function Oom_Create_mutation_options(
  opts: MutationOptionsFactory<Oom_Create_params, Oom_Create_result>
) {
  return mutationOptions({
    mutationKey: ["Oom_Create"] as const,
    mutationFn: (params: Oom_Create_params) => api.Oom_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Oom_Create_result, unknown, Oom_Create_params>);
}

export function Oom_Update_query_options(
  opts: QueryOptionsFactory<Oom_Update_params, Oom_Update_result>
) {
  return queryOptions({
    queryKey: ["Oom_Update", opts.params] as const,
    queryFn: () => api.Oom_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Oom_Update_result, unknown, Oom_Update_result, readonly unknown[]>);
}

export function Oom_Update_mutation_options(
  opts: MutationOptionsFactory<Oom_Update_params, Oom_Update_result>
) {
  return mutationOptions({
    mutationKey: ["Oom_Update"] as const,
    mutationFn: (params: Oom_Update_params) => api.Oom_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Oom_Update_result, unknown, Oom_Update_params>);
}

export function Oom_Delete_query_options(
  opts: QueryOptionsFactory<Oom_Delete_params, Oom_Delete_result>
) {
  return queryOptions({
    queryKey: ["Oom_Delete", opts.params] as const,
    queryFn: () => api.Oom_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Oom_Delete_result, unknown, Oom_Delete_result, readonly unknown[]>);
}

export function Oom_Delete_mutation_options(
  opts: MutationOptionsFactory<Oom_Delete_params, Oom_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["Oom_Delete"] as const,
    mutationFn: (params: Oom_Delete_params) => api.Oom_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Oom_Delete_result, unknown, Oom_Delete_params>);
}

export function OomGetByEic_query_options(
  opts: QueryOptionsFactory<OomGetByEic_params, OomGetByEic_result>
) {
  return queryOptions({
    queryKey: ["OomGetByEic", opts.params] as const,
    queryFn: () => api.OomGetByEic(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomGetByEic_result, unknown, OomGetByEic_result, readonly unknown[]>);
}

export function OomGetByEic_mutation_options(
  opts: MutationOptionsFactory<OomGetByEic_params, OomGetByEic_result>
) {
  return mutationOptions({
    mutationKey: ["OomGetByEic"] as const,
    mutationFn: (params: OomGetByEic_params) => api.OomGetByEic(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomGetByEic_result, unknown, OomGetByEic_params>);
}

export function OomGetByMdsId_query_options(
  opts: QueryOptionsFactory<OomGetByMdsId_params, OomGetByMdsId_result>
) {
  return queryOptions({
    queryKey: ["OomGetByMdsId", opts.params] as const,
    queryFn: () => api.OomGetByMdsId(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomGetByMdsId_result, unknown, OomGetByMdsId_result, readonly unknown[]>);
}

export function OomGetByMdsId_mutation_options(
  opts: MutationOptionsFactory<OomGetByMdsId_params, OomGetByMdsId_result>
) {
  return mutationOptions({
    mutationKey: ["OomGetByMdsId"] as const,
    mutationFn: (params: OomGetByMdsId_params) => api.OomGetByMdsId(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomGetByMdsId_result, unknown, OomGetByMdsId_params>);
}

export function OomRevision_InsertNewRevision_query_options(
  opts: QueryOptionsFactory<OomRevision_InsertNewRevision_params, OomRevision_InsertNewRevision_result>
) {
  return queryOptions({
    queryKey: ["OomRevision_InsertNewRevision", opts.params] as const,
    queryFn: () => api.OomRevision_InsertNewRevision(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_InsertNewRevision_result, unknown, OomRevision_InsertNewRevision_result, readonly unknown[]>);
}

export function OomRevision_InsertNewRevision_mutation_options(
  opts: MutationOptionsFactory<OomRevision_InsertNewRevision_params, OomRevision_InsertNewRevision_result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_InsertNewRevision"] as const,
    mutationFn: (params: OomRevision_InsertNewRevision_params) => api.OomRevision_InsertNewRevision(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_InsertNewRevision_result, unknown, OomRevision_InsertNewRevision_params>);
}

export function OomRevision_Create_query_options(
  opts: QueryOptionsFactory<OomRevision_Create_params, OomRevision_Create_result>
) {
  return queryOptions({
    queryKey: ["OomRevision_Create", opts.params] as const,
    queryFn: () => api.OomRevision_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_Create_result, unknown, OomRevision_Create_result, readonly unknown[]>);
}

export function OomRevision_Create_mutation_options(
  opts: MutationOptionsFactory<OomRevision_Create_params, OomRevision_Create_result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_Create"] as const,
    mutationFn: (params: OomRevision_Create_params) => api.OomRevision_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_Create_result, unknown, OomRevision_Create_params>);
}

export function OomRevision_Update_query_options(
  opts: QueryOptionsFactory<OomRevision_Update_params, OomRevision_Update_result>
) {
  return queryOptions({
    queryKey: ["OomRevision_Update", opts.params] as const,
    queryFn: () => api.OomRevision_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_Update_result, unknown, OomRevision_Update_result, readonly unknown[]>);
}

export function OomRevision_Update_mutation_options(
  opts: MutationOptionsFactory<OomRevision_Update_params, OomRevision_Update_result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_Update"] as const,
    mutationFn: (params: OomRevision_Update_params) => api.OomRevision_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_Update_result, unknown, OomRevision_Update_params>);
}

export function OomRevision_Delete_query_options(
  opts: QueryOptionsFactory<OomRevision_Delete_params, OomRevision_Delete_result>
) {
  return queryOptions({
    queryKey: ["OomRevision_Delete", opts.params] as const,
    queryFn: () => api.OomRevision_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_Delete_result, unknown, OomRevision_Delete_result, readonly unknown[]>);
}

export function OomRevision_Delete_mutation_options(
  opts: MutationOptionsFactory<OomRevision_Delete_params, OomRevision_Delete_result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_Delete"] as const,
    mutationFn: (params: OomRevision_Delete_params) => api.OomRevision_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_Delete_result, unknown, OomRevision_Delete_params>);
}
