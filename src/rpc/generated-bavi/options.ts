/* AUTO-GENERATED: options.ts — do not edit by hand. */

import type { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { api } from "./api";
import type { QueryOptionsFactory, MutationOptionsFactory } from "../base";
import type { appconfig_gui_xml_get_params, appconfig_gui_xml_get_result, application_config_get_params, application_config_get_result, application_config_gui_template_get_params, application_config_gui_template_get_result, application_config_state_clone_params, application_config_state_clone_result, application_config_state_get_params, application_config_state_get_result, application_config_state_set_params, application_config_state_set_result, application_config_state_set_from_vehicle_params, application_config_state_set_from_vehicle_result, assign_stop_panel_to_company_params, assign_stop_panel_to_company_result, bavi_get_supported_events_params, bavi_get_supported_events_result, change_user_password_params, change_user_password_result, clone_crossroad_version_params, clone_crossroad_version_result, compromise_auth_token_family_params, compromise_auth_token_family_result, create_auth_token_params, create_auth_token_result, create_company_params, create_company_result, create_company_section_params, create_company_section_result, create_crossroad_params, create_crossroad_result, create_crossroad_branch_params, create_crossroad_branch_result, create_crossroad_branch_checkin_point_params, create_crossroad_branch_checkin_point_result, create_crossroad_checkin_branch_params, create_crossroad_checkin_branch_result, create_crossroad_checkout_branch_params, create_crossroad_checkout_branch_result, create_crossroad_checkout_point_params, create_crossroad_checkout_point_result, create_crossroad_direction_params, create_crossroad_direction_result, create_crossroad_version_params, create_crossroad_version_result, create_email_record_params, create_email_record_result, create_report_request_params, create_report_request_result, create_user_params, create_user_result, create_vehicles_update_request_email_record_params, create_vehicles_update_request_email_record_result, delete_auth_token_params, delete_auth_token_result, delete_auth_token_family_params, delete_auth_token_family_result, delete_company_params, delete_company_result, delete_company_section_params, delete_company_section_result, delete_crossroad_params, delete_crossroad_result, delete_crossroad_branch_params, delete_crossroad_branch_result, delete_crossroad_branch_checkin_point_params, delete_crossroad_branch_checkin_point_result, delete_crossroad_checkout_point_params, delete_crossroad_checkout_point_result, delete_crossroad_direction_params, delete_crossroad_direction_result, delete_expired_auth_tokens_params, delete_expired_auth_tokens_result, delete_user_params, delete_user_result, get_active_vehicle_updates_ui_lock_request_params, get_active_vehicle_updates_ui_lock_request_result, get_all_crossroad_directions_params, get_all_crossroad_directions_result, get_all_crossroad_directions_by_version_id_params, get_all_crossroad_directions_by_version_id_result, get_api_vehicle_data_params, get_api_vehicle_data_result, get_api_vehicle_eco_drive_params, get_api_vehicle_eco_drive_result, get_auth_token_params, get_auth_token_result, get_auth_user_by_id_params, get_auth_user_by_id_result, get_auth_user_by_login_name_and_password_params, get_auth_user_by_login_name_and_password_result, get_companies_params, get_companies_result, get_company_by_id_params, get_company_by_id_result, get_company_sections_params, get_company_sections_result, get_crossroad_branch_by_id_params, get_crossroad_branch_by_id_result, get_crossroad_branch_checkin_point_by_id_params, get_crossroad_branch_checkin_point_by_id_result, get_crossroad_branch_checkin_points_params, get_crossroad_branch_checkin_points_result, get_crossroad_branches_params, get_crossroad_branches_result, get_crossroad_branches_all_params, get_crossroad_branches_all_result, get_crossroad_by_id_params, get_crossroad_by_id_result, get_crossroad_checkout_point_by_id_params, get_crossroad_checkout_point_by_id_result, get_crossroad_checkout_points_params, get_crossroad_checkout_points_result, get_crossroad_checkpoint_definitions_params, get_crossroad_checkpoint_definitions_result, get_crossroad_direction_by_id_params, get_crossroad_direction_by_id_result, get_crossroad_directions_params, get_crossroad_directions_result, get_crossroad_driver_types_params, get_crossroad_driver_types_result, get_crossroad_history_events_params, get_crossroad_history_events_result, get_crossroad_versions_params, get_crossroad_versions_result, get_crossroads_params, get_crossroads_result, get_crossroads_by_version_id_params, get_crossroads_by_version_id_result, get_diagnostic_data_actual_state_params, get_diagnostic_data_actual_state_result, get_history_params, get_history_result, get_history_process_data_params, get_history_process_data_result, get_history_process_data__params, get_history_process_data__result, get_history_process_data_dpb_params, get_history_process_data_dpb_result, get_log_records_params, get_log_records_result, get_peripherals_info_by_type_params, get_peripherals_info_by_type_result, get_peripherals_info_from_selected_vehicle_params, get_peripherals_info_from_selected_vehicle_result, get_report_request_state_params, get_report_request_state_result, get_schedule_service_params, get_schedule_service_result, get_stations_realtime_data_params, get_stations_realtime_data_result, get_stations_realtime_data_v2_params, get_stations_realtime_data_v2_result, get_stop_list_params, get_stop_list_result, get_stop_panel_companies_params, get_stop_panel_companies_result, get_stop_panel_components_params, get_stop_panel_components_result, get_stop_panel_data_params, get_stop_panel_data_result, get_stop_panel_data_2_params, get_stop_panel_data_2_result, get_stop_panel_data_2_backup_params, get_stop_panel_data_2_backup_result, get_stop_panel_data_test_params, get_stop_panel_data_test_result, get_stop_panel_data_tmp_params, get_stop_panel_data_tmp_result, get_stop_panel_errors_params, get_stop_panel_errors_result, get_stop_panel_layouts_params, get_stop_panel_layouts_result, get_stop_panel_models_params, get_stop_panel_models_result, get_stop_panel_schedule_params, get_stop_panel_schedule_result, get_stop_panels_params, get_stop_panels_result, get_stops_params, get_stops_result, get_update_target_def_params, get_update_target_def_result, get_update_versions_summaries_params, get_update_versions_summaries_result, get_update_versions_vehicles_params, get_update_versions_vehicles_result, get_user_by_id_params, get_user_by_id_result, get_user_capabilities_params, get_user_capabilities_result, get_users_params, get_users_result, get_vehicle_conf_types_params, get_vehicle_conf_types_result, get_vehicle_configurations_params, get_vehicle_configurations_result, get_vehicle_drivers_history_params, get_vehicle_drivers_history_result, get_vehicle_errors_history_params, get_vehicle_errors_history_result, get_vehicle_errors_history_vlv20240524_params, get_vehicle_errors_history_vlv20240524_result, get_vehicle_online_state_params, get_vehicle_online_state_result, get_vehicle_peripheral_names_params, get_vehicle_peripheral_names_result, get_vehicle_peripheral_types_params, get_vehicle_peripheral_types_result, get_vehicle_peripherals_params, get_vehicle_peripherals_result, get_vehicle_peripherals_1_params, get_vehicle_peripherals_1_result, get_vehicle_states_and_versions_params, get_vehicle_states_and_versions_result, get_vehicle_update_request_params, get_vehicle_update_request_result, get_vehicle_updates_ui_lock_requests_params, get_vehicle_updates_ui_lock_requests_result, get_vehicles_params, get_vehicles_result, get_vehicles_actual_state_params, get_vehicles_actual_state_result, get_vehicles_actual_state__params, get_vehicles_actual_state__result, get_vehicles_actual_state_2_params, get_vehicles_actual_state_2_result, get_vehicles_actual_state_3_params, get_vehicles_actual_state_3_result, get_vehicles_actual_state_4_params, get_vehicles_actual_state_4_result, get_versions_from_all_vehicles_params, get_versions_from_all_vehicles_result, get_versions_from_all_vehicles_with_peripherals_params, get_versions_from_all_vehicles_with_peripherals_result, get_versions_from_vehicle_histor_old_params, get_versions_from_vehicle_histor_old_result, get_versions_from_vehicle_history_params, get_versions_from_vehicle_history_result, inactivate_auth_token_params, inactivate_auth_token_result, lock_vehicle_updates_ui_params, lock_vehicle_updates_ui_result, received_text_messages_accept_params, received_text_messages_accept_result, received_text_messages_get_params, received_text_messages_get_result, received_text_messages_status_get_params, received_text_messages_status_get_result, received_text_messages_unaccept_params, received_text_messages_unaccept_result, register_stop_panel_params, register_stop_panel_result, remove_stop_panel_from_company_params, remove_stop_panel_from_company_result, remove_vehicle_params, remove_vehicle_result, reset_stop_panel_stop_params, reset_stop_panel_stop_result, reset_user_password_params, reset_user_password_result, unlock_vehicle_updates_ui_params, unlock_vehicle_updates_ui_result, update_company_params, update_company_result, update_company_section_params, update_company_section_result, update_crossroad_params, update_crossroad_result, update_crossroad_branch_params, update_crossroad_branch_result, update_crossroad_branch_checkin_point_params, update_crossroad_branch_checkin_point_result, update_crossroad_branch_checkin_points_order_params, update_crossroad_branch_checkin_points_order_result, update_crossroad_checkout_point_params, update_crossroad_checkout_point_result, update_crossroad_direction_params, update_crossroad_direction_result, update_crossroad_geo_point_params, update_crossroad_geo_point_result, update_stop_panel_params, update_stop_panel_result, update_stop_panel_active_params, update_stop_panel_active_result, update_stop_panel_components_params, update_stop_panel_components_result, update_stop_panel_hw_state_params, update_stop_panel_hw_state_result, update_stop_panel_layout_params, update_stop_panel_layout_result, update_stop_panel_stop_params, update_stop_panel_stop_result, update_stop_panel_user_params_params, update_stop_panel_user_params_result, update_user_params, update_user_result, update_user_password_params, update_user_password_result, vehicle_config_apc_info_params, vehicle_config_apc_info_result, vehicle_update_company_settings_params, vehicle_update_company_settings_result, vehicle_update_imported_to_vehicle_params, vehicle_update_imported_to_vehicle_result, vehicle_update_request_delete_params, vehicle_update_request_delete_result, vehicle_update_request_get_params, vehicle_update_request_get_result, vehicle_update_request_history_params, vehicle_update_request_history_result, vehicle_update_request_set_params, vehicle_update_request_set_result, vehicle_update_send_failure_notification_params, vehicle_update_send_failure_notification_result, web_portal_user_setting_create_params, web_portal_user_setting_create_result, web_portal_user_setting_delete_params, web_portal_user_setting_delete_result, web_portal_user_setting_get_params, web_portal_user_setting_get_result, web_portal_user_setting_update_params, web_portal_user_setting_update_result } from "./types";

export function appconfig_gui_xml_get_query_options(
  opts: QueryOptionsFactory<appconfig_gui_xml_get_params, appconfig_gui_xml_get_result>
) {
  return {
    queryKey: ["appconfig_gui_xml_get", opts.params] as const,
    queryFn: () => api.appconfig_gui_xml_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<appconfig_gui_xml_get_result, unknown, appconfig_gui_xml_get_result, readonly unknown[]>;
}

export function appconfig_gui_xml_get_mutation_options(
  opts: MutationOptionsFactory<appconfig_gui_xml_get_params, appconfig_gui_xml_get_result>
) {
  return {
    mutationKey: ["appconfig_gui_xml_get"] as const,
    mutationFn: (params: appconfig_gui_xml_get_params) => api.appconfig_gui_xml_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<appconfig_gui_xml_get_result, unknown, appconfig_gui_xml_get_params>;
}

export function application_config_get_query_options(
  opts: QueryOptionsFactory<application_config_get_params, application_config_get_result>
) {
  return {
    queryKey: ["application_config_get", opts.params] as const,
    queryFn: () => api.application_config_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<application_config_get_result, unknown, application_config_get_result, readonly unknown[]>;
}

export function application_config_get_mutation_options(
  opts: MutationOptionsFactory<application_config_get_params, application_config_get_result>
) {
  return {
    mutationKey: ["application_config_get"] as const,
    mutationFn: (params: application_config_get_params) => api.application_config_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<application_config_get_result, unknown, application_config_get_params>;
}

export function application_config_gui_template_get_query_options(
  opts: QueryOptionsFactory<application_config_gui_template_get_params, application_config_gui_template_get_result>
) {
  return {
    queryKey: ["application_config_gui_template_get", opts.params] as const,
    queryFn: () => api.application_config_gui_template_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<application_config_gui_template_get_result, unknown, application_config_gui_template_get_result, readonly unknown[]>;
}

export function application_config_gui_template_get_mutation_options(
  opts: MutationOptionsFactory<application_config_gui_template_get_params, application_config_gui_template_get_result>
) {
  return {
    mutationKey: ["application_config_gui_template_get"] as const,
    mutationFn: (params: application_config_gui_template_get_params) => api.application_config_gui_template_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<application_config_gui_template_get_result, unknown, application_config_gui_template_get_params>;
}

export function application_config_state_clone_query_options(
  opts: QueryOptionsFactory<application_config_state_clone_params, application_config_state_clone_result>
) {
  return {
    queryKey: ["application_config_state_clone", opts.params] as const,
    queryFn: () => api.application_config_state_clone(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<application_config_state_clone_result, unknown, application_config_state_clone_result, readonly unknown[]>;
}

export function application_config_state_clone_mutation_options(
  opts: MutationOptionsFactory<application_config_state_clone_params, application_config_state_clone_result>
) {
  return {
    mutationKey: ["application_config_state_clone"] as const,
    mutationFn: (params: application_config_state_clone_params) => api.application_config_state_clone(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<application_config_state_clone_result, unknown, application_config_state_clone_params>;
}

export function application_config_state_get_query_options(
  opts: QueryOptionsFactory<application_config_state_get_params, application_config_state_get_result>
) {
  return {
    queryKey: ["application_config_state_get", opts.params] as const,
    queryFn: () => api.application_config_state_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<application_config_state_get_result, unknown, application_config_state_get_result, readonly unknown[]>;
}

export function application_config_state_get_mutation_options(
  opts: MutationOptionsFactory<application_config_state_get_params, application_config_state_get_result>
) {
  return {
    mutationKey: ["application_config_state_get"] as const,
    mutationFn: (params: application_config_state_get_params) => api.application_config_state_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<application_config_state_get_result, unknown, application_config_state_get_params>;
}

export function application_config_state_set_query_options(
  opts: QueryOptionsFactory<application_config_state_set_params, application_config_state_set_result>
) {
  return {
    queryKey: ["application_config_state_set", opts.params] as const,
    queryFn: () => api.application_config_state_set(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<application_config_state_set_result, unknown, application_config_state_set_result, readonly unknown[]>;
}

export function application_config_state_set_mutation_options(
  opts: MutationOptionsFactory<application_config_state_set_params, application_config_state_set_result>
) {
  return {
    mutationKey: ["application_config_state_set"] as const,
    mutationFn: (params: application_config_state_set_params) => api.application_config_state_set(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<application_config_state_set_result, unknown, application_config_state_set_params>;
}

export function application_config_state_set_from_vehicle_query_options(
  opts: QueryOptionsFactory<application_config_state_set_from_vehicle_params, application_config_state_set_from_vehicle_result>
) {
  return {
    queryKey: ["application_config_state_set_from_vehicle", opts.params] as const,
    queryFn: () => api.application_config_state_set_from_vehicle(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<application_config_state_set_from_vehicle_result, unknown, application_config_state_set_from_vehicle_result, readonly unknown[]>;
}

export function application_config_state_set_from_vehicle_mutation_options(
  opts: MutationOptionsFactory<application_config_state_set_from_vehicle_params, application_config_state_set_from_vehicle_result>
) {
  return {
    mutationKey: ["application_config_state_set_from_vehicle"] as const,
    mutationFn: (params: application_config_state_set_from_vehicle_params) => api.application_config_state_set_from_vehicle(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<application_config_state_set_from_vehicle_result, unknown, application_config_state_set_from_vehicle_params>;
}

export function assign_stop_panel_to_company_query_options(
  opts: QueryOptionsFactory<assign_stop_panel_to_company_params, assign_stop_panel_to_company_result>
) {
  return {
    queryKey: ["assign_stop_panel_to_company", opts.params] as const,
    queryFn: () => api.assign_stop_panel_to_company(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<assign_stop_panel_to_company_result, unknown, assign_stop_panel_to_company_result, readonly unknown[]>;
}

export function assign_stop_panel_to_company_mutation_options(
  opts: MutationOptionsFactory<assign_stop_panel_to_company_params, assign_stop_panel_to_company_result>
) {
  return {
    mutationKey: ["assign_stop_panel_to_company"] as const,
    mutationFn: (params: assign_stop_panel_to_company_params) => api.assign_stop_panel_to_company(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<assign_stop_panel_to_company_result, unknown, assign_stop_panel_to_company_params>;
}

export function bavi_get_supported_events_query_options(
  opts: QueryOptionsFactory<bavi_get_supported_events_params, bavi_get_supported_events_result>
) {
  return {
    queryKey: ["bavi_get_supported_events", opts.params] as const,
    queryFn: () => api.bavi_get_supported_events(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<bavi_get_supported_events_result, unknown, bavi_get_supported_events_result, readonly unknown[]>;
}

export function bavi_get_supported_events_mutation_options(
  opts: MutationOptionsFactory<bavi_get_supported_events_params, bavi_get_supported_events_result>
) {
  return {
    mutationKey: ["bavi_get_supported_events"] as const,
    mutationFn: (params: bavi_get_supported_events_params) => api.bavi_get_supported_events(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<bavi_get_supported_events_result, unknown, bavi_get_supported_events_params>;
}

export function change_user_password_query_options(
  opts: QueryOptionsFactory<change_user_password_params, change_user_password_result>
) {
  return {
    queryKey: ["change_user_password", opts.params] as const,
    queryFn: () => api.change_user_password(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<change_user_password_result, unknown, change_user_password_result, readonly unknown[]>;
}

export function change_user_password_mutation_options(
  opts: MutationOptionsFactory<change_user_password_params, change_user_password_result>
) {
  return {
    mutationKey: ["change_user_password"] as const,
    mutationFn: (params: change_user_password_params) => api.change_user_password(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<change_user_password_result, unknown, change_user_password_params>;
}

export function clone_crossroad_version_query_options(
  opts: QueryOptionsFactory<clone_crossroad_version_params, clone_crossroad_version_result>
) {
  return {
    queryKey: ["clone_crossroad_version", opts.params] as const,
    queryFn: () => api.clone_crossroad_version(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<clone_crossroad_version_result, unknown, clone_crossroad_version_result, readonly unknown[]>;
}

export function clone_crossroad_version_mutation_options(
  opts: MutationOptionsFactory<clone_crossroad_version_params, clone_crossroad_version_result>
) {
  return {
    mutationKey: ["clone_crossroad_version"] as const,
    mutationFn: (params: clone_crossroad_version_params) => api.clone_crossroad_version(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<clone_crossroad_version_result, unknown, clone_crossroad_version_params>;
}

export function compromise_auth_token_family_query_options(
  opts: QueryOptionsFactory<compromise_auth_token_family_params, compromise_auth_token_family_result>
) {
  return {
    queryKey: ["compromise_auth_token_family", opts.params] as const,
    queryFn: () => api.compromise_auth_token_family(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<compromise_auth_token_family_result, unknown, compromise_auth_token_family_result, readonly unknown[]>;
}

export function compromise_auth_token_family_mutation_options(
  opts: MutationOptionsFactory<compromise_auth_token_family_params, compromise_auth_token_family_result>
) {
  return {
    mutationKey: ["compromise_auth_token_family"] as const,
    mutationFn: (params: compromise_auth_token_family_params) => api.compromise_auth_token_family(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<compromise_auth_token_family_result, unknown, compromise_auth_token_family_params>;
}

export function create_auth_token_query_options(
  opts: QueryOptionsFactory<create_auth_token_params, create_auth_token_result>
) {
  return {
    queryKey: ["create_auth_token", opts.params] as const,
    queryFn: () => api.create_auth_token(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_auth_token_result, unknown, create_auth_token_result, readonly unknown[]>;
}

export function create_auth_token_mutation_options(
  opts: MutationOptionsFactory<create_auth_token_params, create_auth_token_result>
) {
  return {
    mutationKey: ["create_auth_token"] as const,
    mutationFn: (params: create_auth_token_params) => api.create_auth_token(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_auth_token_result, unknown, create_auth_token_params>;
}

export function create_company_query_options(
  opts: QueryOptionsFactory<create_company_params, create_company_result>
) {
  return {
    queryKey: ["create_company", opts.params] as const,
    queryFn: () => api.create_company(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_company_result, unknown, create_company_result, readonly unknown[]>;
}

export function create_company_mutation_options(
  opts: MutationOptionsFactory<create_company_params, create_company_result>
) {
  return {
    mutationKey: ["create_company"] as const,
    mutationFn: (params: create_company_params) => api.create_company(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_company_result, unknown, create_company_params>;
}

export function create_company_section_query_options(
  opts: QueryOptionsFactory<create_company_section_params, create_company_section_result>
) {
  return {
    queryKey: ["create_company_section", opts.params] as const,
    queryFn: () => api.create_company_section(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_company_section_result, unknown, create_company_section_result, readonly unknown[]>;
}

export function create_company_section_mutation_options(
  opts: MutationOptionsFactory<create_company_section_params, create_company_section_result>
) {
  return {
    mutationKey: ["create_company_section"] as const,
    mutationFn: (params: create_company_section_params) => api.create_company_section(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_company_section_result, unknown, create_company_section_params>;
}

export function create_crossroad_query_options(
  opts: QueryOptionsFactory<create_crossroad_params, create_crossroad_result>
) {
  return {
    queryKey: ["create_crossroad", opts.params] as const,
    queryFn: () => api.create_crossroad(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_result, unknown, create_crossroad_result, readonly unknown[]>;
}

export function create_crossroad_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_params, create_crossroad_result>
) {
  return {
    mutationKey: ["create_crossroad"] as const,
    mutationFn: (params: create_crossroad_params) => api.create_crossroad(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_result, unknown, create_crossroad_params>;
}

export function create_crossroad_branch_query_options(
  opts: QueryOptionsFactory<create_crossroad_branch_params, create_crossroad_branch_result>
) {
  return {
    queryKey: ["create_crossroad_branch", opts.params] as const,
    queryFn: () => api.create_crossroad_branch(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_branch_result, unknown, create_crossroad_branch_result, readonly unknown[]>;
}

export function create_crossroad_branch_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_branch_params, create_crossroad_branch_result>
) {
  return {
    mutationKey: ["create_crossroad_branch"] as const,
    mutationFn: (params: create_crossroad_branch_params) => api.create_crossroad_branch(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_branch_result, unknown, create_crossroad_branch_params>;
}

export function create_crossroad_branch_checkin_point_query_options(
  opts: QueryOptionsFactory<create_crossroad_branch_checkin_point_params, create_crossroad_branch_checkin_point_result>
) {
  return {
    queryKey: ["create_crossroad_branch_checkin_point", opts.params] as const,
    queryFn: () => api.create_crossroad_branch_checkin_point(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_branch_checkin_point_result, unknown, create_crossroad_branch_checkin_point_result, readonly unknown[]>;
}

export function create_crossroad_branch_checkin_point_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_branch_checkin_point_params, create_crossroad_branch_checkin_point_result>
) {
  return {
    mutationKey: ["create_crossroad_branch_checkin_point"] as const,
    mutationFn: (params: create_crossroad_branch_checkin_point_params) => api.create_crossroad_branch_checkin_point(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_branch_checkin_point_result, unknown, create_crossroad_branch_checkin_point_params>;
}

export function create_crossroad_checkin_branch_query_options(
  opts: QueryOptionsFactory<create_crossroad_checkin_branch_params, create_crossroad_checkin_branch_result>
) {
  return {
    queryKey: ["create_crossroad_checkin_branch", opts.params] as const,
    queryFn: () => api.create_crossroad_checkin_branch(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_checkin_branch_result, unknown, create_crossroad_checkin_branch_result, readonly unknown[]>;
}

export function create_crossroad_checkin_branch_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_checkin_branch_params, create_crossroad_checkin_branch_result>
) {
  return {
    mutationKey: ["create_crossroad_checkin_branch"] as const,
    mutationFn: (params: create_crossroad_checkin_branch_params) => api.create_crossroad_checkin_branch(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_checkin_branch_result, unknown, create_crossroad_checkin_branch_params>;
}

export function create_crossroad_checkout_branch_query_options(
  opts: QueryOptionsFactory<create_crossroad_checkout_branch_params, create_crossroad_checkout_branch_result>
) {
  return {
    queryKey: ["create_crossroad_checkout_branch", opts.params] as const,
    queryFn: () => api.create_crossroad_checkout_branch(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_checkout_branch_result, unknown, create_crossroad_checkout_branch_result, readonly unknown[]>;
}

export function create_crossroad_checkout_branch_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_checkout_branch_params, create_crossroad_checkout_branch_result>
) {
  return {
    mutationKey: ["create_crossroad_checkout_branch"] as const,
    mutationFn: (params: create_crossroad_checkout_branch_params) => api.create_crossroad_checkout_branch(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_checkout_branch_result, unknown, create_crossroad_checkout_branch_params>;
}

export function create_crossroad_checkout_point_query_options(
  opts: QueryOptionsFactory<create_crossroad_checkout_point_params, create_crossroad_checkout_point_result>
) {
  return {
    queryKey: ["create_crossroad_checkout_point", opts.params] as const,
    queryFn: () => api.create_crossroad_checkout_point(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_checkout_point_result, unknown, create_crossroad_checkout_point_result, readonly unknown[]>;
}

export function create_crossroad_checkout_point_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_checkout_point_params, create_crossroad_checkout_point_result>
) {
  return {
    mutationKey: ["create_crossroad_checkout_point"] as const,
    mutationFn: (params: create_crossroad_checkout_point_params) => api.create_crossroad_checkout_point(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_checkout_point_result, unknown, create_crossroad_checkout_point_params>;
}

export function create_crossroad_direction_query_options(
  opts: QueryOptionsFactory<create_crossroad_direction_params, create_crossroad_direction_result>
) {
  return {
    queryKey: ["create_crossroad_direction", opts.params] as const,
    queryFn: () => api.create_crossroad_direction(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_direction_result, unknown, create_crossroad_direction_result, readonly unknown[]>;
}

export function create_crossroad_direction_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_direction_params, create_crossroad_direction_result>
) {
  return {
    mutationKey: ["create_crossroad_direction"] as const,
    mutationFn: (params: create_crossroad_direction_params) => api.create_crossroad_direction(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_direction_result, unknown, create_crossroad_direction_params>;
}

export function create_crossroad_version_query_options(
  opts: QueryOptionsFactory<create_crossroad_version_params, create_crossroad_version_result>
) {
  return {
    queryKey: ["create_crossroad_version", opts.params] as const,
    queryFn: () => api.create_crossroad_version(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_crossroad_version_result, unknown, create_crossroad_version_result, readonly unknown[]>;
}

export function create_crossroad_version_mutation_options(
  opts: MutationOptionsFactory<create_crossroad_version_params, create_crossroad_version_result>
) {
  return {
    mutationKey: ["create_crossroad_version"] as const,
    mutationFn: (params: create_crossroad_version_params) => api.create_crossroad_version(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_crossroad_version_result, unknown, create_crossroad_version_params>;
}

export function create_email_record_query_options(
  opts: QueryOptionsFactory<create_email_record_params, create_email_record_result>
) {
  return {
    queryKey: ["create_email_record", opts.params] as const,
    queryFn: () => api.create_email_record(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_email_record_result, unknown, create_email_record_result, readonly unknown[]>;
}

export function create_email_record_mutation_options(
  opts: MutationOptionsFactory<create_email_record_params, create_email_record_result>
) {
  return {
    mutationKey: ["create_email_record"] as const,
    mutationFn: (params: create_email_record_params) => api.create_email_record(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_email_record_result, unknown, create_email_record_params>;
}

export function create_report_request_query_options(
  opts: QueryOptionsFactory<create_report_request_params, create_report_request_result>
) {
  return {
    queryKey: ["create_report_request", opts.params] as const,
    queryFn: () => api.create_report_request(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_report_request_result, unknown, create_report_request_result, readonly unknown[]>;
}

export function create_report_request_mutation_options(
  opts: MutationOptionsFactory<create_report_request_params, create_report_request_result>
) {
  return {
    mutationKey: ["create_report_request"] as const,
    mutationFn: (params: create_report_request_params) => api.create_report_request(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_report_request_result, unknown, create_report_request_params>;
}

export function create_user_query_options(
  opts: QueryOptionsFactory<create_user_params, create_user_result>
) {
  return {
    queryKey: ["create_user", opts.params] as const,
    queryFn: () => api.create_user(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_user_result, unknown, create_user_result, readonly unknown[]>;
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

export function create_vehicles_update_request_email_record_query_options(
  opts: QueryOptionsFactory<create_vehicles_update_request_email_record_params, create_vehicles_update_request_email_record_result>
) {
  return {
    queryKey: ["create_vehicles_update_request_email_record", opts.params] as const,
    queryFn: () => api.create_vehicles_update_request_email_record(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<create_vehicles_update_request_email_record_result, unknown, create_vehicles_update_request_email_record_result, readonly unknown[]>;
}

export function create_vehicles_update_request_email_record_mutation_options(
  opts: MutationOptionsFactory<create_vehicles_update_request_email_record_params, create_vehicles_update_request_email_record_result>
) {
  return {
    mutationKey: ["create_vehicles_update_request_email_record"] as const,
    mutationFn: (params: create_vehicles_update_request_email_record_params) => api.create_vehicles_update_request_email_record(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<create_vehicles_update_request_email_record_result, unknown, create_vehicles_update_request_email_record_params>;
}

export function delete_auth_token_query_options(
  opts: QueryOptionsFactory<delete_auth_token_params, delete_auth_token_result>
) {
  return {
    queryKey: ["delete_auth_token", opts.params] as const,
    queryFn: () => api.delete_auth_token(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_auth_token_result, unknown, delete_auth_token_result, readonly unknown[]>;
}

export function delete_auth_token_mutation_options(
  opts: MutationOptionsFactory<delete_auth_token_params, delete_auth_token_result>
) {
  return {
    mutationKey: ["delete_auth_token"] as const,
    mutationFn: (params: delete_auth_token_params) => api.delete_auth_token(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_auth_token_result, unknown, delete_auth_token_params>;
}

export function delete_auth_token_family_query_options(
  opts: QueryOptionsFactory<delete_auth_token_family_params, delete_auth_token_family_result>
) {
  return {
    queryKey: ["delete_auth_token_family", opts.params] as const,
    queryFn: () => api.delete_auth_token_family(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_auth_token_family_result, unknown, delete_auth_token_family_result, readonly unknown[]>;
}

export function delete_auth_token_family_mutation_options(
  opts: MutationOptionsFactory<delete_auth_token_family_params, delete_auth_token_family_result>
) {
  return {
    mutationKey: ["delete_auth_token_family"] as const,
    mutationFn: (params: delete_auth_token_family_params) => api.delete_auth_token_family(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_auth_token_family_result, unknown, delete_auth_token_family_params>;
}

export function delete_company_query_options(
  opts: QueryOptionsFactory<delete_company_params, delete_company_result>
) {
  return {
    queryKey: ["delete_company", opts.params] as const,
    queryFn: () => api.delete_company(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_company_result, unknown, delete_company_result, readonly unknown[]>;
}

export function delete_company_mutation_options(
  opts: MutationOptionsFactory<delete_company_params, delete_company_result>
) {
  return {
    mutationKey: ["delete_company"] as const,
    mutationFn: (params: delete_company_params) => api.delete_company(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_company_result, unknown, delete_company_params>;
}

export function delete_company_section_query_options(
  opts: QueryOptionsFactory<delete_company_section_params, delete_company_section_result>
) {
  return {
    queryKey: ["delete_company_section", opts.params] as const,
    queryFn: () => api.delete_company_section(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_company_section_result, unknown, delete_company_section_result, readonly unknown[]>;
}

export function delete_company_section_mutation_options(
  opts: MutationOptionsFactory<delete_company_section_params, delete_company_section_result>
) {
  return {
    mutationKey: ["delete_company_section"] as const,
    mutationFn: (params: delete_company_section_params) => api.delete_company_section(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_company_section_result, unknown, delete_company_section_params>;
}

export function delete_crossroad_query_options(
  opts: QueryOptionsFactory<delete_crossroad_params, delete_crossroad_result>
) {
  return {
    queryKey: ["delete_crossroad", opts.params] as const,
    queryFn: () => api.delete_crossroad(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_crossroad_result, unknown, delete_crossroad_result, readonly unknown[]>;
}

export function delete_crossroad_mutation_options(
  opts: MutationOptionsFactory<delete_crossroad_params, delete_crossroad_result>
) {
  return {
    mutationKey: ["delete_crossroad"] as const,
    mutationFn: (params: delete_crossroad_params) => api.delete_crossroad(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_crossroad_result, unknown, delete_crossroad_params>;
}

export function delete_crossroad_branch_query_options(
  opts: QueryOptionsFactory<delete_crossroad_branch_params, delete_crossroad_branch_result>
) {
  return {
    queryKey: ["delete_crossroad_branch", opts.params] as const,
    queryFn: () => api.delete_crossroad_branch(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_crossroad_branch_result, unknown, delete_crossroad_branch_result, readonly unknown[]>;
}

export function delete_crossroad_branch_mutation_options(
  opts: MutationOptionsFactory<delete_crossroad_branch_params, delete_crossroad_branch_result>
) {
  return {
    mutationKey: ["delete_crossroad_branch"] as const,
    mutationFn: (params: delete_crossroad_branch_params) => api.delete_crossroad_branch(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_crossroad_branch_result, unknown, delete_crossroad_branch_params>;
}

export function delete_crossroad_branch_checkin_point_query_options(
  opts: QueryOptionsFactory<delete_crossroad_branch_checkin_point_params, delete_crossroad_branch_checkin_point_result>
) {
  return {
    queryKey: ["delete_crossroad_branch_checkin_point", opts.params] as const,
    queryFn: () => api.delete_crossroad_branch_checkin_point(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_crossroad_branch_checkin_point_result, unknown, delete_crossroad_branch_checkin_point_result, readonly unknown[]>;
}

export function delete_crossroad_branch_checkin_point_mutation_options(
  opts: MutationOptionsFactory<delete_crossroad_branch_checkin_point_params, delete_crossroad_branch_checkin_point_result>
) {
  return {
    mutationKey: ["delete_crossroad_branch_checkin_point"] as const,
    mutationFn: (params: delete_crossroad_branch_checkin_point_params) => api.delete_crossroad_branch_checkin_point(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_crossroad_branch_checkin_point_result, unknown, delete_crossroad_branch_checkin_point_params>;
}

export function delete_crossroad_checkout_point_query_options(
  opts: QueryOptionsFactory<delete_crossroad_checkout_point_params, delete_crossroad_checkout_point_result>
) {
  return {
    queryKey: ["delete_crossroad_checkout_point", opts.params] as const,
    queryFn: () => api.delete_crossroad_checkout_point(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_crossroad_checkout_point_result, unknown, delete_crossroad_checkout_point_result, readonly unknown[]>;
}

export function delete_crossroad_checkout_point_mutation_options(
  opts: MutationOptionsFactory<delete_crossroad_checkout_point_params, delete_crossroad_checkout_point_result>
) {
  return {
    mutationKey: ["delete_crossroad_checkout_point"] as const,
    mutationFn: (params: delete_crossroad_checkout_point_params) => api.delete_crossroad_checkout_point(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_crossroad_checkout_point_result, unknown, delete_crossroad_checkout_point_params>;
}

export function delete_crossroad_direction_query_options(
  opts: QueryOptionsFactory<delete_crossroad_direction_params, delete_crossroad_direction_result>
) {
  return {
    queryKey: ["delete_crossroad_direction", opts.params] as const,
    queryFn: () => api.delete_crossroad_direction(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_crossroad_direction_result, unknown, delete_crossroad_direction_result, readonly unknown[]>;
}

export function delete_crossroad_direction_mutation_options(
  opts: MutationOptionsFactory<delete_crossroad_direction_params, delete_crossroad_direction_result>
) {
  return {
    mutationKey: ["delete_crossroad_direction"] as const,
    mutationFn: (params: delete_crossroad_direction_params) => api.delete_crossroad_direction(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_crossroad_direction_result, unknown, delete_crossroad_direction_params>;
}

export function delete_expired_auth_tokens_query_options(
  opts: QueryOptionsFactory<delete_expired_auth_tokens_params, delete_expired_auth_tokens_result>
) {
  return {
    queryKey: ["delete_expired_auth_tokens", opts.params] as const,
    queryFn: () => api.delete_expired_auth_tokens(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_expired_auth_tokens_result, unknown, delete_expired_auth_tokens_result, readonly unknown[]>;
}

export function delete_expired_auth_tokens_mutation_options(
  opts: MutationOptionsFactory<delete_expired_auth_tokens_params, delete_expired_auth_tokens_result>
) {
  return {
    mutationKey: ["delete_expired_auth_tokens"] as const,
    mutationFn: (params: delete_expired_auth_tokens_params) => api.delete_expired_auth_tokens(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<delete_expired_auth_tokens_result, unknown, delete_expired_auth_tokens_params>;
}

export function delete_user_query_options(
  opts: QueryOptionsFactory<delete_user_params, delete_user_result>
) {
  return {
    queryKey: ["delete_user", opts.params] as const,
    queryFn: () => api.delete_user(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<delete_user_result, unknown, delete_user_result, readonly unknown[]>;
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

export function get_active_vehicle_updates_ui_lock_request_query_options(
  opts: QueryOptionsFactory<get_active_vehicle_updates_ui_lock_request_params, get_active_vehicle_updates_ui_lock_request_result>
) {
  return {
    queryKey: ["get_active_vehicle_updates_ui_lock_request", opts.params] as const,
    queryFn: () => api.get_active_vehicle_updates_ui_lock_request(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_active_vehicle_updates_ui_lock_request_result, unknown, get_active_vehicle_updates_ui_lock_request_result, readonly unknown[]>;
}

export function get_active_vehicle_updates_ui_lock_request_mutation_options(
  opts: MutationOptionsFactory<get_active_vehicle_updates_ui_lock_request_params, get_active_vehicle_updates_ui_lock_request_result>
) {
  return {
    mutationKey: ["get_active_vehicle_updates_ui_lock_request"] as const,
    mutationFn: (params: get_active_vehicle_updates_ui_lock_request_params) => api.get_active_vehicle_updates_ui_lock_request(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_active_vehicle_updates_ui_lock_request_result, unknown, get_active_vehicle_updates_ui_lock_request_params>;
}

export function get_all_crossroad_directions_query_options(
  opts: QueryOptionsFactory<get_all_crossroad_directions_params, get_all_crossroad_directions_result>
) {
  return {
    queryKey: ["get_all_crossroad_directions", opts.params] as const,
    queryFn: () => api.get_all_crossroad_directions(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_all_crossroad_directions_result, unknown, get_all_crossroad_directions_result, readonly unknown[]>;
}

export function get_all_crossroad_directions_mutation_options(
  opts: MutationOptionsFactory<get_all_crossroad_directions_params, get_all_crossroad_directions_result>
) {
  return {
    mutationKey: ["get_all_crossroad_directions"] as const,
    mutationFn: (params: get_all_crossroad_directions_params) => api.get_all_crossroad_directions(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_all_crossroad_directions_result, unknown, get_all_crossroad_directions_params>;
}

export function get_all_crossroad_directions_by_version_id_query_options(
  opts: QueryOptionsFactory<get_all_crossroad_directions_by_version_id_params, get_all_crossroad_directions_by_version_id_result>
) {
  return {
    queryKey: ["get_all_crossroad_directions_by_version_id", opts.params] as const,
    queryFn: () => api.get_all_crossroad_directions_by_version_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_all_crossroad_directions_by_version_id_result, unknown, get_all_crossroad_directions_by_version_id_result, readonly unknown[]>;
}

export function get_all_crossroad_directions_by_version_id_mutation_options(
  opts: MutationOptionsFactory<get_all_crossroad_directions_by_version_id_params, get_all_crossroad_directions_by_version_id_result>
) {
  return {
    mutationKey: ["get_all_crossroad_directions_by_version_id"] as const,
    mutationFn: (params: get_all_crossroad_directions_by_version_id_params) => api.get_all_crossroad_directions_by_version_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_all_crossroad_directions_by_version_id_result, unknown, get_all_crossroad_directions_by_version_id_params>;
}

export function get_api_vehicle_data_query_options(
  opts: QueryOptionsFactory<get_api_vehicle_data_params, get_api_vehicle_data_result>
) {
  return {
    queryKey: ["get_api_vehicle_data", opts.params] as const,
    queryFn: () => api.get_api_vehicle_data(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_api_vehicle_data_result, unknown, get_api_vehicle_data_result, readonly unknown[]>;
}

export function get_api_vehicle_data_mutation_options(
  opts: MutationOptionsFactory<get_api_vehicle_data_params, get_api_vehicle_data_result>
) {
  return {
    mutationKey: ["get_api_vehicle_data"] as const,
    mutationFn: (params: get_api_vehicle_data_params) => api.get_api_vehicle_data(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_api_vehicle_data_result, unknown, get_api_vehicle_data_params>;
}

export function get_api_vehicle_eco_drive_query_options(
  opts: QueryOptionsFactory<get_api_vehicle_eco_drive_params, get_api_vehicle_eco_drive_result>
) {
  return {
    queryKey: ["get_api_vehicle_eco_drive", opts.params] as const,
    queryFn: () => api.get_api_vehicle_eco_drive(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_api_vehicle_eco_drive_result, unknown, get_api_vehicle_eco_drive_result, readonly unknown[]>;
}

export function get_api_vehicle_eco_drive_mutation_options(
  opts: MutationOptionsFactory<get_api_vehicle_eco_drive_params, get_api_vehicle_eco_drive_result>
) {
  return {
    mutationKey: ["get_api_vehicle_eco_drive"] as const,
    mutationFn: (params: get_api_vehicle_eco_drive_params) => api.get_api_vehicle_eco_drive(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_api_vehicle_eco_drive_result, unknown, get_api_vehicle_eco_drive_params>;
}

export function get_auth_token_query_options(
  opts: QueryOptionsFactory<get_auth_token_params, get_auth_token_result>
) {
  return {
    queryKey: ["get_auth_token", opts.params] as const,
    queryFn: () => api.get_auth_token(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_auth_token_result, unknown, get_auth_token_result, readonly unknown[]>;
}

export function get_auth_token_mutation_options(
  opts: MutationOptionsFactory<get_auth_token_params, get_auth_token_result>
) {
  return {
    mutationKey: ["get_auth_token"] as const,
    mutationFn: (params: get_auth_token_params) => api.get_auth_token(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_auth_token_result, unknown, get_auth_token_params>;
}

export function get_auth_user_by_id_query_options(
  opts: QueryOptionsFactory<get_auth_user_by_id_params, get_auth_user_by_id_result>
) {
  return {
    queryKey: ["get_auth_user_by_id", opts.params] as const,
    queryFn: () => api.get_auth_user_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_auth_user_by_id_result, unknown, get_auth_user_by_id_result, readonly unknown[]>;
}

export function get_auth_user_by_id_mutation_options(
  opts: MutationOptionsFactory<get_auth_user_by_id_params, get_auth_user_by_id_result>
) {
  return {
    mutationKey: ["get_auth_user_by_id"] as const,
    mutationFn: (params: get_auth_user_by_id_params) => api.get_auth_user_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_auth_user_by_id_result, unknown, get_auth_user_by_id_params>;
}

export function get_auth_user_by_login_name_and_password_query_options(
  opts: QueryOptionsFactory<get_auth_user_by_login_name_and_password_params, get_auth_user_by_login_name_and_password_result>
) {
  return {
    queryKey: ["get_auth_user_by_login_name_and_password", opts.params] as const,
    queryFn: () => api.get_auth_user_by_login_name_and_password(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_auth_user_by_login_name_and_password_result, unknown, get_auth_user_by_login_name_and_password_result, readonly unknown[]>;
}

export function get_auth_user_by_login_name_and_password_mutation_options(
  opts: MutationOptionsFactory<get_auth_user_by_login_name_and_password_params, get_auth_user_by_login_name_and_password_result>
) {
  return {
    mutationKey: ["get_auth_user_by_login_name_and_password"] as const,
    mutationFn: (params: get_auth_user_by_login_name_and_password_params) => api.get_auth_user_by_login_name_and_password(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_auth_user_by_login_name_and_password_result, unknown, get_auth_user_by_login_name_and_password_params>;
}

export function get_companies_query_options(
  opts: QueryOptionsFactory<get_companies_params, get_companies_result>
) {
  return {
    queryKey: ["get_companies", opts.params] as const,
    queryFn: () => api.get_companies(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_companies_result, unknown, get_companies_result, readonly unknown[]>;
}

export function get_companies_mutation_options(
  opts: MutationOptionsFactory<get_companies_params, get_companies_result>
) {
  return {
    mutationKey: ["get_companies"] as const,
    mutationFn: (params: get_companies_params) => api.get_companies(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_companies_result, unknown, get_companies_params>;
}

export function get_company_by_id_query_options(
  opts: QueryOptionsFactory<get_company_by_id_params, get_company_by_id_result>
) {
  return {
    queryKey: ["get_company_by_id", opts.params] as const,
    queryFn: () => api.get_company_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_company_by_id_result, unknown, get_company_by_id_result, readonly unknown[]>;
}

export function get_company_by_id_mutation_options(
  opts: MutationOptionsFactory<get_company_by_id_params, get_company_by_id_result>
) {
  return {
    mutationKey: ["get_company_by_id"] as const,
    mutationFn: (params: get_company_by_id_params) => api.get_company_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_company_by_id_result, unknown, get_company_by_id_params>;
}

export function get_company_sections_query_options(
  opts: QueryOptionsFactory<get_company_sections_params, get_company_sections_result>
) {
  return {
    queryKey: ["get_company_sections", opts.params] as const,
    queryFn: () => api.get_company_sections(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_company_sections_result, unknown, get_company_sections_result, readonly unknown[]>;
}

export function get_company_sections_mutation_options(
  opts: MutationOptionsFactory<get_company_sections_params, get_company_sections_result>
) {
  return {
    mutationKey: ["get_company_sections"] as const,
    mutationFn: (params: get_company_sections_params) => api.get_company_sections(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_company_sections_result, unknown, get_company_sections_params>;
}

export function get_crossroad_branch_by_id_query_options(
  opts: QueryOptionsFactory<get_crossroad_branch_by_id_params, get_crossroad_branch_by_id_result>
) {
  return {
    queryKey: ["get_crossroad_branch_by_id", opts.params] as const,
    queryFn: () => api.get_crossroad_branch_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_branch_by_id_result, unknown, get_crossroad_branch_by_id_result, readonly unknown[]>;
}

export function get_crossroad_branch_by_id_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_branch_by_id_params, get_crossroad_branch_by_id_result>
) {
  return {
    mutationKey: ["get_crossroad_branch_by_id"] as const,
    mutationFn: (params: get_crossroad_branch_by_id_params) => api.get_crossroad_branch_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_branch_by_id_result, unknown, get_crossroad_branch_by_id_params>;
}

export function get_crossroad_branch_checkin_point_by_id_query_options(
  opts: QueryOptionsFactory<get_crossroad_branch_checkin_point_by_id_params, get_crossroad_branch_checkin_point_by_id_result>
) {
  return {
    queryKey: ["get_crossroad_branch_checkin_point_by_id", opts.params] as const,
    queryFn: () => api.get_crossroad_branch_checkin_point_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_branch_checkin_point_by_id_result, unknown, get_crossroad_branch_checkin_point_by_id_result, readonly unknown[]>;
}

export function get_crossroad_branch_checkin_point_by_id_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_branch_checkin_point_by_id_params, get_crossroad_branch_checkin_point_by_id_result>
) {
  return {
    mutationKey: ["get_crossroad_branch_checkin_point_by_id"] as const,
    mutationFn: (params: get_crossroad_branch_checkin_point_by_id_params) => api.get_crossroad_branch_checkin_point_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_branch_checkin_point_by_id_result, unknown, get_crossroad_branch_checkin_point_by_id_params>;
}

export function get_crossroad_branch_checkin_points_query_options(
  opts: QueryOptionsFactory<get_crossroad_branch_checkin_points_params, get_crossroad_branch_checkin_points_result>
) {
  return {
    queryKey: ["get_crossroad_branch_checkin_points", opts.params] as const,
    queryFn: () => api.get_crossroad_branch_checkin_points(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_branch_checkin_points_result, unknown, get_crossroad_branch_checkin_points_result, readonly unknown[]>;
}

export function get_crossroad_branch_checkin_points_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_branch_checkin_points_params, get_crossroad_branch_checkin_points_result>
) {
  return {
    mutationKey: ["get_crossroad_branch_checkin_points"] as const,
    mutationFn: (params: get_crossroad_branch_checkin_points_params) => api.get_crossroad_branch_checkin_points(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_branch_checkin_points_result, unknown, get_crossroad_branch_checkin_points_params>;
}

export function get_crossroad_branches_query_options(
  opts: QueryOptionsFactory<get_crossroad_branches_params, get_crossroad_branches_result>
) {
  return {
    queryKey: ["get_crossroad_branches", opts.params] as const,
    queryFn: () => api.get_crossroad_branches(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_branches_result, unknown, get_crossroad_branches_result, readonly unknown[]>;
}

export function get_crossroad_branches_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_branches_params, get_crossroad_branches_result>
) {
  return {
    mutationKey: ["get_crossroad_branches"] as const,
    mutationFn: (params: get_crossroad_branches_params) => api.get_crossroad_branches(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_branches_result, unknown, get_crossroad_branches_params>;
}

export function get_crossroad_branches_all_query_options(
  opts: QueryOptionsFactory<get_crossroad_branches_all_params, get_crossroad_branches_all_result>
) {
  return {
    queryKey: ["get_crossroad_branches_all", opts.params] as const,
    queryFn: () => api.get_crossroad_branches_all(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_branches_all_result, unknown, get_crossroad_branches_all_result, readonly unknown[]>;
}

export function get_crossroad_branches_all_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_branches_all_params, get_crossroad_branches_all_result>
) {
  return {
    mutationKey: ["get_crossroad_branches_all"] as const,
    mutationFn: (params: get_crossroad_branches_all_params) => api.get_crossroad_branches_all(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_branches_all_result, unknown, get_crossroad_branches_all_params>;
}

export function get_crossroad_by_id_query_options(
  opts: QueryOptionsFactory<get_crossroad_by_id_params, get_crossroad_by_id_result>
) {
  return {
    queryKey: ["get_crossroad_by_id", opts.params] as const,
    queryFn: () => api.get_crossroad_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_by_id_result, unknown, get_crossroad_by_id_result, readonly unknown[]>;
}

export function get_crossroad_by_id_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_by_id_params, get_crossroad_by_id_result>
) {
  return {
    mutationKey: ["get_crossroad_by_id"] as const,
    mutationFn: (params: get_crossroad_by_id_params) => api.get_crossroad_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_by_id_result, unknown, get_crossroad_by_id_params>;
}

export function get_crossroad_checkout_point_by_id_query_options(
  opts: QueryOptionsFactory<get_crossroad_checkout_point_by_id_params, get_crossroad_checkout_point_by_id_result>
) {
  return {
    queryKey: ["get_crossroad_checkout_point_by_id", opts.params] as const,
    queryFn: () => api.get_crossroad_checkout_point_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_checkout_point_by_id_result, unknown, get_crossroad_checkout_point_by_id_result, readonly unknown[]>;
}

export function get_crossroad_checkout_point_by_id_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_checkout_point_by_id_params, get_crossroad_checkout_point_by_id_result>
) {
  return {
    mutationKey: ["get_crossroad_checkout_point_by_id"] as const,
    mutationFn: (params: get_crossroad_checkout_point_by_id_params) => api.get_crossroad_checkout_point_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_checkout_point_by_id_result, unknown, get_crossroad_checkout_point_by_id_params>;
}

export function get_crossroad_checkout_points_query_options(
  opts: QueryOptionsFactory<get_crossroad_checkout_points_params, get_crossroad_checkout_points_result>
) {
  return {
    queryKey: ["get_crossroad_checkout_points", opts.params] as const,
    queryFn: () => api.get_crossroad_checkout_points(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_checkout_points_result, unknown, get_crossroad_checkout_points_result, readonly unknown[]>;
}

export function get_crossroad_checkout_points_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_checkout_points_params, get_crossroad_checkout_points_result>
) {
  return {
    mutationKey: ["get_crossroad_checkout_points"] as const,
    mutationFn: (params: get_crossroad_checkout_points_params) => api.get_crossroad_checkout_points(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_checkout_points_result, unknown, get_crossroad_checkout_points_params>;
}

export function get_crossroad_checkpoint_definitions_query_options(
  opts: QueryOptionsFactory<get_crossroad_checkpoint_definitions_params, get_crossroad_checkpoint_definitions_result>
) {
  return {
    queryKey: ["get_crossroad_checkpoint_definitions", opts.params] as const,
    queryFn: () => api.get_crossroad_checkpoint_definitions(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_checkpoint_definitions_result, unknown, get_crossroad_checkpoint_definitions_result, readonly unknown[]>;
}

export function get_crossroad_checkpoint_definitions_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_checkpoint_definitions_params, get_crossroad_checkpoint_definitions_result>
) {
  return {
    mutationKey: ["get_crossroad_checkpoint_definitions"] as const,
    mutationFn: (params: get_crossroad_checkpoint_definitions_params) => api.get_crossroad_checkpoint_definitions(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_checkpoint_definitions_result, unknown, get_crossroad_checkpoint_definitions_params>;
}

export function get_crossroad_direction_by_id_query_options(
  opts: QueryOptionsFactory<get_crossroad_direction_by_id_params, get_crossroad_direction_by_id_result>
) {
  return {
    queryKey: ["get_crossroad_direction_by_id", opts.params] as const,
    queryFn: () => api.get_crossroad_direction_by_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_direction_by_id_result, unknown, get_crossroad_direction_by_id_result, readonly unknown[]>;
}

export function get_crossroad_direction_by_id_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_direction_by_id_params, get_crossroad_direction_by_id_result>
) {
  return {
    mutationKey: ["get_crossroad_direction_by_id"] as const,
    mutationFn: (params: get_crossroad_direction_by_id_params) => api.get_crossroad_direction_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_direction_by_id_result, unknown, get_crossroad_direction_by_id_params>;
}

export function get_crossroad_directions_query_options(
  opts: QueryOptionsFactory<get_crossroad_directions_params, get_crossroad_directions_result>
) {
  return {
    queryKey: ["get_crossroad_directions", opts.params] as const,
    queryFn: () => api.get_crossroad_directions(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_directions_result, unknown, get_crossroad_directions_result, readonly unknown[]>;
}

export function get_crossroad_directions_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_directions_params, get_crossroad_directions_result>
) {
  return {
    mutationKey: ["get_crossroad_directions"] as const,
    mutationFn: (params: get_crossroad_directions_params) => api.get_crossroad_directions(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_directions_result, unknown, get_crossroad_directions_params>;
}

export function get_crossroad_driver_types_query_options(
  opts: QueryOptionsFactory<get_crossroad_driver_types_params, get_crossroad_driver_types_result>
) {
  return {
    queryKey: ["get_crossroad_driver_types", opts.params] as const,
    queryFn: () => api.get_crossroad_driver_types(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_driver_types_result, unknown, get_crossroad_driver_types_result, readonly unknown[]>;
}

export function get_crossroad_driver_types_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_driver_types_params, get_crossroad_driver_types_result>
) {
  return {
    mutationKey: ["get_crossroad_driver_types"] as const,
    mutationFn: (params: get_crossroad_driver_types_params) => api.get_crossroad_driver_types(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_driver_types_result, unknown, get_crossroad_driver_types_params>;
}

export function get_crossroad_history_events_query_options(
  opts: QueryOptionsFactory<get_crossroad_history_events_params, get_crossroad_history_events_result>
) {
  return {
    queryKey: ["get_crossroad_history_events", opts.params] as const,
    queryFn: () => api.get_crossroad_history_events(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_history_events_result, unknown, get_crossroad_history_events_result, readonly unknown[]>;
}

export function get_crossroad_history_events_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_history_events_params, get_crossroad_history_events_result>
) {
  return {
    mutationKey: ["get_crossroad_history_events"] as const,
    mutationFn: (params: get_crossroad_history_events_params) => api.get_crossroad_history_events(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_history_events_result, unknown, get_crossroad_history_events_params>;
}

export function get_crossroad_versions_query_options(
  opts: QueryOptionsFactory<get_crossroad_versions_params, get_crossroad_versions_result>
) {
  return {
    queryKey: ["get_crossroad_versions", opts.params] as const,
    queryFn: () => api.get_crossroad_versions(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroad_versions_result, unknown, get_crossroad_versions_result, readonly unknown[]>;
}

export function get_crossroad_versions_mutation_options(
  opts: MutationOptionsFactory<get_crossroad_versions_params, get_crossroad_versions_result>
) {
  return {
    mutationKey: ["get_crossroad_versions"] as const,
    mutationFn: (params: get_crossroad_versions_params) => api.get_crossroad_versions(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroad_versions_result, unknown, get_crossroad_versions_params>;
}

export function get_crossroads_query_options(
  opts: QueryOptionsFactory<get_crossroads_params, get_crossroads_result>
) {
  return {
    queryKey: ["get_crossroads", opts.params] as const,
    queryFn: () => api.get_crossroads(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroads_result, unknown, get_crossroads_result, readonly unknown[]>;
}

export function get_crossroads_mutation_options(
  opts: MutationOptionsFactory<get_crossroads_params, get_crossroads_result>
) {
  return {
    mutationKey: ["get_crossroads"] as const,
    mutationFn: (params: get_crossroads_params) => api.get_crossroads(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroads_result, unknown, get_crossroads_params>;
}

export function get_crossroads_by_version_id_query_options(
  opts: QueryOptionsFactory<get_crossroads_by_version_id_params, get_crossroads_by_version_id_result>
) {
  return {
    queryKey: ["get_crossroads_by_version_id", opts.params] as const,
    queryFn: () => api.get_crossroads_by_version_id(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_crossroads_by_version_id_result, unknown, get_crossroads_by_version_id_result, readonly unknown[]>;
}

export function get_crossroads_by_version_id_mutation_options(
  opts: MutationOptionsFactory<get_crossroads_by_version_id_params, get_crossroads_by_version_id_result>
) {
  return {
    mutationKey: ["get_crossroads_by_version_id"] as const,
    mutationFn: (params: get_crossroads_by_version_id_params) => api.get_crossroads_by_version_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_crossroads_by_version_id_result, unknown, get_crossroads_by_version_id_params>;
}

export function get_diagnostic_data_actual_state_query_options(
  opts: QueryOptionsFactory<get_diagnostic_data_actual_state_params, get_diagnostic_data_actual_state_result>
) {
  return {
    queryKey: ["get_diagnostic_data_actual_state", opts.params] as const,
    queryFn: () => api.get_diagnostic_data_actual_state(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_diagnostic_data_actual_state_result, unknown, get_diagnostic_data_actual_state_result, readonly unknown[]>;
}

export function get_diagnostic_data_actual_state_mutation_options(
  opts: MutationOptionsFactory<get_diagnostic_data_actual_state_params, get_diagnostic_data_actual_state_result>
) {
  return {
    mutationKey: ["get_diagnostic_data_actual_state"] as const,
    mutationFn: (params: get_diagnostic_data_actual_state_params) => api.get_diagnostic_data_actual_state(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_diagnostic_data_actual_state_result, unknown, get_diagnostic_data_actual_state_params>;
}

export function get_history_query_options(
  opts: QueryOptionsFactory<get_history_params, get_history_result>
) {
  return {
    queryKey: ["get_history", opts.params] as const,
    queryFn: () => api.get_history(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_history_result, unknown, get_history_result, readonly unknown[]>;
}

export function get_history_mutation_options(
  opts: MutationOptionsFactory<get_history_params, get_history_result>
) {
  return {
    mutationKey: ["get_history"] as const,
    mutationFn: (params: get_history_params) => api.get_history(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_history_result, unknown, get_history_params>;
}

export function get_history_process_data_query_options(
  opts: QueryOptionsFactory<get_history_process_data_params, get_history_process_data_result>
) {
  return {
    queryKey: ["get_history_process_data", opts.params] as const,
    queryFn: () => api.get_history_process_data(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_history_process_data_result, unknown, get_history_process_data_result, readonly unknown[]>;
}

export function get_history_process_data_mutation_options(
  opts: MutationOptionsFactory<get_history_process_data_params, get_history_process_data_result>
) {
  return {
    mutationKey: ["get_history_process_data"] as const,
    mutationFn: (params: get_history_process_data_params) => api.get_history_process_data(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_history_process_data_result, unknown, get_history_process_data_params>;
}

export function get_history_process_data__query_options(
  opts: QueryOptionsFactory<get_history_process_data__params, get_history_process_data__result>
) {
  return {
    queryKey: ["get_history_process_data_", opts.params] as const,
    queryFn: () => api.get_history_process_data_(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_history_process_data__result, unknown, get_history_process_data__result, readonly unknown[]>;
}

export function get_history_process_data__mutation_options(
  opts: MutationOptionsFactory<get_history_process_data__params, get_history_process_data__result>
) {
  return {
    mutationKey: ["get_history_process_data_"] as const,
    mutationFn: (params: get_history_process_data__params) => api.get_history_process_data_(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_history_process_data__result, unknown, get_history_process_data__params>;
}

export function get_history_process_data_dpb_query_options(
  opts: QueryOptionsFactory<get_history_process_data_dpb_params, get_history_process_data_dpb_result>
) {
  return {
    queryKey: ["get_history_process_data_dpb", opts.params] as const,
    queryFn: () => api.get_history_process_data_dpb(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_history_process_data_dpb_result, unknown, get_history_process_data_dpb_result, readonly unknown[]>;
}

export function get_history_process_data_dpb_mutation_options(
  opts: MutationOptionsFactory<get_history_process_data_dpb_params, get_history_process_data_dpb_result>
) {
  return {
    mutationKey: ["get_history_process_data_dpb"] as const,
    mutationFn: (params: get_history_process_data_dpb_params) => api.get_history_process_data_dpb(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_history_process_data_dpb_result, unknown, get_history_process_data_dpb_params>;
}

export function get_log_records_query_options(
  opts: QueryOptionsFactory<get_log_records_params, get_log_records_result>
) {
  return {
    queryKey: ["get_log_records", opts.params] as const,
    queryFn: () => api.get_log_records(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_log_records_result, unknown, get_log_records_result, readonly unknown[]>;
}

export function get_log_records_mutation_options(
  opts: MutationOptionsFactory<get_log_records_params, get_log_records_result>
) {
  return {
    mutationKey: ["get_log_records"] as const,
    mutationFn: (params: get_log_records_params) => api.get_log_records(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_log_records_result, unknown, get_log_records_params>;
}

export function get_peripherals_info_by_type_query_options(
  opts: QueryOptionsFactory<get_peripherals_info_by_type_params, get_peripherals_info_by_type_result>
) {
  return {
    queryKey: ["get_peripherals_info_by_type", opts.params] as const,
    queryFn: () => api.get_peripherals_info_by_type(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_peripherals_info_by_type_result, unknown, get_peripherals_info_by_type_result, readonly unknown[]>;
}

export function get_peripherals_info_by_type_mutation_options(
  opts: MutationOptionsFactory<get_peripherals_info_by_type_params, get_peripherals_info_by_type_result>
) {
  return {
    mutationKey: ["get_peripherals_info_by_type"] as const,
    mutationFn: (params: get_peripherals_info_by_type_params) => api.get_peripherals_info_by_type(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_peripherals_info_by_type_result, unknown, get_peripherals_info_by_type_params>;
}

export function get_peripherals_info_from_selected_vehicle_query_options(
  opts: QueryOptionsFactory<get_peripherals_info_from_selected_vehicle_params, get_peripherals_info_from_selected_vehicle_result>
) {
  return {
    queryKey: ["get_peripherals_info_from_selected_vehicle", opts.params] as const,
    queryFn: () => api.get_peripherals_info_from_selected_vehicle(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_peripherals_info_from_selected_vehicle_result, unknown, get_peripherals_info_from_selected_vehicle_result, readonly unknown[]>;
}

export function get_peripherals_info_from_selected_vehicle_mutation_options(
  opts: MutationOptionsFactory<get_peripherals_info_from_selected_vehicle_params, get_peripherals_info_from_selected_vehicle_result>
) {
  return {
    mutationKey: ["get_peripherals_info_from_selected_vehicle"] as const,
    mutationFn: (params: get_peripherals_info_from_selected_vehicle_params) => api.get_peripherals_info_from_selected_vehicle(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_peripherals_info_from_selected_vehicle_result, unknown, get_peripherals_info_from_selected_vehicle_params>;
}

export function get_report_request_state_query_options(
  opts: QueryOptionsFactory<get_report_request_state_params, get_report_request_state_result>
) {
  return {
    queryKey: ["get_report_request_state", opts.params] as const,
    queryFn: () => api.get_report_request_state(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_report_request_state_result, unknown, get_report_request_state_result, readonly unknown[]>;
}

export function get_report_request_state_mutation_options(
  opts: MutationOptionsFactory<get_report_request_state_params, get_report_request_state_result>
) {
  return {
    mutationKey: ["get_report_request_state"] as const,
    mutationFn: (params: get_report_request_state_params) => api.get_report_request_state(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_report_request_state_result, unknown, get_report_request_state_params>;
}

export function get_schedule_service_query_options(
  opts: QueryOptionsFactory<get_schedule_service_params, get_schedule_service_result>
) {
  return {
    queryKey: ["get_schedule_service", opts.params] as const,
    queryFn: () => api.get_schedule_service(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_schedule_service_result, unknown, get_schedule_service_result, readonly unknown[]>;
}

export function get_schedule_service_mutation_options(
  opts: MutationOptionsFactory<get_schedule_service_params, get_schedule_service_result>
) {
  return {
    mutationKey: ["get_schedule_service"] as const,
    mutationFn: (params: get_schedule_service_params) => api.get_schedule_service(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_schedule_service_result, unknown, get_schedule_service_params>;
}

export function get_stations_realtime_data_query_options(
  opts: QueryOptionsFactory<get_stations_realtime_data_params, get_stations_realtime_data_result>
) {
  return {
    queryKey: ["get_stations_realtime_data", opts.params] as const,
    queryFn: () => api.get_stations_realtime_data(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stations_realtime_data_result, unknown, get_stations_realtime_data_result, readonly unknown[]>;
}

export function get_stations_realtime_data_mutation_options(
  opts: MutationOptionsFactory<get_stations_realtime_data_params, get_stations_realtime_data_result>
) {
  return {
    mutationKey: ["get_stations_realtime_data"] as const,
    mutationFn: (params: get_stations_realtime_data_params) => api.get_stations_realtime_data(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stations_realtime_data_result, unknown, get_stations_realtime_data_params>;
}

export function get_stations_realtime_data_v2_query_options(
  opts: QueryOptionsFactory<get_stations_realtime_data_v2_params, get_stations_realtime_data_v2_result>
) {
  return {
    queryKey: ["get_stations_realtime_data_v2", opts.params] as const,
    queryFn: () => api.get_stations_realtime_data_v2(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stations_realtime_data_v2_result, unknown, get_stations_realtime_data_v2_result, readonly unknown[]>;
}

export function get_stations_realtime_data_v2_mutation_options(
  opts: MutationOptionsFactory<get_stations_realtime_data_v2_params, get_stations_realtime_data_v2_result>
) {
  return {
    mutationKey: ["get_stations_realtime_data_v2"] as const,
    mutationFn: (params: get_stations_realtime_data_v2_params) => api.get_stations_realtime_data_v2(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stations_realtime_data_v2_result, unknown, get_stations_realtime_data_v2_params>;
}

export function get_stop_list_query_options(
  opts: QueryOptionsFactory<get_stop_list_params, get_stop_list_result>
) {
  return {
    queryKey: ["get_stop_list", opts.params] as const,
    queryFn: () => api.get_stop_list(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_list_result, unknown, get_stop_list_result, readonly unknown[]>;
}

export function get_stop_list_mutation_options(
  opts: MutationOptionsFactory<get_stop_list_params, get_stop_list_result>
) {
  return {
    mutationKey: ["get_stop_list"] as const,
    mutationFn: (params: get_stop_list_params) => api.get_stop_list(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_list_result, unknown, get_stop_list_params>;
}

export function get_stop_panel_companies_query_options(
  opts: QueryOptionsFactory<get_stop_panel_companies_params, get_stop_panel_companies_result>
) {
  return {
    queryKey: ["get_stop_panel_companies", opts.params] as const,
    queryFn: () => api.get_stop_panel_companies(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_companies_result, unknown, get_stop_panel_companies_result, readonly unknown[]>;
}

export function get_stop_panel_companies_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_companies_params, get_stop_panel_companies_result>
) {
  return {
    mutationKey: ["get_stop_panel_companies"] as const,
    mutationFn: (params: get_stop_panel_companies_params) => api.get_stop_panel_companies(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_companies_result, unknown, get_stop_panel_companies_params>;
}

export function get_stop_panel_components_query_options(
  opts: QueryOptionsFactory<get_stop_panel_components_params, get_stop_panel_components_result>
) {
  return {
    queryKey: ["get_stop_panel_components", opts.params] as const,
    queryFn: () => api.get_stop_panel_components(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_components_result, unknown, get_stop_panel_components_result, readonly unknown[]>;
}

export function get_stop_panel_components_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_components_params, get_stop_panel_components_result>
) {
  return {
    mutationKey: ["get_stop_panel_components"] as const,
    mutationFn: (params: get_stop_panel_components_params) => api.get_stop_panel_components(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_components_result, unknown, get_stop_panel_components_params>;
}

export function get_stop_panel_data_query_options(
  opts: QueryOptionsFactory<get_stop_panel_data_params, get_stop_panel_data_result>
) {
  return {
    queryKey: ["get_stop_panel_data", opts.params] as const,
    queryFn: () => api.get_stop_panel_data(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_data_result, unknown, get_stop_panel_data_result, readonly unknown[]>;
}

export function get_stop_panel_data_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_data_params, get_stop_panel_data_result>
) {
  return {
    mutationKey: ["get_stop_panel_data"] as const,
    mutationFn: (params: get_stop_panel_data_params) => api.get_stop_panel_data(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_data_result, unknown, get_stop_panel_data_params>;
}

export function get_stop_panel_data_2_query_options(
  opts: QueryOptionsFactory<get_stop_panel_data_2_params, get_stop_panel_data_2_result>
) {
  return {
    queryKey: ["get_stop_panel_data_2", opts.params] as const,
    queryFn: () => api.get_stop_panel_data_2(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_data_2_result, unknown, get_stop_panel_data_2_result, readonly unknown[]>;
}

export function get_stop_panel_data_2_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_data_2_params, get_stop_panel_data_2_result>
) {
  return {
    mutationKey: ["get_stop_panel_data_2"] as const,
    mutationFn: (params: get_stop_panel_data_2_params) => api.get_stop_panel_data_2(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_data_2_result, unknown, get_stop_panel_data_2_params>;
}

export function get_stop_panel_data_2_backup_query_options(
  opts: QueryOptionsFactory<get_stop_panel_data_2_backup_params, get_stop_panel_data_2_backup_result>
) {
  return {
    queryKey: ["get_stop_panel_data_2_backup", opts.params] as const,
    queryFn: () => api.get_stop_panel_data_2_backup(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_data_2_backup_result, unknown, get_stop_panel_data_2_backup_result, readonly unknown[]>;
}

export function get_stop_panel_data_2_backup_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_data_2_backup_params, get_stop_panel_data_2_backup_result>
) {
  return {
    mutationKey: ["get_stop_panel_data_2_backup"] as const,
    mutationFn: (params: get_stop_panel_data_2_backup_params) => api.get_stop_panel_data_2_backup(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_data_2_backup_result, unknown, get_stop_panel_data_2_backup_params>;
}

export function get_stop_panel_data_test_query_options(
  opts: QueryOptionsFactory<get_stop_panel_data_test_params, get_stop_panel_data_test_result>
) {
  return {
    queryKey: ["get_stop_panel_data_test", opts.params] as const,
    queryFn: () => api.get_stop_panel_data_test(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_data_test_result, unknown, get_stop_panel_data_test_result, readonly unknown[]>;
}

export function get_stop_panel_data_test_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_data_test_params, get_stop_panel_data_test_result>
) {
  return {
    mutationKey: ["get_stop_panel_data_test"] as const,
    mutationFn: (params: get_stop_panel_data_test_params) => api.get_stop_panel_data_test(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_data_test_result, unknown, get_stop_panel_data_test_params>;
}

export function get_stop_panel_data_tmp_query_options(
  opts: QueryOptionsFactory<get_stop_panel_data_tmp_params, get_stop_panel_data_tmp_result>
) {
  return {
    queryKey: ["get_stop_panel_data_tmp", opts.params] as const,
    queryFn: () => api.get_stop_panel_data_tmp(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_data_tmp_result, unknown, get_stop_panel_data_tmp_result, readonly unknown[]>;
}

export function get_stop_panel_data_tmp_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_data_tmp_params, get_stop_panel_data_tmp_result>
) {
  return {
    mutationKey: ["get_stop_panel_data_tmp"] as const,
    mutationFn: (params: get_stop_panel_data_tmp_params) => api.get_stop_panel_data_tmp(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_data_tmp_result, unknown, get_stop_panel_data_tmp_params>;
}

export function get_stop_panel_errors_query_options(
  opts: QueryOptionsFactory<get_stop_panel_errors_params, get_stop_panel_errors_result>
) {
  return {
    queryKey: ["get_stop_panel_errors", opts.params] as const,
    queryFn: () => api.get_stop_panel_errors(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_errors_result, unknown, get_stop_panel_errors_result, readonly unknown[]>;
}

export function get_stop_panel_errors_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_errors_params, get_stop_panel_errors_result>
) {
  return {
    mutationKey: ["get_stop_panel_errors"] as const,
    mutationFn: (params: get_stop_panel_errors_params) => api.get_stop_panel_errors(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_errors_result, unknown, get_stop_panel_errors_params>;
}

export function get_stop_panel_layouts_query_options(
  opts: QueryOptionsFactory<get_stop_panel_layouts_params, get_stop_panel_layouts_result>
) {
  return {
    queryKey: ["get_stop_panel_layouts", opts.params] as const,
    queryFn: () => api.get_stop_panel_layouts(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_layouts_result, unknown, get_stop_panel_layouts_result, readonly unknown[]>;
}

export function get_stop_panel_layouts_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_layouts_params, get_stop_panel_layouts_result>
) {
  return {
    mutationKey: ["get_stop_panel_layouts"] as const,
    mutationFn: (params: get_stop_panel_layouts_params) => api.get_stop_panel_layouts(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_layouts_result, unknown, get_stop_panel_layouts_params>;
}

export function get_stop_panel_models_query_options(
  opts: QueryOptionsFactory<get_stop_panel_models_params, get_stop_panel_models_result>
) {
  return {
    queryKey: ["get_stop_panel_models", opts.params] as const,
    queryFn: () => api.get_stop_panel_models(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_models_result, unknown, get_stop_panel_models_result, readonly unknown[]>;
}

export function get_stop_panel_models_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_models_params, get_stop_panel_models_result>
) {
  return {
    mutationKey: ["get_stop_panel_models"] as const,
    mutationFn: (params: get_stop_panel_models_params) => api.get_stop_panel_models(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_models_result, unknown, get_stop_panel_models_params>;
}

export function get_stop_panel_schedule_query_options(
  opts: QueryOptionsFactory<get_stop_panel_schedule_params, get_stop_panel_schedule_result>
) {
  return {
    queryKey: ["get_stop_panel_schedule", opts.params] as const,
    queryFn: () => api.get_stop_panel_schedule(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panel_schedule_result, unknown, get_stop_panel_schedule_result, readonly unknown[]>;
}

export function get_stop_panel_schedule_mutation_options(
  opts: MutationOptionsFactory<get_stop_panel_schedule_params, get_stop_panel_schedule_result>
) {
  return {
    mutationKey: ["get_stop_panel_schedule"] as const,
    mutationFn: (params: get_stop_panel_schedule_params) => api.get_stop_panel_schedule(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panel_schedule_result, unknown, get_stop_panel_schedule_params>;
}

export function get_stop_panels_query_options(
  opts: QueryOptionsFactory<get_stop_panels_params, get_stop_panels_result>
) {
  return {
    queryKey: ["get_stop_panels", opts.params] as const,
    queryFn: () => api.get_stop_panels(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stop_panels_result, unknown, get_stop_panels_result, readonly unknown[]>;
}

export function get_stop_panels_mutation_options(
  opts: MutationOptionsFactory<get_stop_panels_params, get_stop_panels_result>
) {
  return {
    mutationKey: ["get_stop_panels"] as const,
    mutationFn: (params: get_stop_panels_params) => api.get_stop_panels(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stop_panels_result, unknown, get_stop_panels_params>;
}

export function get_stops_query_options(
  opts: QueryOptionsFactory<get_stops_params, get_stops_result>
) {
  return {
    queryKey: ["get_stops", opts.params] as const,
    queryFn: () => api.get_stops(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_stops_result, unknown, get_stops_result, readonly unknown[]>;
}

export function get_stops_mutation_options(
  opts: MutationOptionsFactory<get_stops_params, get_stops_result>
) {
  return {
    mutationKey: ["get_stops"] as const,
    mutationFn: (params: get_stops_params) => api.get_stops(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_stops_result, unknown, get_stops_params>;
}

export function get_update_target_def_query_options(
  opts: QueryOptionsFactory<get_update_target_def_params, get_update_target_def_result>
) {
  return {
    queryKey: ["get_update_target_def", opts.params] as const,
    queryFn: () => api.get_update_target_def(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_update_target_def_result, unknown, get_update_target_def_result, readonly unknown[]>;
}

export function get_update_target_def_mutation_options(
  opts: MutationOptionsFactory<get_update_target_def_params, get_update_target_def_result>
) {
  return {
    mutationKey: ["get_update_target_def"] as const,
    mutationFn: (params: get_update_target_def_params) => api.get_update_target_def(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_update_target_def_result, unknown, get_update_target_def_params>;
}

export function get_update_versions_summaries_query_options(
  opts: QueryOptionsFactory<get_update_versions_summaries_params, get_update_versions_summaries_result>
) {
  return {
    queryKey: ["get_update_versions_summaries", opts.params] as const,
    queryFn: () => api.get_update_versions_summaries(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_update_versions_summaries_result, unknown, get_update_versions_summaries_result, readonly unknown[]>;
}

export function get_update_versions_summaries_mutation_options(
  opts: MutationOptionsFactory<get_update_versions_summaries_params, get_update_versions_summaries_result>
) {
  return {
    mutationKey: ["get_update_versions_summaries"] as const,
    mutationFn: (params: get_update_versions_summaries_params) => api.get_update_versions_summaries(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_update_versions_summaries_result, unknown, get_update_versions_summaries_params>;
}

export function get_update_versions_vehicles_query_options(
  opts: QueryOptionsFactory<get_update_versions_vehicles_params, get_update_versions_vehicles_result>
) {
  return {
    queryKey: ["get_update_versions_vehicles", opts.params] as const,
    queryFn: () => api.get_update_versions_vehicles(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_update_versions_vehicles_result, unknown, get_update_versions_vehicles_result, readonly unknown[]>;
}

export function get_update_versions_vehicles_mutation_options(
  opts: MutationOptionsFactory<get_update_versions_vehicles_params, get_update_versions_vehicles_result>
) {
  return {
    mutationKey: ["get_update_versions_vehicles"] as const,
    mutationFn: (params: get_update_versions_vehicles_params) => api.get_update_versions_vehicles(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_update_versions_vehicles_result, unknown, get_update_versions_vehicles_params>;
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

export function get_user_by_id_mutation_options(
  opts: MutationOptionsFactory<get_user_by_id_params, get_user_by_id_result>
) {
  return {
    mutationKey: ["get_user_by_id"] as const,
    mutationFn: (params: get_user_by_id_params) => api.get_user_by_id(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_user_by_id_result, unknown, get_user_by_id_params>;
}

export function get_user_capabilities_query_options(
  opts: QueryOptionsFactory<get_user_capabilities_params, get_user_capabilities_result>
) {
  return {
    queryKey: ["get_user_capabilities", opts.params] as const,
    queryFn: () => api.get_user_capabilities(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_user_capabilities_result, unknown, get_user_capabilities_result, readonly unknown[]>;
}

export function get_user_capabilities_mutation_options(
  opts: MutationOptionsFactory<get_user_capabilities_params, get_user_capabilities_result>
) {
  return {
    mutationKey: ["get_user_capabilities"] as const,
    mutationFn: (params: get_user_capabilities_params) => api.get_user_capabilities(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_user_capabilities_result, unknown, get_user_capabilities_params>;
}

export function get_users_query_options(
  opts: QueryOptionsFactory<get_users_params, get_users_result>
) {
  return {
    queryKey: ["get_users", opts.params] as const,
    queryFn: () => api.get_users(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_users_result, unknown, get_users_result, readonly unknown[]>;
}

export function get_users_mutation_options(
  opts: MutationOptionsFactory<get_users_params, get_users_result>
) {
  return {
    mutationKey: ["get_users"] as const,
    mutationFn: (params: get_users_params) => api.get_users(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_users_result, unknown, get_users_params>;
}

export function get_vehicle_conf_types_query_options(
  opts: QueryOptionsFactory<get_vehicle_conf_types_params, get_vehicle_conf_types_result>
) {
  return {
    queryKey: ["get_vehicle_conf_types", opts.params] as const,
    queryFn: () => api.get_vehicle_conf_types(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_conf_types_result, unknown, get_vehicle_conf_types_result, readonly unknown[]>;
}

export function get_vehicle_conf_types_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_conf_types_params, get_vehicle_conf_types_result>
) {
  return {
    mutationKey: ["get_vehicle_conf_types"] as const,
    mutationFn: (params: get_vehicle_conf_types_params) => api.get_vehicle_conf_types(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_conf_types_result, unknown, get_vehicle_conf_types_params>;
}

export function get_vehicle_configurations_query_options(
  opts: QueryOptionsFactory<get_vehicle_configurations_params, get_vehicle_configurations_result>
) {
  return {
    queryKey: ["get_vehicle_configurations", opts.params] as const,
    queryFn: () => api.get_vehicle_configurations(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_configurations_result, unknown, get_vehicle_configurations_result, readonly unknown[]>;
}

export function get_vehicle_configurations_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_configurations_params, get_vehicle_configurations_result>
) {
  return {
    mutationKey: ["get_vehicle_configurations"] as const,
    mutationFn: (params: get_vehicle_configurations_params) => api.get_vehicle_configurations(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_configurations_result, unknown, get_vehicle_configurations_params>;
}

export function get_vehicle_drivers_history_query_options(
  opts: QueryOptionsFactory<get_vehicle_drivers_history_params, get_vehicle_drivers_history_result>
) {
  return {
    queryKey: ["get_vehicle_drivers_history", opts.params] as const,
    queryFn: () => api.get_vehicle_drivers_history(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_drivers_history_result, unknown, get_vehicle_drivers_history_result, readonly unknown[]>;
}

export function get_vehicle_drivers_history_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_drivers_history_params, get_vehicle_drivers_history_result>
) {
  return {
    mutationKey: ["get_vehicle_drivers_history"] as const,
    mutationFn: (params: get_vehicle_drivers_history_params) => api.get_vehicle_drivers_history(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_drivers_history_result, unknown, get_vehicle_drivers_history_params>;
}

export function get_vehicle_errors_history_query_options(
  opts: QueryOptionsFactory<get_vehicle_errors_history_params, get_vehicle_errors_history_result>
) {
  return {
    queryKey: ["get_vehicle_errors_history", opts.params] as const,
    queryFn: () => api.get_vehicle_errors_history(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_errors_history_result, unknown, get_vehicle_errors_history_result, readonly unknown[]>;
}

export function get_vehicle_errors_history_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_errors_history_params, get_vehicle_errors_history_result>
) {
  return {
    mutationKey: ["get_vehicle_errors_history"] as const,
    mutationFn: (params: get_vehicle_errors_history_params) => api.get_vehicle_errors_history(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_errors_history_result, unknown, get_vehicle_errors_history_params>;
}

export function get_vehicle_errors_history_vlv20240524_query_options(
  opts: QueryOptionsFactory<get_vehicle_errors_history_vlv20240524_params, get_vehicle_errors_history_vlv20240524_result>
) {
  return {
    queryKey: ["get_vehicle_errors_history_vlv20240524", opts.params] as const,
    queryFn: () => api.get_vehicle_errors_history_vlv20240524(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_errors_history_vlv20240524_result, unknown, get_vehicle_errors_history_vlv20240524_result, readonly unknown[]>;
}

export function get_vehicle_errors_history_vlv20240524_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_errors_history_vlv20240524_params, get_vehicle_errors_history_vlv20240524_result>
) {
  return {
    mutationKey: ["get_vehicle_errors_history_vlv20240524"] as const,
    mutationFn: (params: get_vehicle_errors_history_vlv20240524_params) => api.get_vehicle_errors_history_vlv20240524(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_errors_history_vlv20240524_result, unknown, get_vehicle_errors_history_vlv20240524_params>;
}

export function get_vehicle_online_state_query_options(
  opts: QueryOptionsFactory<get_vehicle_online_state_params, get_vehicle_online_state_result>
) {
  return {
    queryKey: ["get_vehicle_online_state", opts.params] as const,
    queryFn: () => api.get_vehicle_online_state(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_online_state_result, unknown, get_vehicle_online_state_result, readonly unknown[]>;
}

export function get_vehicle_online_state_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_online_state_params, get_vehicle_online_state_result>
) {
  return {
    mutationKey: ["get_vehicle_online_state"] as const,
    mutationFn: (params: get_vehicle_online_state_params) => api.get_vehicle_online_state(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_online_state_result, unknown, get_vehicle_online_state_params>;
}

export function get_vehicle_peripheral_names_query_options(
  opts: QueryOptionsFactory<get_vehicle_peripheral_names_params, get_vehicle_peripheral_names_result>
) {
  return {
    queryKey: ["get_vehicle_peripheral_names", opts.params] as const,
    queryFn: () => api.get_vehicle_peripheral_names(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_peripheral_names_result, unknown, get_vehicle_peripheral_names_result, readonly unknown[]>;
}

export function get_vehicle_peripheral_names_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_peripheral_names_params, get_vehicle_peripheral_names_result>
) {
  return {
    mutationKey: ["get_vehicle_peripheral_names"] as const,
    mutationFn: (params: get_vehicle_peripheral_names_params) => api.get_vehicle_peripheral_names(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_peripheral_names_result, unknown, get_vehicle_peripheral_names_params>;
}

export function get_vehicle_peripheral_types_query_options(
  opts: QueryOptionsFactory<get_vehicle_peripheral_types_params, get_vehicle_peripheral_types_result>
) {
  return {
    queryKey: ["get_vehicle_peripheral_types", opts.params] as const,
    queryFn: () => api.get_vehicle_peripheral_types(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_peripheral_types_result, unknown, get_vehicle_peripheral_types_result, readonly unknown[]>;
}

export function get_vehicle_peripheral_types_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_peripheral_types_params, get_vehicle_peripheral_types_result>
) {
  return {
    mutationKey: ["get_vehicle_peripheral_types"] as const,
    mutationFn: (params: get_vehicle_peripheral_types_params) => api.get_vehicle_peripheral_types(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_peripheral_types_result, unknown, get_vehicle_peripheral_types_params>;
}

export function get_vehicle_peripherals_query_options(
  opts: QueryOptionsFactory<get_vehicle_peripherals_params, get_vehicle_peripherals_result>
) {
  return {
    queryKey: ["get_vehicle_peripherals", opts.params] as const,
    queryFn: () => api.get_vehicle_peripherals(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_peripherals_result, unknown, get_vehicle_peripherals_result, readonly unknown[]>;
}

export function get_vehicle_peripherals_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_peripherals_params, get_vehicle_peripherals_result>
) {
  return {
    mutationKey: ["get_vehicle_peripherals"] as const,
    mutationFn: (params: get_vehicle_peripherals_params) => api.get_vehicle_peripherals(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_peripherals_result, unknown, get_vehicle_peripherals_params>;
}

export function get_vehicle_peripherals_1_query_options(
  opts: QueryOptionsFactory<get_vehicle_peripherals_1_params, get_vehicle_peripherals_1_result>
) {
  return {
    queryKey: ["get_vehicle_peripherals_1", opts.params] as const,
    queryFn: () => api.get_vehicle_peripherals_1(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_peripherals_1_result, unknown, get_vehicle_peripherals_1_result, readonly unknown[]>;
}

export function get_vehicle_peripherals_1_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_peripherals_1_params, get_vehicle_peripherals_1_result>
) {
  return {
    mutationKey: ["get_vehicle_peripherals_1"] as const,
    mutationFn: (params: get_vehicle_peripherals_1_params) => api.get_vehicle_peripherals_1(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_peripherals_1_result, unknown, get_vehicle_peripherals_1_params>;
}

export function get_vehicle_states_and_versions_query_options(
  opts: QueryOptionsFactory<get_vehicle_states_and_versions_params, get_vehicle_states_and_versions_result>
) {
  return {
    queryKey: ["get_vehicle_states_and_versions", opts.params] as const,
    queryFn: () => api.get_vehicle_states_and_versions(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_states_and_versions_result, unknown, get_vehicle_states_and_versions_result, readonly unknown[]>;
}

export function get_vehicle_states_and_versions_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_states_and_versions_params, get_vehicle_states_and_versions_result>
) {
  return {
    mutationKey: ["get_vehicle_states_and_versions"] as const,
    mutationFn: (params: get_vehicle_states_and_versions_params) => api.get_vehicle_states_and_versions(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_states_and_versions_result, unknown, get_vehicle_states_and_versions_params>;
}

export function get_vehicle_update_request_query_options(
  opts: QueryOptionsFactory<get_vehicle_update_request_params, get_vehicle_update_request_result>
) {
  return {
    queryKey: ["get_vehicle_update_request", opts.params] as const,
    queryFn: () => api.get_vehicle_update_request(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_update_request_result, unknown, get_vehicle_update_request_result, readonly unknown[]>;
}

export function get_vehicle_update_request_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_update_request_params, get_vehicle_update_request_result>
) {
  return {
    mutationKey: ["get_vehicle_update_request"] as const,
    mutationFn: (params: get_vehicle_update_request_params) => api.get_vehicle_update_request(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_update_request_result, unknown, get_vehicle_update_request_params>;
}

export function get_vehicle_updates_ui_lock_requests_query_options(
  opts: QueryOptionsFactory<get_vehicle_updates_ui_lock_requests_params, get_vehicle_updates_ui_lock_requests_result>
) {
  return {
    queryKey: ["get_vehicle_updates_ui_lock_requests", opts.params] as const,
    queryFn: () => api.get_vehicle_updates_ui_lock_requests(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicle_updates_ui_lock_requests_result, unknown, get_vehicle_updates_ui_lock_requests_result, readonly unknown[]>;
}

export function get_vehicle_updates_ui_lock_requests_mutation_options(
  opts: MutationOptionsFactory<get_vehicle_updates_ui_lock_requests_params, get_vehicle_updates_ui_lock_requests_result>
) {
  return {
    mutationKey: ["get_vehicle_updates_ui_lock_requests"] as const,
    mutationFn: (params: get_vehicle_updates_ui_lock_requests_params) => api.get_vehicle_updates_ui_lock_requests(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicle_updates_ui_lock_requests_result, unknown, get_vehicle_updates_ui_lock_requests_params>;
}

export function get_vehicles_query_options(
  opts: QueryOptionsFactory<get_vehicles_params, get_vehicles_result>
) {
  return {
    queryKey: ["get_vehicles", opts.params] as const,
    queryFn: () => api.get_vehicles(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicles_result, unknown, get_vehicles_result, readonly unknown[]>;
}

export function get_vehicles_mutation_options(
  opts: MutationOptionsFactory<get_vehicles_params, get_vehicles_result>
) {
  return {
    mutationKey: ["get_vehicles"] as const,
    mutationFn: (params: get_vehicles_params) => api.get_vehicles(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicles_result, unknown, get_vehicles_params>;
}

export function get_vehicles_actual_state_query_options(
  opts: QueryOptionsFactory<get_vehicles_actual_state_params, get_vehicles_actual_state_result>
) {
  return {
    queryKey: ["get_vehicles_actual_state", opts.params] as const,
    queryFn: () => api.get_vehicles_actual_state(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicles_actual_state_result, unknown, get_vehicles_actual_state_result, readonly unknown[]>;
}

export function get_vehicles_actual_state_mutation_options(
  opts: MutationOptionsFactory<get_vehicles_actual_state_params, get_vehicles_actual_state_result>
) {
  return {
    mutationKey: ["get_vehicles_actual_state"] as const,
    mutationFn: (params: get_vehicles_actual_state_params) => api.get_vehicles_actual_state(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicles_actual_state_result, unknown, get_vehicles_actual_state_params>;
}

export function get_vehicles_actual_state__query_options(
  opts: QueryOptionsFactory<get_vehicles_actual_state__params, get_vehicles_actual_state__result>
) {
  return {
    queryKey: ["get_vehicles_actual_state_", opts.params] as const,
    queryFn: () => api.get_vehicles_actual_state_(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicles_actual_state__result, unknown, get_vehicles_actual_state__result, readonly unknown[]>;
}

export function get_vehicles_actual_state__mutation_options(
  opts: MutationOptionsFactory<get_vehicles_actual_state__params, get_vehicles_actual_state__result>
) {
  return {
    mutationKey: ["get_vehicles_actual_state_"] as const,
    mutationFn: (params: get_vehicles_actual_state__params) => api.get_vehicles_actual_state_(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicles_actual_state__result, unknown, get_vehicles_actual_state__params>;
}

export function get_vehicles_actual_state_2_query_options(
  opts: QueryOptionsFactory<get_vehicles_actual_state_2_params, get_vehicles_actual_state_2_result>
) {
  return {
    queryKey: ["get_vehicles_actual_state_2", opts.params] as const,
    queryFn: () => api.get_vehicles_actual_state_2(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicles_actual_state_2_result, unknown, get_vehicles_actual_state_2_result, readonly unknown[]>;
}

export function get_vehicles_actual_state_2_mutation_options(
  opts: MutationOptionsFactory<get_vehicles_actual_state_2_params, get_vehicles_actual_state_2_result>
) {
  return {
    mutationKey: ["get_vehicles_actual_state_2"] as const,
    mutationFn: (params: get_vehicles_actual_state_2_params) => api.get_vehicles_actual_state_2(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicles_actual_state_2_result, unknown, get_vehicles_actual_state_2_params>;
}

export function get_vehicles_actual_state_3_query_options(
  opts: QueryOptionsFactory<get_vehicles_actual_state_3_params, get_vehicles_actual_state_3_result>
) {
  return {
    queryKey: ["get_vehicles_actual_state_3", opts.params] as const,
    queryFn: () => api.get_vehicles_actual_state_3(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicles_actual_state_3_result, unknown, get_vehicles_actual_state_3_result, readonly unknown[]>;
}

export function get_vehicles_actual_state_3_mutation_options(
  opts: MutationOptionsFactory<get_vehicles_actual_state_3_params, get_vehicles_actual_state_3_result>
) {
  return {
    mutationKey: ["get_vehicles_actual_state_3"] as const,
    mutationFn: (params: get_vehicles_actual_state_3_params) => api.get_vehicles_actual_state_3(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicles_actual_state_3_result, unknown, get_vehicles_actual_state_3_params>;
}

export function get_vehicles_actual_state_4_query_options(
  opts: QueryOptionsFactory<get_vehicles_actual_state_4_params, get_vehicles_actual_state_4_result>
) {
  return {
    queryKey: ["get_vehicles_actual_state_4", opts.params] as const,
    queryFn: () => api.get_vehicles_actual_state_4(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_vehicles_actual_state_4_result, unknown, get_vehicles_actual_state_4_result, readonly unknown[]>;
}

export function get_vehicles_actual_state_4_mutation_options(
  opts: MutationOptionsFactory<get_vehicles_actual_state_4_params, get_vehicles_actual_state_4_result>
) {
  return {
    mutationKey: ["get_vehicles_actual_state_4"] as const,
    mutationFn: (params: get_vehicles_actual_state_4_params) => api.get_vehicles_actual_state_4(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_vehicles_actual_state_4_result, unknown, get_vehicles_actual_state_4_params>;
}

export function get_versions_from_all_vehicles_query_options(
  opts: QueryOptionsFactory<get_versions_from_all_vehicles_params, get_versions_from_all_vehicles_result>
) {
  return {
    queryKey: ["get_versions_from_all_vehicles", opts.params] as const,
    queryFn: () => api.get_versions_from_all_vehicles(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_versions_from_all_vehicles_result, unknown, get_versions_from_all_vehicles_result, readonly unknown[]>;
}

export function get_versions_from_all_vehicles_mutation_options(
  opts: MutationOptionsFactory<get_versions_from_all_vehicles_params, get_versions_from_all_vehicles_result>
) {
  return {
    mutationKey: ["get_versions_from_all_vehicles"] as const,
    mutationFn: (params: get_versions_from_all_vehicles_params) => api.get_versions_from_all_vehicles(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_versions_from_all_vehicles_result, unknown, get_versions_from_all_vehicles_params>;
}

export function get_versions_from_all_vehicles_with_peripherals_query_options(
  opts: QueryOptionsFactory<get_versions_from_all_vehicles_with_peripherals_params, get_versions_from_all_vehicles_with_peripherals_result>
) {
  return {
    queryKey: ["get_versions_from_all_vehicles_with_peripherals", opts.params] as const,
    queryFn: () => api.get_versions_from_all_vehicles_with_peripherals(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_versions_from_all_vehicles_with_peripherals_result, unknown, get_versions_from_all_vehicles_with_peripherals_result, readonly unknown[]>;
}

export function get_versions_from_all_vehicles_with_peripherals_mutation_options(
  opts: MutationOptionsFactory<get_versions_from_all_vehicles_with_peripherals_params, get_versions_from_all_vehicles_with_peripherals_result>
) {
  return {
    mutationKey: ["get_versions_from_all_vehicles_with_peripherals"] as const,
    mutationFn: (params: get_versions_from_all_vehicles_with_peripherals_params) => api.get_versions_from_all_vehicles_with_peripherals(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_versions_from_all_vehicles_with_peripherals_result, unknown, get_versions_from_all_vehicles_with_peripherals_params>;
}

export function get_versions_from_vehicle_histor_old_query_options(
  opts: QueryOptionsFactory<get_versions_from_vehicle_histor_old_params, get_versions_from_vehicle_histor_old_result>
) {
  return {
    queryKey: ["get_versions_from_vehicle_histor_old", opts.params] as const,
    queryFn: () => api.get_versions_from_vehicle_histor_old(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_versions_from_vehicle_histor_old_result, unknown, get_versions_from_vehicle_histor_old_result, readonly unknown[]>;
}

export function get_versions_from_vehicle_histor_old_mutation_options(
  opts: MutationOptionsFactory<get_versions_from_vehicle_histor_old_params, get_versions_from_vehicle_histor_old_result>
) {
  return {
    mutationKey: ["get_versions_from_vehicle_histor_old"] as const,
    mutationFn: (params: get_versions_from_vehicle_histor_old_params) => api.get_versions_from_vehicle_histor_old(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_versions_from_vehicle_histor_old_result, unknown, get_versions_from_vehicle_histor_old_params>;
}

export function get_versions_from_vehicle_history_query_options(
  opts: QueryOptionsFactory<get_versions_from_vehicle_history_params, get_versions_from_vehicle_history_result>
) {
  return {
    queryKey: ["get_versions_from_vehicle_history", opts.params] as const,
    queryFn: () => api.get_versions_from_vehicle_history(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<get_versions_from_vehicle_history_result, unknown, get_versions_from_vehicle_history_result, readonly unknown[]>;
}

export function get_versions_from_vehicle_history_mutation_options(
  opts: MutationOptionsFactory<get_versions_from_vehicle_history_params, get_versions_from_vehicle_history_result>
) {
  return {
    mutationKey: ["get_versions_from_vehicle_history"] as const,
    mutationFn: (params: get_versions_from_vehicle_history_params) => api.get_versions_from_vehicle_history(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<get_versions_from_vehicle_history_result, unknown, get_versions_from_vehicle_history_params>;
}

export function inactivate_auth_token_query_options(
  opts: QueryOptionsFactory<inactivate_auth_token_params, inactivate_auth_token_result>
) {
  return {
    queryKey: ["inactivate_auth_token", opts.params] as const,
    queryFn: () => api.inactivate_auth_token(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<inactivate_auth_token_result, unknown, inactivate_auth_token_result, readonly unknown[]>;
}

export function inactivate_auth_token_mutation_options(
  opts: MutationOptionsFactory<inactivate_auth_token_params, inactivate_auth_token_result>
) {
  return {
    mutationKey: ["inactivate_auth_token"] as const,
    mutationFn: (params: inactivate_auth_token_params) => api.inactivate_auth_token(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<inactivate_auth_token_result, unknown, inactivate_auth_token_params>;
}

export function lock_vehicle_updates_ui_query_options(
  opts: QueryOptionsFactory<lock_vehicle_updates_ui_params, lock_vehicle_updates_ui_result>
) {
  return {
    queryKey: ["lock_vehicle_updates_ui", opts.params] as const,
    queryFn: () => api.lock_vehicle_updates_ui(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<lock_vehicle_updates_ui_result, unknown, lock_vehicle_updates_ui_result, readonly unknown[]>;
}

export function lock_vehicle_updates_ui_mutation_options(
  opts: MutationOptionsFactory<lock_vehicle_updates_ui_params, lock_vehicle_updates_ui_result>
) {
  return {
    mutationKey: ["lock_vehicle_updates_ui"] as const,
    mutationFn: (params: lock_vehicle_updates_ui_params) => api.lock_vehicle_updates_ui(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<lock_vehicle_updates_ui_result, unknown, lock_vehicle_updates_ui_params>;
}

export function received_text_messages_accept_query_options(
  opts: QueryOptionsFactory<received_text_messages_accept_params, received_text_messages_accept_result>
) {
  return {
    queryKey: ["received_text_messages_accept", opts.params] as const,
    queryFn: () => api.received_text_messages_accept(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<received_text_messages_accept_result, unknown, received_text_messages_accept_result, readonly unknown[]>;
}

export function received_text_messages_accept_mutation_options(
  opts: MutationOptionsFactory<received_text_messages_accept_params, received_text_messages_accept_result>
) {
  return {
    mutationKey: ["received_text_messages_accept"] as const,
    mutationFn: (params: received_text_messages_accept_params) => api.received_text_messages_accept(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<received_text_messages_accept_result, unknown, received_text_messages_accept_params>;
}

export function received_text_messages_get_query_options(
  opts: QueryOptionsFactory<received_text_messages_get_params, received_text_messages_get_result>
) {
  return {
    queryKey: ["received_text_messages_get", opts.params] as const,
    queryFn: () => api.received_text_messages_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<received_text_messages_get_result, unknown, received_text_messages_get_result, readonly unknown[]>;
}

export function received_text_messages_get_mutation_options(
  opts: MutationOptionsFactory<received_text_messages_get_params, received_text_messages_get_result>
) {
  return {
    mutationKey: ["received_text_messages_get"] as const,
    mutationFn: (params: received_text_messages_get_params) => api.received_text_messages_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<received_text_messages_get_result, unknown, received_text_messages_get_params>;
}

export function received_text_messages_status_get_query_options(
  opts: QueryOptionsFactory<received_text_messages_status_get_params, received_text_messages_status_get_result>
) {
  return {
    queryKey: ["received_text_messages_status_get", opts.params] as const,
    queryFn: () => api.received_text_messages_status_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<received_text_messages_status_get_result, unknown, received_text_messages_status_get_result, readonly unknown[]>;
}

export function received_text_messages_status_get_mutation_options(
  opts: MutationOptionsFactory<received_text_messages_status_get_params, received_text_messages_status_get_result>
) {
  return {
    mutationKey: ["received_text_messages_status_get"] as const,
    mutationFn: (params: received_text_messages_status_get_params) => api.received_text_messages_status_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<received_text_messages_status_get_result, unknown, received_text_messages_status_get_params>;
}

export function received_text_messages_unaccept_query_options(
  opts: QueryOptionsFactory<received_text_messages_unaccept_params, received_text_messages_unaccept_result>
) {
  return {
    queryKey: ["received_text_messages_unaccept", opts.params] as const,
    queryFn: () => api.received_text_messages_unaccept(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<received_text_messages_unaccept_result, unknown, received_text_messages_unaccept_result, readonly unknown[]>;
}

export function received_text_messages_unaccept_mutation_options(
  opts: MutationOptionsFactory<received_text_messages_unaccept_params, received_text_messages_unaccept_result>
) {
  return {
    mutationKey: ["received_text_messages_unaccept"] as const,
    mutationFn: (params: received_text_messages_unaccept_params) => api.received_text_messages_unaccept(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<received_text_messages_unaccept_result, unknown, received_text_messages_unaccept_params>;
}

export function register_stop_panel_query_options(
  opts: QueryOptionsFactory<register_stop_panel_params, register_stop_panel_result>
) {
  return {
    queryKey: ["register_stop_panel", opts.params] as const,
    queryFn: () => api.register_stop_panel(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<register_stop_panel_result, unknown, register_stop_panel_result, readonly unknown[]>;
}

export function register_stop_panel_mutation_options(
  opts: MutationOptionsFactory<register_stop_panel_params, register_stop_panel_result>
) {
  return {
    mutationKey: ["register_stop_panel"] as const,
    mutationFn: (params: register_stop_panel_params) => api.register_stop_panel(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<register_stop_panel_result, unknown, register_stop_panel_params>;
}

export function remove_stop_panel_from_company_query_options(
  opts: QueryOptionsFactory<remove_stop_panel_from_company_params, remove_stop_panel_from_company_result>
) {
  return {
    queryKey: ["remove_stop_panel_from_company", opts.params] as const,
    queryFn: () => api.remove_stop_panel_from_company(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<remove_stop_panel_from_company_result, unknown, remove_stop_panel_from_company_result, readonly unknown[]>;
}

export function remove_stop_panel_from_company_mutation_options(
  opts: MutationOptionsFactory<remove_stop_panel_from_company_params, remove_stop_panel_from_company_result>
) {
  return {
    mutationKey: ["remove_stop_panel_from_company"] as const,
    mutationFn: (params: remove_stop_panel_from_company_params) => api.remove_stop_panel_from_company(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<remove_stop_panel_from_company_result, unknown, remove_stop_panel_from_company_params>;
}

export function remove_vehicle_query_options(
  opts: QueryOptionsFactory<remove_vehicle_params, remove_vehicle_result>
) {
  return {
    queryKey: ["remove_vehicle", opts.params] as const,
    queryFn: () => api.remove_vehicle(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<remove_vehicle_result, unknown, remove_vehicle_result, readonly unknown[]>;
}

export function remove_vehicle_mutation_options(
  opts: MutationOptionsFactory<remove_vehicle_params, remove_vehicle_result>
) {
  return {
    mutationKey: ["remove_vehicle"] as const,
    mutationFn: (params: remove_vehicle_params) => api.remove_vehicle(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<remove_vehicle_result, unknown, remove_vehicle_params>;
}

export function reset_stop_panel_stop_query_options(
  opts: QueryOptionsFactory<reset_stop_panel_stop_params, reset_stop_panel_stop_result>
) {
  return {
    queryKey: ["reset_stop_panel_stop", opts.params] as const,
    queryFn: () => api.reset_stop_panel_stop(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<reset_stop_panel_stop_result, unknown, reset_stop_panel_stop_result, readonly unknown[]>;
}

export function reset_stop_panel_stop_mutation_options(
  opts: MutationOptionsFactory<reset_stop_panel_stop_params, reset_stop_panel_stop_result>
) {
  return {
    mutationKey: ["reset_stop_panel_stop"] as const,
    mutationFn: (params: reset_stop_panel_stop_params) => api.reset_stop_panel_stop(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<reset_stop_panel_stop_result, unknown, reset_stop_panel_stop_params>;
}

export function reset_user_password_query_options(
  opts: QueryOptionsFactory<reset_user_password_params, reset_user_password_result>
) {
  return {
    queryKey: ["reset_user_password", opts.params] as const,
    queryFn: () => api.reset_user_password(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<reset_user_password_result, unknown, reset_user_password_result, readonly unknown[]>;
}

export function reset_user_password_mutation_options(
  opts: MutationOptionsFactory<reset_user_password_params, reset_user_password_result>
) {
  return {
    mutationKey: ["reset_user_password"] as const,
    mutationFn: (params: reset_user_password_params) => api.reset_user_password(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<reset_user_password_result, unknown, reset_user_password_params>;
}

export function unlock_vehicle_updates_ui_query_options(
  opts: QueryOptionsFactory<unlock_vehicle_updates_ui_params, unlock_vehicle_updates_ui_result>
) {
  return {
    queryKey: ["unlock_vehicle_updates_ui", opts.params] as const,
    queryFn: () => api.unlock_vehicle_updates_ui(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<unlock_vehicle_updates_ui_result, unknown, unlock_vehicle_updates_ui_result, readonly unknown[]>;
}

export function unlock_vehicle_updates_ui_mutation_options(
  opts: MutationOptionsFactory<unlock_vehicle_updates_ui_params, unlock_vehicle_updates_ui_result>
) {
  return {
    mutationKey: ["unlock_vehicle_updates_ui"] as const,
    mutationFn: (params: unlock_vehicle_updates_ui_params) => api.unlock_vehicle_updates_ui(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<unlock_vehicle_updates_ui_result, unknown, unlock_vehicle_updates_ui_params>;
}

export function update_company_query_options(
  opts: QueryOptionsFactory<update_company_params, update_company_result>
) {
  return {
    queryKey: ["update_company", opts.params] as const,
    queryFn: () => api.update_company(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_company_result, unknown, update_company_result, readonly unknown[]>;
}

export function update_company_mutation_options(
  opts: MutationOptionsFactory<update_company_params, update_company_result>
) {
  return {
    mutationKey: ["update_company"] as const,
    mutationFn: (params: update_company_params) => api.update_company(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_company_result, unknown, update_company_params>;
}

export function update_company_section_query_options(
  opts: QueryOptionsFactory<update_company_section_params, update_company_section_result>
) {
  return {
    queryKey: ["update_company_section", opts.params] as const,
    queryFn: () => api.update_company_section(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_company_section_result, unknown, update_company_section_result, readonly unknown[]>;
}

export function update_company_section_mutation_options(
  opts: MutationOptionsFactory<update_company_section_params, update_company_section_result>
) {
  return {
    mutationKey: ["update_company_section"] as const,
    mutationFn: (params: update_company_section_params) => api.update_company_section(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_company_section_result, unknown, update_company_section_params>;
}

export function update_crossroad_query_options(
  opts: QueryOptionsFactory<update_crossroad_params, update_crossroad_result>
) {
  return {
    queryKey: ["update_crossroad", opts.params] as const,
    queryFn: () => api.update_crossroad(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_crossroad_result, unknown, update_crossroad_result, readonly unknown[]>;
}

export function update_crossroad_mutation_options(
  opts: MutationOptionsFactory<update_crossroad_params, update_crossroad_result>
) {
  return {
    mutationKey: ["update_crossroad"] as const,
    mutationFn: (params: update_crossroad_params) => api.update_crossroad(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_crossroad_result, unknown, update_crossroad_params>;
}

export function update_crossroad_branch_query_options(
  opts: QueryOptionsFactory<update_crossroad_branch_params, update_crossroad_branch_result>
) {
  return {
    queryKey: ["update_crossroad_branch", opts.params] as const,
    queryFn: () => api.update_crossroad_branch(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_crossroad_branch_result, unknown, update_crossroad_branch_result, readonly unknown[]>;
}

export function update_crossroad_branch_mutation_options(
  opts: MutationOptionsFactory<update_crossroad_branch_params, update_crossroad_branch_result>
) {
  return {
    mutationKey: ["update_crossroad_branch"] as const,
    mutationFn: (params: update_crossroad_branch_params) => api.update_crossroad_branch(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_crossroad_branch_result, unknown, update_crossroad_branch_params>;
}

export function update_crossroad_branch_checkin_point_query_options(
  opts: QueryOptionsFactory<update_crossroad_branch_checkin_point_params, update_crossroad_branch_checkin_point_result>
) {
  return {
    queryKey: ["update_crossroad_branch_checkin_point", opts.params] as const,
    queryFn: () => api.update_crossroad_branch_checkin_point(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_crossroad_branch_checkin_point_result, unknown, update_crossroad_branch_checkin_point_result, readonly unknown[]>;
}

export function update_crossroad_branch_checkin_point_mutation_options(
  opts: MutationOptionsFactory<update_crossroad_branch_checkin_point_params, update_crossroad_branch_checkin_point_result>
) {
  return {
    mutationKey: ["update_crossroad_branch_checkin_point"] as const,
    mutationFn: (params: update_crossroad_branch_checkin_point_params) => api.update_crossroad_branch_checkin_point(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_crossroad_branch_checkin_point_result, unknown, update_crossroad_branch_checkin_point_params>;
}

export function update_crossroad_branch_checkin_points_order_query_options(
  opts: QueryOptionsFactory<update_crossroad_branch_checkin_points_order_params, update_crossroad_branch_checkin_points_order_result>
) {
  return {
    queryKey: ["update_crossroad_branch_checkin_points_order", opts.params] as const,
    queryFn: () => api.update_crossroad_branch_checkin_points_order(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_crossroad_branch_checkin_points_order_result, unknown, update_crossroad_branch_checkin_points_order_result, readonly unknown[]>;
}

export function update_crossroad_branch_checkin_points_order_mutation_options(
  opts: MutationOptionsFactory<update_crossroad_branch_checkin_points_order_params, update_crossroad_branch_checkin_points_order_result>
) {
  return {
    mutationKey: ["update_crossroad_branch_checkin_points_order"] as const,
    mutationFn: (params: update_crossroad_branch_checkin_points_order_params) => api.update_crossroad_branch_checkin_points_order(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_crossroad_branch_checkin_points_order_result, unknown, update_crossroad_branch_checkin_points_order_params>;
}

export function update_crossroad_checkout_point_query_options(
  opts: QueryOptionsFactory<update_crossroad_checkout_point_params, update_crossroad_checkout_point_result>
) {
  return {
    queryKey: ["update_crossroad_checkout_point", opts.params] as const,
    queryFn: () => api.update_crossroad_checkout_point(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_crossroad_checkout_point_result, unknown, update_crossroad_checkout_point_result, readonly unknown[]>;
}

export function update_crossroad_checkout_point_mutation_options(
  opts: MutationOptionsFactory<update_crossroad_checkout_point_params, update_crossroad_checkout_point_result>
) {
  return {
    mutationKey: ["update_crossroad_checkout_point"] as const,
    mutationFn: (params: update_crossroad_checkout_point_params) => api.update_crossroad_checkout_point(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_crossroad_checkout_point_result, unknown, update_crossroad_checkout_point_params>;
}

export function update_crossroad_direction_query_options(
  opts: QueryOptionsFactory<update_crossroad_direction_params, update_crossroad_direction_result>
) {
  return {
    queryKey: ["update_crossroad_direction", opts.params] as const,
    queryFn: () => api.update_crossroad_direction(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_crossroad_direction_result, unknown, update_crossroad_direction_result, readonly unknown[]>;
}

export function update_crossroad_direction_mutation_options(
  opts: MutationOptionsFactory<update_crossroad_direction_params, update_crossroad_direction_result>
) {
  return {
    mutationKey: ["update_crossroad_direction"] as const,
    mutationFn: (params: update_crossroad_direction_params) => api.update_crossroad_direction(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_crossroad_direction_result, unknown, update_crossroad_direction_params>;
}

export function update_crossroad_geo_point_query_options(
  opts: QueryOptionsFactory<update_crossroad_geo_point_params, update_crossroad_geo_point_result>
) {
  return {
    queryKey: ["update_crossroad_geo_point", opts.params] as const,
    queryFn: () => api.update_crossroad_geo_point(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_crossroad_geo_point_result, unknown, update_crossroad_geo_point_result, readonly unknown[]>;
}

export function update_crossroad_geo_point_mutation_options(
  opts: MutationOptionsFactory<update_crossroad_geo_point_params, update_crossroad_geo_point_result>
) {
  return {
    mutationKey: ["update_crossroad_geo_point"] as const,
    mutationFn: (params: update_crossroad_geo_point_params) => api.update_crossroad_geo_point(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_crossroad_geo_point_result, unknown, update_crossroad_geo_point_params>;
}

export function update_stop_panel_query_options(
  opts: QueryOptionsFactory<update_stop_panel_params, update_stop_panel_result>
) {
  return {
    queryKey: ["update_stop_panel", opts.params] as const,
    queryFn: () => api.update_stop_panel(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_stop_panel_result, unknown, update_stop_panel_result, readonly unknown[]>;
}

export function update_stop_panel_mutation_options(
  opts: MutationOptionsFactory<update_stop_panel_params, update_stop_panel_result>
) {
  return {
    mutationKey: ["update_stop_panel"] as const,
    mutationFn: (params: update_stop_panel_params) => api.update_stop_panel(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_stop_panel_result, unknown, update_stop_panel_params>;
}

export function update_stop_panel_active_query_options(
  opts: QueryOptionsFactory<update_stop_panel_active_params, update_stop_panel_active_result>
) {
  return {
    queryKey: ["update_stop_panel_active", opts.params] as const,
    queryFn: () => api.update_stop_panel_active(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_stop_panel_active_result, unknown, update_stop_panel_active_result, readonly unknown[]>;
}

export function update_stop_panel_active_mutation_options(
  opts: MutationOptionsFactory<update_stop_panel_active_params, update_stop_panel_active_result>
) {
  return {
    mutationKey: ["update_stop_panel_active"] as const,
    mutationFn: (params: update_stop_panel_active_params) => api.update_stop_panel_active(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_stop_panel_active_result, unknown, update_stop_panel_active_params>;
}

export function update_stop_panel_components_query_options(
  opts: QueryOptionsFactory<update_stop_panel_components_params, update_stop_panel_components_result>
) {
  return {
    queryKey: ["update_stop_panel_components", opts.params] as const,
    queryFn: () => api.update_stop_panel_components(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_stop_panel_components_result, unknown, update_stop_panel_components_result, readonly unknown[]>;
}

export function update_stop_panel_components_mutation_options(
  opts: MutationOptionsFactory<update_stop_panel_components_params, update_stop_panel_components_result>
) {
  return {
    mutationKey: ["update_stop_panel_components"] as const,
    mutationFn: (params: update_stop_panel_components_params) => api.update_stop_panel_components(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_stop_panel_components_result, unknown, update_stop_panel_components_params>;
}

export function update_stop_panel_hw_state_query_options(
  opts: QueryOptionsFactory<update_stop_panel_hw_state_params, update_stop_panel_hw_state_result>
) {
  return {
    queryKey: ["update_stop_panel_hw_state", opts.params] as const,
    queryFn: () => api.update_stop_panel_hw_state(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_stop_panel_hw_state_result, unknown, update_stop_panel_hw_state_result, readonly unknown[]>;
}

export function update_stop_panel_hw_state_mutation_options(
  opts: MutationOptionsFactory<update_stop_panel_hw_state_params, update_stop_panel_hw_state_result>
) {
  return {
    mutationKey: ["update_stop_panel_hw_state"] as const,
    mutationFn: (params: update_stop_panel_hw_state_params) => api.update_stop_panel_hw_state(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_stop_panel_hw_state_result, unknown, update_stop_panel_hw_state_params>;
}

export function update_stop_panel_layout_query_options(
  opts: QueryOptionsFactory<update_stop_panel_layout_params, update_stop_panel_layout_result>
) {
  return {
    queryKey: ["update_stop_panel_layout", opts.params] as const,
    queryFn: () => api.update_stop_panel_layout(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_stop_panel_layout_result, unknown, update_stop_panel_layout_result, readonly unknown[]>;
}

export function update_stop_panel_layout_mutation_options(
  opts: MutationOptionsFactory<update_stop_panel_layout_params, update_stop_panel_layout_result>
) {
  return {
    mutationKey: ["update_stop_panel_layout"] as const,
    mutationFn: (params: update_stop_panel_layout_params) => api.update_stop_panel_layout(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_stop_panel_layout_result, unknown, update_stop_panel_layout_params>;
}

export function update_stop_panel_stop_query_options(
  opts: QueryOptionsFactory<update_stop_panel_stop_params, update_stop_panel_stop_result>
) {
  return {
    queryKey: ["update_stop_panel_stop", opts.params] as const,
    queryFn: () => api.update_stop_panel_stop(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_stop_panel_stop_result, unknown, update_stop_panel_stop_result, readonly unknown[]>;
}

export function update_stop_panel_stop_mutation_options(
  opts: MutationOptionsFactory<update_stop_panel_stop_params, update_stop_panel_stop_result>
) {
  return {
    mutationKey: ["update_stop_panel_stop"] as const,
    mutationFn: (params: update_stop_panel_stop_params) => api.update_stop_panel_stop(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_stop_panel_stop_result, unknown, update_stop_panel_stop_params>;
}

export function update_stop_panel_user_params_query_options(
  opts: QueryOptionsFactory<update_stop_panel_user_params_params, update_stop_panel_user_params_result>
) {
  return {
    queryKey: ["update_stop_panel_user_params", opts.params] as const,
    queryFn: () => api.update_stop_panel_user_params(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_stop_panel_user_params_result, unknown, update_stop_panel_user_params_result, readonly unknown[]>;
}

export function update_stop_panel_user_params_mutation_options(
  opts: MutationOptionsFactory<update_stop_panel_user_params_params, update_stop_panel_user_params_result>
) {
  return {
    mutationKey: ["update_stop_panel_user_params"] as const,
    mutationFn: (params: update_stop_panel_user_params_params) => api.update_stop_panel_user_params(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_stop_panel_user_params_result, unknown, update_stop_panel_user_params_params>;
}

export function update_user_query_options(
  opts: QueryOptionsFactory<update_user_params, update_user_result>
) {
  return {
    queryKey: ["update_user", opts.params] as const,
    queryFn: () => api.update_user(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_user_result, unknown, update_user_result, readonly unknown[]>;
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

export function update_user_password_query_options(
  opts: QueryOptionsFactory<update_user_password_params, update_user_password_result>
) {
  return {
    queryKey: ["update_user_password", opts.params] as const,
    queryFn: () => api.update_user_password(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<update_user_password_result, unknown, update_user_password_result, readonly unknown[]>;
}

export function update_user_password_mutation_options(
  opts: MutationOptionsFactory<update_user_password_params, update_user_password_result>
) {
  return {
    mutationKey: ["update_user_password"] as const,
    mutationFn: (params: update_user_password_params) => api.update_user_password(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<update_user_password_result, unknown, update_user_password_params>;
}

export function vehicle_config_apc_info_query_options(
  opts: QueryOptionsFactory<vehicle_config_apc_info_params, vehicle_config_apc_info_result>
) {
  return {
    queryKey: ["vehicle_config_apc_info", opts.params] as const,
    queryFn: () => api.vehicle_config_apc_info(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_config_apc_info_result, unknown, vehicle_config_apc_info_result, readonly unknown[]>;
}

export function vehicle_config_apc_info_mutation_options(
  opts: MutationOptionsFactory<vehicle_config_apc_info_params, vehicle_config_apc_info_result>
) {
  return {
    mutationKey: ["vehicle_config_apc_info"] as const,
    mutationFn: (params: vehicle_config_apc_info_params) => api.vehicle_config_apc_info(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_config_apc_info_result, unknown, vehicle_config_apc_info_params>;
}

export function vehicle_update_company_settings_query_options(
  opts: QueryOptionsFactory<vehicle_update_company_settings_params, vehicle_update_company_settings_result>
) {
  return {
    queryKey: ["vehicle_update_company_settings", opts.params] as const,
    queryFn: () => api.vehicle_update_company_settings(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_update_company_settings_result, unknown, vehicle_update_company_settings_result, readonly unknown[]>;
}

export function vehicle_update_company_settings_mutation_options(
  opts: MutationOptionsFactory<vehicle_update_company_settings_params, vehicle_update_company_settings_result>
) {
  return {
    mutationKey: ["vehicle_update_company_settings"] as const,
    mutationFn: (params: vehicle_update_company_settings_params) => api.vehicle_update_company_settings(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_update_company_settings_result, unknown, vehicle_update_company_settings_params>;
}

export function vehicle_update_imported_to_vehicle_query_options(
  opts: QueryOptionsFactory<vehicle_update_imported_to_vehicle_params, vehicle_update_imported_to_vehicle_result>
) {
  return {
    queryKey: ["vehicle_update_imported_to_vehicle", opts.params] as const,
    queryFn: () => api.vehicle_update_imported_to_vehicle(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_update_imported_to_vehicle_result, unknown, vehicle_update_imported_to_vehicle_result, readonly unknown[]>;
}

export function vehicle_update_imported_to_vehicle_mutation_options(
  opts: MutationOptionsFactory<vehicle_update_imported_to_vehicle_params, vehicle_update_imported_to_vehicle_result>
) {
  return {
    mutationKey: ["vehicle_update_imported_to_vehicle"] as const,
    mutationFn: (params: vehicle_update_imported_to_vehicle_params) => api.vehicle_update_imported_to_vehicle(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_update_imported_to_vehicle_result, unknown, vehicle_update_imported_to_vehicle_params>;
}

export function vehicle_update_request_delete_query_options(
  opts: QueryOptionsFactory<vehicle_update_request_delete_params, vehicle_update_request_delete_result>
) {
  return {
    queryKey: ["vehicle_update_request_delete", opts.params] as const,
    queryFn: () => api.vehicle_update_request_delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_update_request_delete_result, unknown, vehicle_update_request_delete_result, readonly unknown[]>;
}

export function vehicle_update_request_delete_mutation_options(
  opts: MutationOptionsFactory<vehicle_update_request_delete_params, vehicle_update_request_delete_result>
) {
  return {
    mutationKey: ["vehicle_update_request_delete"] as const,
    mutationFn: (params: vehicle_update_request_delete_params) => api.vehicle_update_request_delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_update_request_delete_result, unknown, vehicle_update_request_delete_params>;
}

export function vehicle_update_request_get_query_options(
  opts: QueryOptionsFactory<vehicle_update_request_get_params, vehicle_update_request_get_result>
) {
  return {
    queryKey: ["vehicle_update_request_get", opts.params] as const,
    queryFn: () => api.vehicle_update_request_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_update_request_get_result, unknown, vehicle_update_request_get_result, readonly unknown[]>;
}

export function vehicle_update_request_get_mutation_options(
  opts: MutationOptionsFactory<vehicle_update_request_get_params, vehicle_update_request_get_result>
) {
  return {
    mutationKey: ["vehicle_update_request_get"] as const,
    mutationFn: (params: vehicle_update_request_get_params) => api.vehicle_update_request_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_update_request_get_result, unknown, vehicle_update_request_get_params>;
}

export function vehicle_update_request_history_query_options(
  opts: QueryOptionsFactory<vehicle_update_request_history_params, vehicle_update_request_history_result>
) {
  return {
    queryKey: ["vehicle_update_request_history", opts.params] as const,
    queryFn: () => api.vehicle_update_request_history(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_update_request_history_result, unknown, vehicle_update_request_history_result, readonly unknown[]>;
}

export function vehicle_update_request_history_mutation_options(
  opts: MutationOptionsFactory<vehicle_update_request_history_params, vehicle_update_request_history_result>
) {
  return {
    mutationKey: ["vehicle_update_request_history"] as const,
    mutationFn: (params: vehicle_update_request_history_params) => api.vehicle_update_request_history(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_update_request_history_result, unknown, vehicle_update_request_history_params>;
}

export function vehicle_update_request_set_query_options(
  opts: QueryOptionsFactory<vehicle_update_request_set_params, vehicle_update_request_set_result>
) {
  return {
    queryKey: ["vehicle_update_request_set", opts.params] as const,
    queryFn: () => api.vehicle_update_request_set(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_update_request_set_result, unknown, vehicle_update_request_set_result, readonly unknown[]>;
}

export function vehicle_update_request_set_mutation_options(
  opts: MutationOptionsFactory<vehicle_update_request_set_params, vehicle_update_request_set_result>
) {
  return {
    mutationKey: ["vehicle_update_request_set"] as const,
    mutationFn: (params: vehicle_update_request_set_params) => api.vehicle_update_request_set(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_update_request_set_result, unknown, vehicle_update_request_set_params>;
}

export function vehicle_update_send_failure_notification_query_options(
  opts: QueryOptionsFactory<vehicle_update_send_failure_notification_params, vehicle_update_send_failure_notification_result>
) {
  return {
    queryKey: ["vehicle_update_send_failure_notification", opts.params] as const,
    queryFn: () => api.vehicle_update_send_failure_notification(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<vehicle_update_send_failure_notification_result, unknown, vehicle_update_send_failure_notification_result, readonly unknown[]>;
}

export function vehicle_update_send_failure_notification_mutation_options(
  opts: MutationOptionsFactory<vehicle_update_send_failure_notification_params, vehicle_update_send_failure_notification_result>
) {
  return {
    mutationKey: ["vehicle_update_send_failure_notification"] as const,
    mutationFn: (params: vehicle_update_send_failure_notification_params) => api.vehicle_update_send_failure_notification(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<vehicle_update_send_failure_notification_result, unknown, vehicle_update_send_failure_notification_params>;
}

export function web_portal_user_setting_create_query_options(
  opts: QueryOptionsFactory<web_portal_user_setting_create_params, web_portal_user_setting_create_result>
) {
  return {
    queryKey: ["web_portal_user_setting_create", opts.params] as const,
    queryFn: () => api.web_portal_user_setting_create(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<web_portal_user_setting_create_result, unknown, web_portal_user_setting_create_result, readonly unknown[]>;
}

export function web_portal_user_setting_create_mutation_options(
  opts: MutationOptionsFactory<web_portal_user_setting_create_params, web_portal_user_setting_create_result>
) {
  return {
    mutationKey: ["web_portal_user_setting_create"] as const,
    mutationFn: (params: web_portal_user_setting_create_params) => api.web_portal_user_setting_create(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<web_portal_user_setting_create_result, unknown, web_portal_user_setting_create_params>;
}

export function web_portal_user_setting_delete_query_options(
  opts: QueryOptionsFactory<web_portal_user_setting_delete_params, web_portal_user_setting_delete_result>
) {
  return {
    queryKey: ["web_portal_user_setting_delete", opts.params] as const,
    queryFn: () => api.web_portal_user_setting_delete(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<web_portal_user_setting_delete_result, unknown, web_portal_user_setting_delete_result, readonly unknown[]>;
}

export function web_portal_user_setting_delete_mutation_options(
  opts: MutationOptionsFactory<web_portal_user_setting_delete_params, web_portal_user_setting_delete_result>
) {
  return {
    mutationKey: ["web_portal_user_setting_delete"] as const,
    mutationFn: (params: web_portal_user_setting_delete_params) => api.web_portal_user_setting_delete(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<web_portal_user_setting_delete_result, unknown, web_portal_user_setting_delete_params>;
}

export function web_portal_user_setting_get_query_options(
  opts: QueryOptionsFactory<web_portal_user_setting_get_params, web_portal_user_setting_get_result>
) {
  return {
    queryKey: ["web_portal_user_setting_get", opts.params] as const,
    queryFn: () => api.web_portal_user_setting_get(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<web_portal_user_setting_get_result, unknown, web_portal_user_setting_get_result, readonly unknown[]>;
}

export function web_portal_user_setting_get_mutation_options(
  opts: MutationOptionsFactory<web_portal_user_setting_get_params, web_portal_user_setting_get_result>
) {
  return {
    mutationKey: ["web_portal_user_setting_get"] as const,
    mutationFn: (params: web_portal_user_setting_get_params) => api.web_portal_user_setting_get(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<web_portal_user_setting_get_result, unknown, web_portal_user_setting_get_params>;
}

export function web_portal_user_setting_update_query_options(
  opts: QueryOptionsFactory<web_portal_user_setting_update_params, web_portal_user_setting_update_result>
) {
  return {
    queryKey: ["web_portal_user_setting_update", opts.params] as const,
    queryFn: () => api.web_portal_user_setting_update(opts.params, opts.axios),
    ...(opts.query ?? {}),
  } satisfies UseQueryOptions<web_portal_user_setting_update_result, unknown, web_portal_user_setting_update_result, readonly unknown[]>;
}

export function web_portal_user_setting_update_mutation_options(
  opts: MutationOptionsFactory<web_portal_user_setting_update_params, web_portal_user_setting_update_result>
) {
  return {
    mutationKey: ["web_portal_user_setting_update"] as const,
    mutationFn: (params: web_portal_user_setting_update_params) => api.web_portal_user_setting_update(params, opts.axios),
    ...(opts.mutation ?? {}),
  } satisfies UseMutationOptions<web_portal_user_setting_update_result, unknown, web_portal_user_setting_update_params>;
}
