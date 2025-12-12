import axios from "axios";
import { configureRpcClient } from "./rpc/base";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createUserMutationOptions,
  deleteUserMutationOptions,
  getUserByIdQueryOptions,
  getUsersQueryOptions,
  updateUserMutationOptions,
  // } from "./rpc/generated-users-api";
} from "./rpc/generated-users-api-snake-case-converted";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com/rpc",
});

axiosInstance.interceptors.request.use((config) => {
  // ...
  return config;
});

axiosInstance.interceptors.response.use(undefined, (error) => {
  // ...
  return Promise.reject(error);
});

configureRpcClient(axiosInstance);

// ----------------------------------------------------------------------------

export const useGetUsersQuery = (options?: Parameters<typeof getUsersQueryOptions>[0]) => {
  return useQuery(
    getUsersQueryOptions({
      params: options?.params || {},
      query: options?.query,
      axios: options?.axios,
    })
  );
};

export const useGetUserByIdQuery = (options: Parameters<typeof getUserByIdQueryOptions>[0]) => {
  return useQuery(
    getUserByIdQueryOptions({
      params: options.params,
      query: options.query,
      axios: options.axios,
    })
  );
};

export const useCreateUserMutation = (
  options?: Parameters<typeof createUserMutationOptions>[0]
) => {
  return useMutation(
    createUserMutationOptions({
      mutation: options?.mutation,
      axios: options?.axios,
    })
  );
};

export const useUpdateUserMutation = (
  options?: Parameters<typeof updateUserMutationOptions>[0]
) => {
  return useMutation(
    updateUserMutationOptions({
      mutation: options?.mutation,
      axios: options?.axios,
    })
  );
};

export const useDeleteUserMutation = (
  options?: Parameters<typeof deleteUserMutationOptions>[0]
) => {
  return useMutation(
    deleteUserMutationOptions({
      mutation: options?.mutation,
      axios: options?.axios,
    })
  );
};

// ----------------------------------------------------------------------------

const getUsersQuery = useGetUsersQuery();
getUsersQuery.refetch();

const getUserByIdQuery = useGetUserByIdQuery({ params: { userId: 1234 } });
getUserByIdQuery.refetch();

const createUserMutation = useCreateUserMutation();
createUserMutation.mutate({ userName: "Alice", userEmail: "alice@example.com" });

const updateUserMutation = useUpdateUserMutation();
updateUserMutation.mutate({
  userId: 1234,
  userName: "Alice Smith",
  userEmail: "alice.smith@example.com",
});

const deleteUserMutation = useDeleteUserMutation();
deleteUserMutation.mutate({ userId: 1234 });
