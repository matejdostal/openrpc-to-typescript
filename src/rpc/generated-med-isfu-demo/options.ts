/* AUTO-GENERATED: options.ts — do not edit by hand. */

import type { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { queryOptions, mutationOptions } from "@tanstack/react-query";
import { api } from "./api";
import type { QueryOptionsFactory, MutationOptionsFactory } from "../base";
import type { Login_Params, Login_Result, Logout_Params, Logout_Result, GetSessionStatus_Params, GetSessionStatus_Result, RdsBillingTariff_Create_Params, RdsBillingTariff_Create_Result, RdsBillingTariff_Update_Params, RdsBillingTariff_Update_Result, RdsBillingTariff_Delete_Params, RdsBillingTariff_Delete_Result, RdsBillingTariff_GetAll_Params, RdsBillingTariff_GetAll_Result, Dodavatel_Create_Params, Dodavatel_Create_Result, Dodavatel_Update_Params, Dodavatel_Update_Result, Dodavatel_Delete_Params, Dodavatel_Delete_Result, Dodavatel_GetAll_Params, Dodavatel_GetAll_Result, InvoiceItem_Create_Params, InvoiceItem_Create_Result, InvoiceItem_Update_Params, InvoiceItem_Update_Result, InvoiceItem_Delete_Params, InvoiceItem_Delete_Result, InvoiceItemRevision_Create_Params, InvoiceItemRevision_Create_Result, InvoiceItemRevision_Update_Params, InvoiceItemRevision_Update_Result, InvoiceItemRevision_Delete_Params, InvoiceItemRevision_Delete_Result, Mds_Create_Params, Mds_Create_Result, Mds_Update_Params, Mds_Update_Result, Mds_Delete_Params, Mds_Delete_Result, Mds_GetAll_Params, Mds_GetAll_Result, Mds_GetByEic_Params, Mds_GetByEic_Result, MdsPurgeById_Params, MdsPurgeById_Result, MdsRevision_Create_Params, MdsRevision_Create_Result, MdsRevision_Update_Params, MdsRevision_Update_Result, MdsRevision_Delete_Params, MdsRevision_Delete_Result, Oom_Create_Params, Oom_Create_Result, Oom_Update_Params, Oom_Update_Result, Oom_Delete_Params, Oom_Delete_Result, OomGetByEic_Params, OomGetByEic_Result, OomGetByMdsId_Params, OomGetByMdsId_Result, OomRevision_InsertNewRevision_Params, OomRevision_InsertNewRevision_Result, OomRevision_Create_Params, OomRevision_Create_Result, OomRevision_Update_Params, OomRevision_Update_Result, OomRevision_Delete_Params, OomRevision_Delete_Result } from "./types";

export function Login_QueryOptions(
  opts: QueryOptionsFactory<Login_Params, Login_Result>
) {
  return queryOptions({
    queryKey: ["Login", opts.params] as const,
    queryFn: () => api.Login(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Login_Result, unknown, Login_Result, readonly unknown[]>);
}

export function Login_MutationOptions(
  opts: MutationOptionsFactory<Login_Params, Login_Result>
) {
  return mutationOptions({
    mutationKey: ["Login"] as const,
    mutationFn: (params: Login_Params) => api.Login(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Login_Result, unknown, Login_Params>);
}

export function Logout_QueryOptions(
  opts: QueryOptionsFactory<Logout_Params, Logout_Result>
) {
  return queryOptions({
    queryKey: ["Logout", opts.params] as const,
    queryFn: () => api.Logout(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Logout_Result, unknown, Logout_Result, readonly unknown[]>);
}

export function Logout_MutationOptions(
  opts: MutationOptionsFactory<Logout_Params, Logout_Result>
) {
  return mutationOptions({
    mutationKey: ["Logout"] as const,
    mutationFn: (params: Logout_Params) => api.Logout(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Logout_Result, unknown, Logout_Params>);
}

export function GetSessionStatus_QueryOptions(
  opts: QueryOptionsFactory<GetSessionStatus_Params, GetSessionStatus_Result>
) {
  return queryOptions({
    queryKey: ["GetSessionStatus", opts.params] as const,
    queryFn: () => api.GetSessionStatus(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<GetSessionStatus_Result, unknown, GetSessionStatus_Result, readonly unknown[]>);
}

export function RdsBillingTariff_Create_QueryOptions(
  opts: QueryOptionsFactory<RdsBillingTariff_Create_Params, RdsBillingTariff_Create_Result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_Create", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_Create_Result, unknown, RdsBillingTariff_Create_Result, readonly unknown[]>);
}

export function RdsBillingTariff_Create_MutationOptions(
  opts: MutationOptionsFactory<RdsBillingTariff_Create_Params, RdsBillingTariff_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_Create"] as const,
    mutationFn: (params: RdsBillingTariff_Create_Params) => api.RdsBillingTariff_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_Create_Result, unknown, RdsBillingTariff_Create_Params>);
}

export function RdsBillingTariff_Update_QueryOptions(
  opts: QueryOptionsFactory<RdsBillingTariff_Update_Params, RdsBillingTariff_Update_Result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_Update", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_Update_Result, unknown, RdsBillingTariff_Update_Result, readonly unknown[]>);
}

export function RdsBillingTariff_Update_MutationOptions(
  opts: MutationOptionsFactory<RdsBillingTariff_Update_Params, RdsBillingTariff_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_Update"] as const,
    mutationFn: (params: RdsBillingTariff_Update_Params) => api.RdsBillingTariff_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_Update_Result, unknown, RdsBillingTariff_Update_Params>);
}

export function RdsBillingTariff_Delete_QueryOptions(
  opts: QueryOptionsFactory<RdsBillingTariff_Delete_Params, RdsBillingTariff_Delete_Result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_Delete", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_Delete_Result, unknown, RdsBillingTariff_Delete_Result, readonly unknown[]>);
}

export function RdsBillingTariff_Delete_MutationOptions(
  opts: MutationOptionsFactory<RdsBillingTariff_Delete_Params, RdsBillingTariff_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_Delete"] as const,
    mutationFn: (params: RdsBillingTariff_Delete_Params) => api.RdsBillingTariff_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_Delete_Result, unknown, RdsBillingTariff_Delete_Params>);
}

export function RdsBillingTariff_GetAll_QueryOptions(
  opts: QueryOptionsFactory<RdsBillingTariff_GetAll_Params, RdsBillingTariff_GetAll_Result>
) {
  return queryOptions({
    queryKey: ["RdsBillingTariff_GetAll", opts.params] as const,
    queryFn: () => api.RdsBillingTariff_GetAll(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<RdsBillingTariff_GetAll_Result, unknown, RdsBillingTariff_GetAll_Result, readonly unknown[]>);
}

export function RdsBillingTariff_GetAll_MutationOptions(
  opts: MutationOptionsFactory<RdsBillingTariff_GetAll_Params, RdsBillingTariff_GetAll_Result>
) {
  return mutationOptions({
    mutationKey: ["RdsBillingTariff_GetAll"] as const,
    mutationFn: (params: RdsBillingTariff_GetAll_Params) => api.RdsBillingTariff_GetAll(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<RdsBillingTariff_GetAll_Result, unknown, RdsBillingTariff_GetAll_Params>);
}

export function Dodavatel_Create_QueryOptions(
  opts: QueryOptionsFactory<Dodavatel_Create_Params, Dodavatel_Create_Result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_Create", opts.params] as const,
    queryFn: () => api.Dodavatel_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_Create_Result, unknown, Dodavatel_Create_Result, readonly unknown[]>);
}

export function Dodavatel_Create_MutationOptions(
  opts: MutationOptionsFactory<Dodavatel_Create_Params, Dodavatel_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_Create"] as const,
    mutationFn: (params: Dodavatel_Create_Params) => api.Dodavatel_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_Create_Result, unknown, Dodavatel_Create_Params>);
}

export function Dodavatel_Update_QueryOptions(
  opts: QueryOptionsFactory<Dodavatel_Update_Params, Dodavatel_Update_Result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_Update", opts.params] as const,
    queryFn: () => api.Dodavatel_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_Update_Result, unknown, Dodavatel_Update_Result, readonly unknown[]>);
}

export function Dodavatel_Update_MutationOptions(
  opts: MutationOptionsFactory<Dodavatel_Update_Params, Dodavatel_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_Update"] as const,
    mutationFn: (params: Dodavatel_Update_Params) => api.Dodavatel_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_Update_Result, unknown, Dodavatel_Update_Params>);
}

export function Dodavatel_Delete_QueryOptions(
  opts: QueryOptionsFactory<Dodavatel_Delete_Params, Dodavatel_Delete_Result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_Delete", opts.params] as const,
    queryFn: () => api.Dodavatel_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_Delete_Result, unknown, Dodavatel_Delete_Result, readonly unknown[]>);
}

export function Dodavatel_Delete_MutationOptions(
  opts: MutationOptionsFactory<Dodavatel_Delete_Params, Dodavatel_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_Delete"] as const,
    mutationFn: (params: Dodavatel_Delete_Params) => api.Dodavatel_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_Delete_Result, unknown, Dodavatel_Delete_Params>);
}

export function Dodavatel_GetAll_QueryOptions(
  opts: QueryOptionsFactory<Dodavatel_GetAll_Params, Dodavatel_GetAll_Result>
) {
  return queryOptions({
    queryKey: ["Dodavatel_GetAll", opts.params] as const,
    queryFn: () => api.Dodavatel_GetAll(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Dodavatel_GetAll_Result, unknown, Dodavatel_GetAll_Result, readonly unknown[]>);
}

export function Dodavatel_GetAll_MutationOptions(
  opts: MutationOptionsFactory<Dodavatel_GetAll_Params, Dodavatel_GetAll_Result>
) {
  return mutationOptions({
    mutationKey: ["Dodavatel_GetAll"] as const,
    mutationFn: (params: Dodavatel_GetAll_Params) => api.Dodavatel_GetAll(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Dodavatel_GetAll_Result, unknown, Dodavatel_GetAll_Params>);
}

export function InvoiceItem_Create_QueryOptions(
  opts: QueryOptionsFactory<InvoiceItem_Create_Params, InvoiceItem_Create_Result>
) {
  return queryOptions({
    queryKey: ["InvoiceItem_Create", opts.params] as const,
    queryFn: () => api.InvoiceItem_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItem_Create_Result, unknown, InvoiceItem_Create_Result, readonly unknown[]>);
}

export function InvoiceItem_Create_MutationOptions(
  opts: MutationOptionsFactory<InvoiceItem_Create_Params, InvoiceItem_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItem_Create"] as const,
    mutationFn: (params: InvoiceItem_Create_Params) => api.InvoiceItem_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItem_Create_Result, unknown, InvoiceItem_Create_Params>);
}

export function InvoiceItem_Update_QueryOptions(
  opts: QueryOptionsFactory<InvoiceItem_Update_Params, InvoiceItem_Update_Result>
) {
  return queryOptions({
    queryKey: ["InvoiceItem_Update", opts.params] as const,
    queryFn: () => api.InvoiceItem_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItem_Update_Result, unknown, InvoiceItem_Update_Result, readonly unknown[]>);
}

export function InvoiceItem_Update_MutationOptions(
  opts: MutationOptionsFactory<InvoiceItem_Update_Params, InvoiceItem_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItem_Update"] as const,
    mutationFn: (params: InvoiceItem_Update_Params) => api.InvoiceItem_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItem_Update_Result, unknown, InvoiceItem_Update_Params>);
}

export function InvoiceItem_Delete_QueryOptions(
  opts: QueryOptionsFactory<InvoiceItem_Delete_Params, InvoiceItem_Delete_Result>
) {
  return queryOptions({
    queryKey: ["InvoiceItem_Delete", opts.params] as const,
    queryFn: () => api.InvoiceItem_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItem_Delete_Result, unknown, InvoiceItem_Delete_Result, readonly unknown[]>);
}

export function InvoiceItem_Delete_MutationOptions(
  opts: MutationOptionsFactory<InvoiceItem_Delete_Params, InvoiceItem_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItem_Delete"] as const,
    mutationFn: (params: InvoiceItem_Delete_Params) => api.InvoiceItem_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItem_Delete_Result, unknown, InvoiceItem_Delete_Params>);
}

export function InvoiceItemRevision_Create_QueryOptions(
  opts: QueryOptionsFactory<InvoiceItemRevision_Create_Params, InvoiceItemRevision_Create_Result>
) {
  return queryOptions({
    queryKey: ["InvoiceItemRevision_Create", opts.params] as const,
    queryFn: () => api.InvoiceItemRevision_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItemRevision_Create_Result, unknown, InvoiceItemRevision_Create_Result, readonly unknown[]>);
}

export function InvoiceItemRevision_Create_MutationOptions(
  opts: MutationOptionsFactory<InvoiceItemRevision_Create_Params, InvoiceItemRevision_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItemRevision_Create"] as const,
    mutationFn: (params: InvoiceItemRevision_Create_Params) => api.InvoiceItemRevision_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItemRevision_Create_Result, unknown, InvoiceItemRevision_Create_Params>);
}

export function InvoiceItemRevision_Update_QueryOptions(
  opts: QueryOptionsFactory<InvoiceItemRevision_Update_Params, InvoiceItemRevision_Update_Result>
) {
  return queryOptions({
    queryKey: ["InvoiceItemRevision_Update", opts.params] as const,
    queryFn: () => api.InvoiceItemRevision_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItemRevision_Update_Result, unknown, InvoiceItemRevision_Update_Result, readonly unknown[]>);
}

export function InvoiceItemRevision_Update_MutationOptions(
  opts: MutationOptionsFactory<InvoiceItemRevision_Update_Params, InvoiceItemRevision_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItemRevision_Update"] as const,
    mutationFn: (params: InvoiceItemRevision_Update_Params) => api.InvoiceItemRevision_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItemRevision_Update_Result, unknown, InvoiceItemRevision_Update_Params>);
}

export function InvoiceItemRevision_Delete_QueryOptions(
  opts: QueryOptionsFactory<InvoiceItemRevision_Delete_Params, InvoiceItemRevision_Delete_Result>
) {
  return queryOptions({
    queryKey: ["InvoiceItemRevision_Delete", opts.params] as const,
    queryFn: () => api.InvoiceItemRevision_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<InvoiceItemRevision_Delete_Result, unknown, InvoiceItemRevision_Delete_Result, readonly unknown[]>);
}

export function InvoiceItemRevision_Delete_MutationOptions(
  opts: MutationOptionsFactory<InvoiceItemRevision_Delete_Params, InvoiceItemRevision_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["InvoiceItemRevision_Delete"] as const,
    mutationFn: (params: InvoiceItemRevision_Delete_Params) => api.InvoiceItemRevision_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<InvoiceItemRevision_Delete_Result, unknown, InvoiceItemRevision_Delete_Params>);
}

export function Mds_Create_QueryOptions(
  opts: QueryOptionsFactory<Mds_Create_Params, Mds_Create_Result>
) {
  return queryOptions({
    queryKey: ["Mds_Create", opts.params] as const,
    queryFn: () => api.Mds_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_Create_Result, unknown, Mds_Create_Result, readonly unknown[]>);
}

export function Mds_Create_MutationOptions(
  opts: MutationOptionsFactory<Mds_Create_Params, Mds_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["Mds_Create"] as const,
    mutationFn: (params: Mds_Create_Params) => api.Mds_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_Create_Result, unknown, Mds_Create_Params>);
}

export function Mds_Update_QueryOptions(
  opts: QueryOptionsFactory<Mds_Update_Params, Mds_Update_Result>
) {
  return queryOptions({
    queryKey: ["Mds_Update", opts.params] as const,
    queryFn: () => api.Mds_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_Update_Result, unknown, Mds_Update_Result, readonly unknown[]>);
}

export function Mds_Update_MutationOptions(
  opts: MutationOptionsFactory<Mds_Update_Params, Mds_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["Mds_Update"] as const,
    mutationFn: (params: Mds_Update_Params) => api.Mds_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_Update_Result, unknown, Mds_Update_Params>);
}

export function Mds_Delete_QueryOptions(
  opts: QueryOptionsFactory<Mds_Delete_Params, Mds_Delete_Result>
) {
  return queryOptions({
    queryKey: ["Mds_Delete", opts.params] as const,
    queryFn: () => api.Mds_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_Delete_Result, unknown, Mds_Delete_Result, readonly unknown[]>);
}

export function Mds_Delete_MutationOptions(
  opts: MutationOptionsFactory<Mds_Delete_Params, Mds_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["Mds_Delete"] as const,
    mutationFn: (params: Mds_Delete_Params) => api.Mds_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_Delete_Result, unknown, Mds_Delete_Params>);
}

export function Mds_GetAll_QueryOptions(
  opts: QueryOptionsFactory<Mds_GetAll_Params, Mds_GetAll_Result>
) {
  return queryOptions({
    queryKey: ["Mds_GetAll", opts.params] as const,
    queryFn: () => api.Mds_GetAll(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_GetAll_Result, unknown, Mds_GetAll_Result, readonly unknown[]>);
}

export function Mds_GetAll_MutationOptions(
  opts: MutationOptionsFactory<Mds_GetAll_Params, Mds_GetAll_Result>
) {
  return mutationOptions({
    mutationKey: ["Mds_GetAll"] as const,
    mutationFn: (params: Mds_GetAll_Params) => api.Mds_GetAll(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_GetAll_Result, unknown, Mds_GetAll_Params>);
}

export function Mds_GetByEic_QueryOptions(
  opts: QueryOptionsFactory<Mds_GetByEic_Params, Mds_GetByEic_Result>
) {
  return queryOptions({
    queryKey: ["Mds_GetByEic", opts.params] as const,
    queryFn: () => api.Mds_GetByEic(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Mds_GetByEic_Result, unknown, Mds_GetByEic_Result, readonly unknown[]>);
}

export function Mds_GetByEic_MutationOptions(
  opts: MutationOptionsFactory<Mds_GetByEic_Params, Mds_GetByEic_Result>
) {
  return mutationOptions({
    mutationKey: ["Mds_GetByEic"] as const,
    mutationFn: (params: Mds_GetByEic_Params) => api.Mds_GetByEic(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Mds_GetByEic_Result, unknown, Mds_GetByEic_Params>);
}

export function MdsPurgeById_QueryOptions(
  opts: QueryOptionsFactory<MdsPurgeById_Params, MdsPurgeById_Result>
) {
  return queryOptions({
    queryKey: ["MdsPurgeById", opts.params] as const,
    queryFn: () => api.MdsPurgeById(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsPurgeById_Result, unknown, MdsPurgeById_Result, readonly unknown[]>);
}

export function MdsPurgeById_MutationOptions(
  opts: MutationOptionsFactory<MdsPurgeById_Params, MdsPurgeById_Result>
) {
  return mutationOptions({
    mutationKey: ["MdsPurgeById"] as const,
    mutationFn: (params: MdsPurgeById_Params) => api.MdsPurgeById(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsPurgeById_Result, unknown, MdsPurgeById_Params>);
}

export function MdsRevision_Create_QueryOptions(
  opts: QueryOptionsFactory<MdsRevision_Create_Params, MdsRevision_Create_Result>
) {
  return queryOptions({
    queryKey: ["MdsRevision_Create", opts.params] as const,
    queryFn: () => api.MdsRevision_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsRevision_Create_Result, unknown, MdsRevision_Create_Result, readonly unknown[]>);
}

export function MdsRevision_Create_MutationOptions(
  opts: MutationOptionsFactory<MdsRevision_Create_Params, MdsRevision_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["MdsRevision_Create"] as const,
    mutationFn: (params: MdsRevision_Create_Params) => api.MdsRevision_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsRevision_Create_Result, unknown, MdsRevision_Create_Params>);
}

export function MdsRevision_Update_QueryOptions(
  opts: QueryOptionsFactory<MdsRevision_Update_Params, MdsRevision_Update_Result>
) {
  return queryOptions({
    queryKey: ["MdsRevision_Update", opts.params] as const,
    queryFn: () => api.MdsRevision_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsRevision_Update_Result, unknown, MdsRevision_Update_Result, readonly unknown[]>);
}

export function MdsRevision_Update_MutationOptions(
  opts: MutationOptionsFactory<MdsRevision_Update_Params, MdsRevision_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["MdsRevision_Update"] as const,
    mutationFn: (params: MdsRevision_Update_Params) => api.MdsRevision_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsRevision_Update_Result, unknown, MdsRevision_Update_Params>);
}

export function MdsRevision_Delete_QueryOptions(
  opts: QueryOptionsFactory<MdsRevision_Delete_Params, MdsRevision_Delete_Result>
) {
  return queryOptions({
    queryKey: ["MdsRevision_Delete", opts.params] as const,
    queryFn: () => api.MdsRevision_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<MdsRevision_Delete_Result, unknown, MdsRevision_Delete_Result, readonly unknown[]>);
}

export function MdsRevision_Delete_MutationOptions(
  opts: MutationOptionsFactory<MdsRevision_Delete_Params, MdsRevision_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["MdsRevision_Delete"] as const,
    mutationFn: (params: MdsRevision_Delete_Params) => api.MdsRevision_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<MdsRevision_Delete_Result, unknown, MdsRevision_Delete_Params>);
}

export function Oom_Create_QueryOptions(
  opts: QueryOptionsFactory<Oom_Create_Params, Oom_Create_Result>
) {
  return queryOptions({
    queryKey: ["Oom_Create", opts.params] as const,
    queryFn: () => api.Oom_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Oom_Create_Result, unknown, Oom_Create_Result, readonly unknown[]>);
}

export function Oom_Create_MutationOptions(
  opts: MutationOptionsFactory<Oom_Create_Params, Oom_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["Oom_Create"] as const,
    mutationFn: (params: Oom_Create_Params) => api.Oom_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Oom_Create_Result, unknown, Oom_Create_Params>);
}

export function Oom_Update_QueryOptions(
  opts: QueryOptionsFactory<Oom_Update_Params, Oom_Update_Result>
) {
  return queryOptions({
    queryKey: ["Oom_Update", opts.params] as const,
    queryFn: () => api.Oom_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Oom_Update_Result, unknown, Oom_Update_Result, readonly unknown[]>);
}

export function Oom_Update_MutationOptions(
  opts: MutationOptionsFactory<Oom_Update_Params, Oom_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["Oom_Update"] as const,
    mutationFn: (params: Oom_Update_Params) => api.Oom_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Oom_Update_Result, unknown, Oom_Update_Params>);
}

export function Oom_Delete_QueryOptions(
  opts: QueryOptionsFactory<Oom_Delete_Params, Oom_Delete_Result>
) {
  return queryOptions({
    queryKey: ["Oom_Delete", opts.params] as const,
    queryFn: () => api.Oom_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<Oom_Delete_Result, unknown, Oom_Delete_Result, readonly unknown[]>);
}

export function Oom_Delete_MutationOptions(
  opts: MutationOptionsFactory<Oom_Delete_Params, Oom_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["Oom_Delete"] as const,
    mutationFn: (params: Oom_Delete_Params) => api.Oom_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<Oom_Delete_Result, unknown, Oom_Delete_Params>);
}

export function OomGetByEic_QueryOptions(
  opts: QueryOptionsFactory<OomGetByEic_Params, OomGetByEic_Result>
) {
  return queryOptions({
    queryKey: ["OomGetByEic", opts.params] as const,
    queryFn: () => api.OomGetByEic(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomGetByEic_Result, unknown, OomGetByEic_Result, readonly unknown[]>);
}

export function OomGetByEic_MutationOptions(
  opts: MutationOptionsFactory<OomGetByEic_Params, OomGetByEic_Result>
) {
  return mutationOptions({
    mutationKey: ["OomGetByEic"] as const,
    mutationFn: (params: OomGetByEic_Params) => api.OomGetByEic(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomGetByEic_Result, unknown, OomGetByEic_Params>);
}

export function OomGetByMdsId_QueryOptions(
  opts: QueryOptionsFactory<OomGetByMdsId_Params, OomGetByMdsId_Result>
) {
  return queryOptions({
    queryKey: ["OomGetByMdsId", opts.params] as const,
    queryFn: () => api.OomGetByMdsId(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomGetByMdsId_Result, unknown, OomGetByMdsId_Result, readonly unknown[]>);
}

export function OomGetByMdsId_MutationOptions(
  opts: MutationOptionsFactory<OomGetByMdsId_Params, OomGetByMdsId_Result>
) {
  return mutationOptions({
    mutationKey: ["OomGetByMdsId"] as const,
    mutationFn: (params: OomGetByMdsId_Params) => api.OomGetByMdsId(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomGetByMdsId_Result, unknown, OomGetByMdsId_Params>);
}

export function OomRevision_InsertNewRevision_QueryOptions(
  opts: QueryOptionsFactory<OomRevision_InsertNewRevision_Params, OomRevision_InsertNewRevision_Result>
) {
  return queryOptions({
    queryKey: ["OomRevision_InsertNewRevision", opts.params] as const,
    queryFn: () => api.OomRevision_InsertNewRevision(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_InsertNewRevision_Result, unknown, OomRevision_InsertNewRevision_Result, readonly unknown[]>);
}

export function OomRevision_InsertNewRevision_MutationOptions(
  opts: MutationOptionsFactory<OomRevision_InsertNewRevision_Params, OomRevision_InsertNewRevision_Result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_InsertNewRevision"] as const,
    mutationFn: (params: OomRevision_InsertNewRevision_Params) => api.OomRevision_InsertNewRevision(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_InsertNewRevision_Result, unknown, OomRevision_InsertNewRevision_Params>);
}

export function OomRevision_Create_QueryOptions(
  opts: QueryOptionsFactory<OomRevision_Create_Params, OomRevision_Create_Result>
) {
  return queryOptions({
    queryKey: ["OomRevision_Create", opts.params] as const,
    queryFn: () => api.OomRevision_Create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_Create_Result, unknown, OomRevision_Create_Result, readonly unknown[]>);
}

export function OomRevision_Create_MutationOptions(
  opts: MutationOptionsFactory<OomRevision_Create_Params, OomRevision_Create_Result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_Create"] as const,
    mutationFn: (params: OomRevision_Create_Params) => api.OomRevision_Create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_Create_Result, unknown, OomRevision_Create_Params>);
}

export function OomRevision_Update_QueryOptions(
  opts: QueryOptionsFactory<OomRevision_Update_Params, OomRevision_Update_Result>
) {
  return queryOptions({
    queryKey: ["OomRevision_Update", opts.params] as const,
    queryFn: () => api.OomRevision_Update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_Update_Result, unknown, OomRevision_Update_Result, readonly unknown[]>);
}

export function OomRevision_Update_MutationOptions(
  opts: MutationOptionsFactory<OomRevision_Update_Params, OomRevision_Update_Result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_Update"] as const,
    mutationFn: (params: OomRevision_Update_Params) => api.OomRevision_Update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_Update_Result, unknown, OomRevision_Update_Params>);
}

export function OomRevision_Delete_QueryOptions(
  opts: QueryOptionsFactory<OomRevision_Delete_Params, OomRevision_Delete_Result>
) {
  return queryOptions({
    queryKey: ["OomRevision_Delete", opts.params] as const,
    queryFn: () => api.OomRevision_Delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<OomRevision_Delete_Result, unknown, OomRevision_Delete_Result, readonly unknown[]>);
}

export function OomRevision_Delete_MutationOptions(
  opts: MutationOptionsFactory<OomRevision_Delete_Params, OomRevision_Delete_Result>
) {
  return mutationOptions({
    mutationKey: ["OomRevision_Delete"] as const,
    mutationFn: (params: OomRevision_Delete_Params) => api.OomRevision_Delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<OomRevision_Delete_Result, unknown, OomRevision_Delete_Params>);
}
