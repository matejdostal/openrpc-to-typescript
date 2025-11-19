/* AUTO-GENERATED: types.ts — do not edit by hand. */

export interface User {
  id: number;
  name: string;
  email?: string;
}

export interface GetUsersResult {
  data: User[];
  total?: number;
}

export interface GetUserByIdResult {
  data: User;
}

export interface CreateUserResult {
  data: User;
}

export interface UpdateUserResult {
  data: User;
}

export interface DeleteUserResult {}

export interface GetUsersParams {}

export interface GetUserByIdParams {
  id: number;
}

export interface CreateUserParams {
  name: string;
  email?: string;
}

export interface UpdateUserParams {
  id: number;
  name?: string;
  email?: string;
}

export interface DeleteUserParams {
  id: number;
}
