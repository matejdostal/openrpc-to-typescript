import type { UseMutationOptions, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";

export interface QueryOptionsFactory<TParams, TResult> {
  params: TParams;
  axios?: AxiosRequestConfig;
  query?: Omit<UseQueryOptions<TResult, unknown, TResult, QueryKey>, "queryKey" | "queryFn">;
}

export interface MutationOptionsFactory<TParams, TResult> {
  axios?: AxiosRequestConfig;
  mutation?: Omit<UseMutationOptions<TResult, unknown, TParams>, "mutationFn">;
}
