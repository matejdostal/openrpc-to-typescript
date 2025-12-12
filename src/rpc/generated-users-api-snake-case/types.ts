/* AUTO-GENERATED: types.ts — do not edit by hand. */

export interface user {
  user_id: number;
  user_name: string;
  user_email?: string;
}

export interface get_users_result {
  data: user[];
  total_count?: number;
}

export interface get_user_by_id_result {
  data: user;
}

export interface create_user_result {
  data: user;
}

export interface update_user_result {
  data: user;
}

export interface delete_user_result {}

export interface get_users_params {}

export interface get_user_by_id_params {
  user_id: number;
}

export interface create_user_params {
  user_name: string;
  user_email?: string;
}

export interface update_user_params {
  user_id: number;
  user_name?: string;
  user_email?: string;
}

export interface delete_user_params {
  user_id: number;
}
