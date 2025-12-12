/* AUTO-GENERATED: types.ts — do not edit by hand. */

export interface User {
  userId: number;
  userName: string;
  userEmail?: string;
}

export interface GetUsersResult {
  data: User[];
  totalCount?: number;
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
  userId: number;
}

export interface CreateUserParams {
  userName: string;
  userEmail?: string;
}

export interface UpdateUserParams {
  userId: number;
  userName?: string;
  userEmail?: string;
}

export interface DeleteUserParams {
  userId: number;
}
