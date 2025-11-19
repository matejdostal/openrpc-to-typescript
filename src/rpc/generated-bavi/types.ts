/* AUTO-GENERATED: types.ts — do not edit by hand. */

export interface action_result_set {
  entity_id?: number;
  error_code?: number;
  error_message?: string;
}

export interface all_crossing_direction_set {
  crossing_id?: number;
  crossing_name?: string;
  crossing_number?: string;
  crossing_direction_id?: number;
  crossing_direction_name?: string;
  crossing_direction_number?: string;
  crossing_direction_description?: string;
  events_check_ok?: boolean;
}

export interface all_crossroad_direction_set {
  crossroad_id?: number;
  crossroad_name?: string;
  crossroad_number?: number;
  crossroad_identifier?: string;
  driver_type?: string;
  radio_identifier?: string;
  branch_id?: number;
  branch_identifier?: string;
  branch_name?: string;
  checkout_branch_id?: number;
  checkout_branch_identifier?: string;
  checkout_branch_name?: string;
  direction_id?: number;
  direction_identifier?: string;
  direction_name?: string;
  direction_tractions?: string[];
  direction_radio_params?: string;
  direction_check_ok?: boolean;
  direction_check_reasons?: string[];
}

export interface apc_installed_set {
  vid?: string;
  description?: string;
  traction?: string;
  installed?: string;
  count?: number;
}

export interface api_vehicle_data_set {
  vid?: string;
  state_dtime?: string;
  line_name?: string;
  line_direction?: string;
  destination_name?: string;
  last_stop_number?: string;
  last_stop_name?: string;
  current_stop_number?: string;
  current_stop_name?: string;
  current_stop_scheduled_departure?: string;
  gps_latitude?: number;
  gps_longitude?: number;
  time_difference?: {};
  connection_no?: number;
  door?: boolean;
  gps_course?: number;
  gps_speed?: number;
  on_station?: boolean;
}

export interface api_vehicle_eco_drive_set {
  vid?: string;
  state_dtime?: string;
  driver?: string;
  service?: string;
  connection_no?: number;
  line_no?: string;
}

export interface appconfig_gui_xml_type {
  gui_xml?: string;
}

export interface application_config_actual_state_online_type {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  changed_datetime?: string;
  changed_by_user?: string;
  pending?: boolean;
  updated_in_vehicle_datetime?: string;
  vconf_type?: string;
  vconf_desc?: string;
  online?: boolean;
}

export interface application_config_actual_state_type {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  changed_datetime?: string;
  changed_by_user?: string;
  pending?: boolean;
  updated_in_vehicle_datetime?: string;
  vconf_type?: string;
  vconf_desc?: string;
  online?: boolean;
  vconf_group?: number;
}

export interface application_config_gui_template_type {
  key?: string;
  default_language?: string;
  sk?: string;
  en?: string;
  de?: string;
  visible?: boolean;
  editable?: boolean;
  data_type?: string;
  gui_order?: number;
  cs?: string;
}

export interface application_config_type {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  configurations?: {};
}

export interface auth_tokens {
  refresh_token?: string;
  refresh_token_expiration_time?: string;
  access_token_payload_data?: {};
  refresh_token_active?: boolean;
  refresh_token_family?: string;
  refresh_token_family_compromised?: boolean;
}

export interface auth_user_set {
  user_id?: number;
  user_name?: string;
  user_login_name?: string;
  user_account_disabled?: boolean;
  user_email?: string;
  user_roles?: string[];
  user_capabilities?: string[];
  company_id?: number;
  company_name?: string;
  crossroads_direction_type?: string;
  update_directory?: string;
  assigned_company_section_ids?: number[];
  assigned_company_section_names?: string[];
  company_position?: {};
  company_public_name?: string;
}

export interface bavi_events_type_set {
  id?: number;
  description?: string;
}

export interface bus_stops_view {
  company_id?: number;
  name?: string;
  code?: string;
  latitude?: number;
  longitude?: number;
}

export interface company_section_set {
  company_section_id?: number;
  company_section_name?: string;
  assigned_vehicles?: string[];
}

export interface company_set {
  company_id?: number;
  company_name?: string;
  company_identifier?: string;
  company_description?: string;
  contact_person?: string;
  company_email?: string;
  company_disabled?: boolean;
  enable_edit?: boolean;
  enable_delete?: boolean;
  company_language?: string;
  company_position?: {};
}

export interface cross_def_history_view {
  idx?: number;
  company_id?: number;
  created_dt?: string;
  version?: string;
  data?: {};
}

export interface cross_history_view {
  idx?: number;
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  received_to_sarchive_datetime?: string;
  processed_datetime?: string;
  gps_valid?: boolean;
  gps_longitude?: number;
  gps_latitude?: number;
  gps_speed?: number;
  gps_course?: number;
  data?: {};
}

export interface crossroad_branch_checkin_point_set {
  checkin_point_id?: number;
  branch_id?: number;
  branch_type?: string;
  direction_id?: number;
  checkin_point_code?: string;
  checkin_point_type?: string;
  checkin_point_description?: string;
  checkin_point_order_idx?: number;
  geo_point_id?: number;
  geo_point_left_point?: string;
  geo_point_right_point?: string;
  geo_point_zone_circle?: string;
  created_dtime?: string;
  created_user_name?: string;
  modified_dtime?: string;
  modified_user_name?: string;
}

export interface crossroad_branch_checkout_point_set {
  checkout_point_id?: number;
  crossroad_id?: number;
  checkout_point_code?: string;
  checkout_point_description?: string;
  geo_point_id?: number;
  geo_point_left_point?: string;
  geo_point_right_point?: string;
  geo_point_zone_circle?: string;
  created_dtime?: string;
  created_user_name?: string;
  modified_dtime?: string;
  modified_user_name?: string;
}

export interface crossroad_branch_set {
  branch_id?: number;
  crossroad_id?: number;
  branch_name?: string;
  branch_type?: string;
  branch_identifier?: string;
  branch_description?: string;
  stop_line?: string;
  created_dtime?: string;
  created_user_name?: string;
  modified_dtime?: string;
  modified_user_name?: string;
}

export interface crossroad_direction_set {
  direction_id?: number;
  crossroad_id?: number;
  direction_name?: string;
  direction_identifier?: string;
  direction_description?: string;
  direction_tractions?: string[];
  branch_id?: number;
  branch_identifier?: string;
  branch_name?: string;
  checkout_branch_id?: number;
  checkout_branch_identifier?: string;
  checkout_branch_name?: string;
  checkout_point_id?: number;
  checkout_point_code?: string;
  checkout_point_description?: string;
  radio_params?: string;
  geo_point_id?: number;
  geo_point_left_point?: string;
  geo_point_right_point?: string;
  geo_point_zone_circle?: string;
  created_dtime?: string;
  created_user_name?: string;
  modified_dtime?: string;
  modified_user_name?: string;
  direction_check_ok?: boolean;
  direction_check_reasons?: string[];
}

export interface crossroad_driver_type_set {
  type_name?: string;
  description?: string;
}

export interface crossroad_set {
  crossroad_id?: number;
  crossroad_name?: string;
  crossroad_number?: number;
  crossroad_identifier?: string;
  crossroad_description?: string;
  crossroad_position_lat?: number;
  crossroad_position_lon?: number;
  driver_type?: string;
  radio_identifier?: string;
  created_dtime?: string;
  created_user_name?: string;
  modified_dtime?: string;
  modified_user_name?: string;
}

export interface crossroad_version_set {
  version_id?: number;
  version_name?: string;
  version_description?: string;
  is_working_version?: boolean;
  is_dirty?: boolean;
  created_dtime?: string;
  created_user_name?: string;
  modified_dtime?: string;
  modified_user_name?: string;
}

export interface foreign_schedule_services {
  schedule_service_id?: number;
  company_id?: number;
  service_identifier?: string;
  departures?: {};
  created_dtime?: string;
  deleted?: boolean;
  deleted_dtime?: string;
}

export interface foreign_schedules {
  schedule_id?: number;
  company_id?: number;
  name?: string;
  description?: string;
  valid_since_dtime?: string;
  valid_through_dtime?: string;
  created_dtime?: string;
  deleted?: boolean;
  deleted_dtime?: string;
}

export interface foreign_stop_panel_messages {
  stop_panel_message_id?: number;
  message_text?: string;
  valid_since_dtime?: string;
  valid_through_dtime?: string;
  stop_selection_type?: string;
  stop_ids?: number[];
  created_dtime?: string;
  created_user_id?: number;
  deleted?: boolean;
  deleted_dtime?: string;
  company_id?: number;
}

export interface foreign_stops {
  stop_id?: number;
  company_id?: number;
  customer_code?: string;
  name?: string;
  latitude?: number;
  longitude?: number;
}

export interface get_main_view_set_with_online {
  vid?: string;
  company_id?: number;
  created_dt?: string;
  main_release_version?: string;
  expander_version?: string;
  voices?: string;
  scheduler?: string;
  cross_driver?: string;
  ip?: string;
  vconf_model?: string;
  vconf_desc?: string;
  vconf_version?: string;
  vconf_type?: string;
  vconf_station?: string;
  online?: boolean;
  update_request_active?: boolean;
  led_panels?: string;
  launchers?: string;
  announs?: {};
}

export interface get_main_view_set_with_peripherals {
  vid?: string;
  company_id?: number;
  created_dt?: string;
  main_release_version?: string;
  expander_version?: string;
  voices?: string;
  scheduler?: string;
  cross_driver?: string;
  ip?: string;
  vconf_model?: string;
  vconf_desc?: string;
  vconf_version?: string;
  vconf_type?: string;
  vconf_station?: string;
  online?: boolean;
  peripheral_version?: {};
  led_panels?: string;
}

export interface get_vehicle_update_request_view {
  vid?: string;
  ip?: string;
  idx?: number;
  update_request_active?: boolean;
  company_id?: number;
  vehicle_type?: string;
  cfg_group?: number;
}

export interface get_vehicle_version_and_configuration_view {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  main_release?: string;
  expander_version?: string;
  voices?: string;
  scheduler?: string;
  cross_driver?: string;
  ip?: string;
  vconf_model?: string;
  vconf_desc?: string;
  vconf_version?: string;
  vconf_traction?: string;
  vconf_station?: string;
  online?: boolean;
  update_request_active?: boolean;
  led_panels?: string;
  launchers?: string;
  announ?: {};
}

export interface get_vehicles_id_set {
  vid?: string;
}

export interface get_version_set {
  vid?: string;
  company_id?: number;
  created_dt?: string;
  main_release_version?: string;
  expander_version?: string;
  voices?: string;
  scheduler?: string;
  cross_driver?: string;
  led_panels?: string;
}

export interface get_versions_view_set {
  vid?: string;
  created_datetime?: string;
  main_release?: string;
  expander?: string;
  voices?: string;
  grafikon?: string;
  vetra?: string;
  last_update_datetime?: string;
  need_update?: number;
  ip?: string;
  last_comm_datetime?: string;
}

export interface history_set {
  history_idx?: number;
  vid?: string;
  created_datetime?: string;
  received_datetime?: string;
  driver?: string;
  service?: string;
  line_no?: number;
  direction?: number;
  order_no?: number;
  longitude?: number;
  latitude?: number;
  gps_signal?: boolean;
  time_diff_from_scheduler?: {};
  station_no?: number;
  station_name?: string;
  tickets_no?: number;
  get_in_no?: number;
  get_off_no?: number;
  door_status?: boolean;
  door_request?: boolean;
  revision?: string;
  ocl_blocked?: boolean;
  scheduled_departure?: string;
  ocl_station_no?: number;
  unsent?: number;
  msg_id?: number;
  unsent_buffer?: number;
}

export interface info_state_type_set {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  service?: string;
  driver?: string;
  uptime?: number;
  startup_reason?: number;
  power_state?: number;
  suspend?: boolean;
  f_uptime?: number;
  f_rst_cnt?: number;
  online?: boolean;
  errors?: {};
}

export interface info_state_type_set1 {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  service?: string;
  driver?: string;
  uptime?: number;
  startup_reason?: number;
  power_state?: number;
  suspend?: boolean;
  f_uptime?: number;
  f_rst_cnt?: number;
  errors?: {};
}

export interface peripheral_info_set1 {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  name?: string;
  ip?: string;
  device_type?: string;
  fw?: string;
  data?: string;
  serial_no?: string;
  outdated_data?: boolean;
}

export interface peripheral_name_set {
  device_name?: string;
}

export interface peripheral_type_set {
  device_type?: string;
}

export interface received_text_message_get_view {
  received_text_message_id?: number;
  message_text?: string;
  vid?: string;
  driver?: string;
  driver_name?: string;
  created_dtime?: string;
  received_dtime?: string;
  accepted_dtime?: string;
  accepted_by_user_id?: number;
  accepted_by_user_name?: string;
  message_state?: string;
  state_changed_dtime?: string;
}

export interface received_text_message_set {
  received_text_message_id?: number;
  message_text?: string;
  vid?: string;
  driver?: string;
  driver_name?: string;
  created_dtime?: string;
  received_dtime?: string;
  accepted_dtime?: string;
  accepted_by_user_id?: number;
  accepted_by_user_name?: string;
  message_state?: string;
  state_changed_dtime?: string;
}

export interface received_text_messages_status_set {
  total_messages_count?: number;
  new_messages_count?: number;
  accepted_messages_count?: number;
}

export interface report_request_state_set {
  report_file_id?: number;
  request_state_type?: string;
  server_filenames?: string[];
  client_filenames?: string[];
  report_type?: string;
}

export interface scheduled_service_type {
  journeys?: {};
  stops?: {};
  version?: {};
}

export interface station_realtime_data_set {
  tid?: string;
  name?: string;
  platform?: string;
  latitude?: number;
  longitude?: number;
  departures?: {};
  traffic_info?: string;
}

export interface stop_info_set {
  stop_name?: string;
  code?: string;
  platform?: string;
}

export interface stop_panel_company_set {
  company_id?: number;
  company_name?: string;
}

export interface stop_panel_component_set {
  stop_panel_id?: number;
  stop_panel_identifier?: string;
  stop_panel_model_name?: string;
  stop_panel_sernum?: string;
  component_name?: string;
  component_value?: string;
  company_id?: number;
  company_name?: string;
}

export interface stop_panel_data_set {
  tid?: string;
  name?: string;
  version?: string;
  tinfo?: string;
  departures?: {};
}

export interface stop_panel_data_tmp_set {
  tid?: string;
  name?: string;
  tinfo?: string[];
  departures?: {};
}

export interface stop_panel_error_set {
  stop_panel_id?: number;
  state_dtime?: string;
  errors?: string[];
}

export interface stop_panel_layout_set {
  stop_panel_layout_id?: number;
  stop_panel_layout_identifier?: string;
  stop_panel_layout_name?: string;
  stop_panel_layout_description?: string;
  stop_panel_layout_text_rows?: number;
  stop_panel_model_id?: number;
  stop_panel_model_identifier?: string;
  stop_panel_model_name?: string;
}

export interface stop_panel_model_set {
  stop_panel_model_identifier?: string;
  stop_panel_model_name?: string;
  text_rows?: number;
  sides?: number;
}

export interface stop_panel_register_set {
  identifier?: string;
  company_id?: number;
  tid?: string;
  zid?: string;
  service_text?: string;
  display_pages?: number;
  layout?: string;
}

export interface stop_panels_view {
  stop_panel_id?: number;
  stop_panel_identifier?: string;
  stop_panel_model_identifier?: string;
  stop_panel_model_name?: string;
  stop_panel_sernum?: string;
  stop_panel_description?: string;
  stop_panel_active?: boolean;
  display_pages?: number;
  company_id?: number;
  company_name?: string;
  stop_customer_code?: string;
  stop_name?: string;
  stop_platform?: string;
  show_all_platforms?: boolean;
  state_dtime?: string;
  online?: boolean;
  operation_state?: string;
  last_operation_ok_dtime?: string;
  battery_installed?: boolean;
  battery_charged?: boolean;
  cover_open?: boolean;
  last_cover_open_dtime?: string;
  error_code?: number;
  error_code_description?: string;
  last_error_code?: number;
  last_error_code_description?: string;
  last_error_ok_dtime?: string;
  last_error_not_ok_dtime?: string;
  ip_address?: string;
  temperature?: number;
  temperature_in?: number;
  light_sensor_a?: number;
  light_sensor_b?: number;
  brightness_a?: number;
  brightness_b?: number;
  power_a?: number;
  power_b?: number;
  fan_rpm?: number;
  fan_on?: boolean;
  ac_power?: boolean;
  last_ac_power_dtime?: string;
  main_voltage?: number;
  modified_dtime?: string;
  modified_user_id?: number;
  modified_user_name?: string;
  stop_panel_layout_id?: number;
  stop_panel_layout_identifier?: string;
  stop_panel_layout_name?: string;
  stop_panel_layout_description?: string;
  stop_panel_layout_text_rows?: number;
}

export interface stop_schedule_bus_set {
  idx?: number;
  line?: string;
  dest?: string;
  pf?: string;
  sch?: string;
  vid?: string;
  hide?: string;
}

export interface stop_schedule_panel_set {
  line?: string;
  pf?: string;
  dest?: string;
  attr?: number;
  sch?: string;
  pr?: string;
}

export interface stop_schedule_public_set {
  bus_line_number?: string;
  connection_number?: number;
  destination?: string;
  vehicle_name?: string;
  vehicle_latitude?: number;
  vehicle_longitude?: number;
  vehicle_course?: number;
  vehicle_speed?: number;
  vehicle_state_dtime?: string;
  vehicle_attributes?: string;
  scheduled_departure_dtime?: string;
  predicted_departure_dtime?: string;
}

export interface stop_set {
  stop_id?: number;
  stop_name?: string;
  stop_customer_code?: string;
  stop_platform?: string;
}

export interface stop_states_view {
  stop_id?: number;
  company_id?: number;
  customer_code?: string;
  name?: string;
  latitude?: number;
  longitude?: number;
  state_dtime?: string;
  stop_schedule_public?: {};
  stop_schedule_panels?: {};
  stop_schedule_bus?: {};
}

export interface update_target_def_set {
  target?: string;
  description?: string;
  en?: string;
  cz?: string;
}

export interface update_version_summary_set {
  update_version_type?: string;
  update_version_name?: string;
  first_update_dtime?: string;
  last_update_dtime?: string;
  updated_vehicles_count?: number;
}

export interface update_version_vehicle_set {
  update_version_type?: string;
  update_version_name?: string;
  vid?: string;
  update_dtime?: string;
}

export interface user_capability_set {
  user_id?: number;
  entity?: string;
  capabilities?: string[];
  enable_edit?: boolean;
  enable_delete?: boolean;
}

export interface user_set {
  user_id?: number;
  user_name?: string;
  user_description?: string;
  user_login_name?: string;
  user_account_disabled?: boolean;
  user_email?: string;
  user_roles?: string[];
  company_id?: number;
  company_name?: string;
  enable_edit?: boolean;
  enable_delete?: boolean;
  assigned_company_section_ids?: number[];
  assigned_company_section_names?: string[];
  user_notifications?: string[];
}

export interface vehicle_actual_state_set {
  vid?: string;
  company_id?: number;
  ip?: string;
  created_datetime?: string;
  trip_status?: string;
  gps_longitude?: number;
  gps_latitude?: number;
  driver?: string;
  service?: string;
  line_name?: string;
  line_direction?: string;
  current_stop_name?: string;
  time_difference?: {};
  current_stop_scheduled_departure?: string;
  destination_stop_name?: string;
  destination_stop_time?: string;
  next_departure_time?: string;
  door_status?: boolean;
  errors?: {};
  uptime?: {};
  f_uptime?: {};
  online?: boolean;
  vconf_type?: string;
  need_update?: boolean;
  vconf_desc?: string;
  orr?: {};
  vols?: {};
  suspend?: boolean;
  comm_error_ratio?: number;
  journey_conn?: number;
}

export interface vehicle_conf_type_set {
  vconf_type?: string;
}

export interface vehicle_configuration_set {
  vconf_desc?: string;
}

export interface vehicle_driver_set {
  record_dtime?: string;
  vid?: string;
  driver_code?: string;
}

export interface vehicle_error_set {
  vid?: string;
  company_id?: number;
  ip?: string;
  created_datetime?: string;
  device?: string;
  description?: string;
  start_datetime?: string;
  end_datetime?: string;
  error_key?: string;
  cfg_model?: string;
  cfg_vehicle_type?: string;
}

export interface vehicle_online_set {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  online?: boolean;
}

export interface vehicle_set {
  vid?: string;
  vehicle_type?: string;
}

export interface vehicle_state_and_version_set {
  vehicle_number?: string;
  ip_address?: string;
  state_dtime?: string;
  trip_status?: string;
  gps_longitude?: number;
  gps_latitude?: number;
  driver_identifier?: string;
  service_number?: string;
  line_name?: string;
  current_stop_name?: string;
  time_difference?: {};
  current_stop_scheduled_departure_time?: string;
  destination_stop_name?: string;
  destination_stop_scheduled_arrival_time?: string;
  next_departure_time?: string;
  door_open?: boolean;
  errors?: {};
  uptime?: {};
  f_uptime?: {};
  online?: boolean;
  vehicle_type?: string;
  vconf_desc?: string;
  main_release_version?: string;
  expander_version?: string;
  voices_version?: string;
  scheduler_version?: string;
  cross_driver_version?: string;
  vconf_model?: string;
  vconf_version?: string;
  vconf_station?: string;
  update_request_active?: boolean;
  led_panels_version?: string;
  has_unread_messages?: boolean;
}

export interface vehicle_update_actual_state_set {
  idx?: number;
  vid?: string;
  created_by_user_dt?: string;
  created_by_user_name?: string;
  valid_from_dt?: string;
  deleted_by_user_dt?: string;
  deleted_by_user_name?: string;
  imported_to_vehicle_dt?: string;
  vconf_type?: string;
  channel?: string;
  info_files?: string;
  online?: boolean;
  vconf_desc?: string;
  update_request_active?: boolean;
  ip?: string;
}

export interface vehicle_update_company_settings_set {
  company_id?: number;
  supported_channels?: string[];
}

export interface vehicle_updates_ui_lock_request_set {
  locked_dtime?: string;
  locked_by_user_id?: number;
  locked_by_user_name?: string;
  unlocked_dtime?: string;
  unlocked_by_user_id?: number;
  unlocked_by_user_name?: string;
}

export interface vehicle_updates_ui_lock_requests {
  locked_dtime?: string;
  locked_by_user_id?: number;
  unlocked_dtime?: string;
  unlocked_by_user_id?: number;
}

export interface vehicles_online_state {
  vid?: string;
  company_id?: number;
  created_datetime?: string;
  online?: boolean;
}

export interface vehicles_process_data_set {
  created_datetime?: string;
  vid?: string;
  driver?: string;
  service?: string;
  line_no?: string;
  direction?: number;
  order_no?: number;
  gps_longitude?: number;
  gps_latitude?: number;
  gps_valid?: boolean;
  time_diff_from_scheduler?: {};
  station_no?: number;
  station_name?: string;
  tickets_no?: number;
  get_in_no?: number;
  get_off_no?: number;
  door_status?: boolean;
  door_request?: boolean;
  revision?: string;
  ocl_blocked?: boolean;
  scheduled_departure?: string;
  ocl_station_no?: number;
  msg_id?: number;
  gps_speed?: number;
}

export interface web_portal_log {
  record_datetime?: string;
  record_type?: {};
  record_level?: {};
  record_data?: {};
}

export interface web_portal_user_setting_set {
  user_id?: number;
  idx?: number;
  last_update_datetime?: string;
  key?: string;
  value?: {};
}

export interface appconfig_gui_xml_get_result {
  data?: appconfig_gui_xml_type;
}

export interface application_config_get_result {
  data?: application_config_type[];
  count?: number;
  total_count?: number | unknown;
}

export interface application_config_gui_template_get_result {
  data?: application_config_gui_template_type[];
  count?: number;
  total_count?: number | unknown;
}

export interface application_config_state_clone_result {
  data?: action_result_set;
}

export interface application_config_state_get_result {
  data?: application_config_actual_state_type[];
  count?: number;
  total_count?: number | unknown;
}

export interface application_config_state_set_result {
  data?: action_result_set;
}

export interface application_config_state_set_from_vehicle_result {
  data?: action_result_set;
}

export interface assign_stop_panel_to_company_result {
  data?: action_result_set;
}

export interface bavi_get_supported_events_result {
  data?: bavi_events_type_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface change_user_password_result {
  data?: action_result_set;
}

export interface clone_crossroad_version_result {
  data?: action_result_set;
}

export interface compromise_auth_token_family_result {
  data?: auth_tokens[];
  count?: number;
  total_count?: number | unknown;
}

export interface create_auth_token_result {
  data?: auth_tokens;
}

export interface create_company_result {
  data?: action_result_set;
}

export interface create_company_section_result {
  data?: action_result_set;
}

export interface create_crossroad_result {
  data?: action_result_set;
}

export interface create_crossroad_branch_result {
  data?: action_result_set;
}

export interface create_crossroad_branch_checkin_point_result {
  data?: action_result_set;
}

export interface create_crossroad_checkin_branch_result {
  data?: action_result_set;
}

export interface create_crossroad_checkout_branch_result {
  data?: action_result_set;
}

export interface create_crossroad_checkout_point_result {
  data?: action_result_set;
}

export interface create_crossroad_direction_result {
  data?: action_result_set;
}

export interface create_crossroad_version_result {
  data?: action_result_set;
}

export interface create_email_record_result {
  data?: action_result_set;
}

export interface create_report_request_result {
  data?: action_result_set;
}

export interface create_user_result {
  data?: action_result_set;
}

export interface create_vehicles_update_request_email_record_result {
  data?: action_result_set;
}

export interface delete_auth_token_result {
  data?: auth_tokens;
}

export interface delete_auth_token_family_result {
  data?: auth_tokens[];
  count?: number;
  total_count?: number | unknown;
}

export interface delete_company_result {
  data?: action_result_set;
}

export interface delete_company_section_result {
  data?: action_result_set;
}

export interface delete_crossroad_result {
  data?: action_result_set;
}

export interface delete_crossroad_branch_result {
  data?: action_result_set;
}

export interface delete_crossroad_branch_checkin_point_result {
  data?: action_result_set;
}

export interface delete_crossroad_checkout_point_result {
  data?: action_result_set;
}

export interface delete_crossroad_direction_result {
  data?: action_result_set;
}

export interface delete_expired_auth_tokens_result {
  data?: auth_tokens[];
  count?: number;
  total_count?: number | unknown;
}

export interface delete_user_result {
  data?: action_result_set;
}

export interface get_active_vehicle_updates_ui_lock_request_result {
  data?: vehicle_updates_ui_lock_request_set;
}

export interface get_all_crossroad_directions_result {
  data?: all_crossroad_direction_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_all_crossroad_directions_by_version_id_result {
  data?: all_crossroad_direction_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_api_vehicle_data_result {
  data?: api_vehicle_data_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_api_vehicle_eco_drive_result {
  data?: api_vehicle_eco_drive_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_auth_token_result {
  data?: auth_tokens;
}

export interface get_auth_user_by_id_result {
  data?: auth_user_set;
}

export interface get_auth_user_by_login_name_and_password_result {
  data?: auth_user_set;
}

export interface get_companies_result {
  data?: company_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_company_by_id_result {
  data?: company_set;
}

export interface get_company_sections_result {
  data?: company_section_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_branch_by_id_result {
  data?: crossroad_branch_set;
}

export interface get_crossroad_branch_checkin_point_by_id_result {
  data?: crossroad_branch_checkin_point_set;
}

export interface get_crossroad_branch_checkin_points_result {
  data?: crossroad_branch_checkin_point_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_branches_result {
  data?: crossroad_branch_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_branches_all_result {
  data?: crossroad_branch_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_by_id_result {
  data?: crossroad_set;
}

export interface get_crossroad_checkout_point_by_id_result {
  data?: crossroad_branch_checkout_point_set;
}

export interface get_crossroad_checkout_points_result {
  data?: crossroad_branch_checkout_point_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_checkpoint_definitions_result {
  data?: cross_def_history_view[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_direction_by_id_result {
  data?: crossroad_direction_set;
}

export interface get_crossroad_directions_result {
  data?: crossroad_direction_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_driver_types_result {
  data?: crossroad_driver_type_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_history_events_result {
  data?: cross_history_view[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroad_versions_result {
  data?: crossroad_version_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroads_result {
  data?: crossroad_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_crossroads_by_version_id_result {
  data?: crossroad_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_diagnostic_data_actual_state_result {
  data?: info_state_type_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_history_result {
  data?: history_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_history_process_data_result {
  data?: vehicles_process_data_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_history_process_data__result {
  data?: vehicles_process_data_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_history_process_data_dpb_result {
  data?: vehicles_process_data_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_log_records_result {
  data?: web_portal_log[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_peripherals_info_by_type_result {
  data?: peripheral_info_set1[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_peripherals_info_from_selected_vehicle_result {
  data?: peripheral_info_set1[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_report_request_state_result {
  data?: report_request_state_set;
}

export interface get_schedule_service_result {
  data?: scheduled_service_type;
}

export interface get_stations_realtime_data_result {
  data?: station_realtime_data_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stations_realtime_data_v2_result {
  data?: station_realtime_data_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stop_list_result {
  data?: stop_info_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stop_panel_companies_result {
  data?: stop_panel_company_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stop_panel_components_result {
  data?: stop_panel_component_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stop_panel_data_result {
  data?: stop_panel_data_set;
}

export interface get_stop_panel_data_2_result {
  data?: stop_panel_data_set;
}

export interface get_stop_panel_data_2_backup_result {
  data?: stop_panel_data_set;
}

export interface get_stop_panel_data_test_result {
  data?: stop_panel_data_set;
}

export interface get_stop_panel_data_tmp_result {
  data?: stop_panel_data_tmp_set;
}

export interface get_stop_panel_errors_result {
  data?: stop_panel_error_set;
}

export interface get_stop_panel_layouts_result {
  data?: stop_panel_layout_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stop_panel_models_result {
  data?: stop_panel_model_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stop_panel_schedule_result {
  data?: stop_panel_data_set;
}

export interface get_stop_panels_result {
  data?: stop_panels_view[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_stops_result {
  data?: stop_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_update_target_def_result {
  data?: update_target_def_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_update_versions_summaries_result {
  data?: update_version_summary_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_update_versions_vehicles_result {
  data?: update_version_vehicle_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_user_by_id_result {
  data?: user_set;
}

export interface get_user_capabilities_result {
  data?: user_capability_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_users_result {
  data?: user_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_conf_types_result {
  data?: vehicle_conf_type_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_configurations_result {
  data?: vehicle_configuration_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_drivers_history_result {
  data?: vehicle_driver_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_errors_history_result {
  data?: vehicle_error_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_errors_history_vlv20240524_result {
  data?: vehicle_error_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_online_state_result {
  data?: vehicle_online_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_peripheral_names_result {
  data?: peripheral_name_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_peripheral_types_result {
  data?: peripheral_type_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_peripherals_result {
  data?: peripheral_info_set1[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_peripherals_1_result {
  data?: peripheral_info_set1[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_states_and_versions_result {
  data?: vehicle_state_and_version_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_update_request_result {
  data?: get_vehicle_update_request_view[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicle_updates_ui_lock_requests_result {
  data?: vehicle_updates_ui_lock_request_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicles_result {
  data?: vehicle_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicles_actual_state_result {
  data?: vehicle_actual_state_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicles_actual_state__result {
  data?: vehicle_actual_state_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicles_actual_state_2_result {
  data?: vehicle_actual_state_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicles_actual_state_3_result {
  data?: vehicle_actual_state_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_vehicles_actual_state_4_result {
  data?: vehicle_actual_state_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_versions_from_all_vehicles_result {
  data?: get_main_view_set_with_online[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_versions_from_all_vehicles_with_peripherals_result {
  data?: get_main_view_set_with_peripherals[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_versions_from_vehicle_histor_old_result {
  data?: get_version_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface get_versions_from_vehicle_history_result {
  data?: get_version_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface inactivate_auth_token_result {
  data?: auth_tokens;
}

export interface lock_vehicle_updates_ui_result {
  data?: action_result_set;
}

export interface received_text_messages_accept_result {
  data?: action_result_set;
}

export interface received_text_messages_get_result {
  data?: received_text_message_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface received_text_messages_status_get_result {
  data?: received_text_messages_status_set;
}

export interface received_text_messages_unaccept_result {
  data?: action_result_set;
}

export interface register_stop_panel_result {
  data?: stop_panel_register_set;
}

export interface remove_stop_panel_from_company_result {
  data?: action_result_set;
}

export interface remove_vehicle_result {
  data?: action_result_set;
}

export interface reset_stop_panel_stop_result {
  data?: action_result_set;
}

export interface reset_user_password_result {
  data?: action_result_set;
}

export interface unlock_vehicle_updates_ui_result {
  data?: action_result_set;
}

export interface update_company_result {
  data?: action_result_set;
}

export interface update_company_section_result {
  data?: action_result_set;
}

export interface update_crossroad_result {
  data?: action_result_set;
}

export interface update_crossroad_branch_result {
  data?: action_result_set;
}

export interface update_crossroad_branch_checkin_point_result {
  data?: action_result_set;
}

export interface update_crossroad_branch_checkin_points_order_result {
  data?: action_result_set;
}

export interface update_crossroad_checkout_point_result {
  data?: action_result_set;
}

export interface update_crossroad_direction_result {
  data?: action_result_set;
}

export interface update_crossroad_geo_point_result {
  data?: action_result_set;
}

export interface update_stop_panel_result {
  data?: action_result_set;
}

export interface update_stop_panel_active_result {
  data?: action_result_set;
}

export interface update_stop_panel_components_result {
  data?: action_result_set;
}

export interface update_stop_panel_hw_state_result {
  data?: action_result_set;
}

export interface update_stop_panel_layout_result {
  data?: action_result_set;
}

export interface update_stop_panel_stop_result {
  data?: action_result_set;
}

export interface update_stop_panel_user_params_result {
  data?: action_result_set;
}

export interface update_user_result {
  data?: action_result_set;
}

export interface update_user_password_result {
  data?: action_result_set;
}

export interface vehicle_config_apc_info_result {
  data?: apc_installed_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface vehicle_update_company_settings_result {
  data?: vehicle_update_company_settings_set;
}

export interface vehicle_update_imported_to_vehicle_result {
  data?: action_result_set;
}

export interface vehicle_update_request_delete_result {
  data?: action_result_set;
}

export interface vehicle_update_request_get_result {
  data?: vehicle_update_actual_state_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface vehicle_update_request_history_result {
  data?: vehicle_update_actual_state_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface vehicle_update_request_set_result {
  data?: action_result_set;
}

export interface vehicle_update_send_failure_notification_result {
  data?: action_result_set;
}

export interface web_portal_user_setting_create_result {
  data?: action_result_set;
}

export interface web_portal_user_setting_delete_result {
  data?: action_result_set;
}

export interface web_portal_user_setting_get_result {
  data?: web_portal_user_setting_set[];
  count?: number;
  total_count?: number | unknown;
}

export interface web_portal_user_setting_update_result {
  data?: action_result_set;
}

export interface appconfig_gui_xml_get_params {}

export interface application_config_get_params {
  vehicle_id: string;
}

export interface application_config_gui_template_get_params {}

export interface application_config_state_clone_params {
  vehicle_id: string;
  destination_vehicles: string[];
}

export interface application_config_state_get_params {}

export interface application_config_state_set_params {
  vehicle_id: string;
  configuration: {};
}

export interface application_config_state_set_from_vehicle_params {
  company_id: number;
  vehicle_id: string;
  updated_in_vehicle_datetime: string;
}

export interface assign_stop_panel_to_company_params {
  stop_panel_id: number;
  company_id: number;
}

export interface bavi_get_supported_events_params {}

export interface change_user_password_params {
  old_password: string;
  new_password: string;
}

export interface clone_crossroad_version_params {
  version_id: number;
}

export interface compromise_auth_token_family_params {
  refresh_token_family: string;
}

export interface create_auth_token_params {
  refresh_token_lifetime: number;
  access_token_payload_data: {};
  refresh_token_family?: string;
}

export interface create_company_params {
  company_name: string;
  company_identifier: number;
  company_description?: string;
  contact_person?: string;
  company_email?: string;
  company_disabled?: boolean;
  company_language?: string;
}

export interface create_company_section_params {
  company_section_name: string;
  assigned_vehicles: string[];
}

export interface create_crossroad_params {
  crossroad_number: number;
  crossroad_name: string;
  crossroad_identifier?: string;
  crossroad_description?: string;
  crossroad_position_lat?: number;
  crossroad_position_lon?: number;
  driver_type?: string;
  radio_identifier?: string;
}

export interface create_crossroad_branch_params {
  crossroad_id: number;
  branch_name: string;
  branch_identifier: string;
  branch_description?: string;
  stop_line?: string;
}

export interface create_crossroad_branch_checkin_point_params {
  branch_id: number;
  checkin_point_type: string;
  checkin_point_description?: string;
  geo_point_left_point?: string;
  geo_point_right_point?: string;
  geo_point_zone_circle?: string;
  order_idx?: number;
}

export interface create_crossroad_checkin_branch_params {
  crossroad_id: number;
  branch_name: string;
  branch_identifier: string;
  branch_description?: string;
  stop_line?: string;
}

export interface create_crossroad_checkout_branch_params {
  crossroad_id: number;
  branch_name: string;
  branch_identifier: string;
  branch_description?: string;
  stop_line?: string;
}

export interface create_crossroad_checkout_point_params {
  crossroad_id: number;
  direction_id: number;
  checkout_point_description?: string;
  geo_point_left_point?: string;
  geo_point_right_point?: string;
  geo_point_zone_circle?: string;
}

export interface create_crossroad_direction_params {
  crossroad_id: number;
  direction_name: string;
  direction_description?: string;
  direction_tractions?: string[];
  branch_id?: number;
  checkout_branch_id?: number;
  radio_params?: string;
}

export interface create_crossroad_version_params {
  current_version_id: number;
  version_name: string;
  version_description?: string;
}

export interface create_email_record_params {
  email_template: string;
  email_recipients: string;
  email_params?: {};
  language: string;
}

export interface create_report_request_params {
  report_type: string;
  report_begin_dtime?: string;
  report_end_dtime?: string;
  report_params?: {};
}

export interface create_user_params {
  company_id?: number;
  user_name: string;
  user_description?: string;
  user_login_name: string;
  user_password?: string;
  user_account_disabled?: boolean;
  user_email?: string;
  user_roles: string[];
  assigned_company_section_ids?: number[];
  user_notifications?: string[];
}

export interface create_vehicles_update_request_email_record_params {
  email_params: {};
}

export interface delete_auth_token_params {
  refresh_token: string;
}

export interface delete_auth_token_family_params {
  refresh_token_family: string;
}

export interface delete_company_params {
  company_id: number;
}

export interface delete_company_section_params {
  company_section_id: number;
}

export interface delete_crossroad_params {
  crossroad_id: number;
}

export interface delete_crossroad_branch_params {
  branch_id: number;
}

export interface delete_crossroad_branch_checkin_point_params {
  checkin_point_id: number;
}

export interface delete_crossroad_checkout_point_params {
  checkout_point_id: number;
}

export interface delete_crossroad_direction_params {
  direction_id: number;
}

export interface delete_expired_auth_tokens_params {}

export interface delete_user_params {
  user_id: number;
}

export interface get_active_vehicle_updates_ui_lock_request_params {}

export interface get_all_crossroad_directions_params {}

export interface get_all_crossroad_directions_by_version_id_params {
  version_id: number;
}

export interface get_api_vehicle_data_params {}

export interface get_api_vehicle_eco_drive_params {}

export interface get_auth_token_params {
  refresh_token: string;
}

export interface get_auth_user_by_id_params {
  user_id: number;
}

export interface get_auth_user_by_login_name_and_password_params {
  user_login_name: string;
  user_login_password: string;
}

export interface get_companies_params {}

export interface get_company_by_id_params {
  company_id: number;
}

export interface get_company_sections_params {}

export interface get_crossroad_branch_by_id_params {
  branch_id: number;
}

export interface get_crossroad_branch_checkin_point_by_id_params {
  checkin_point_id: number;
}

export interface get_crossroad_branch_checkin_points_params {
  crossroad_id?: number;
  direction_id?: number;
  branch_id?: number;
}

export interface get_crossroad_branches_params {
  crossroad_id?: number;
}

export interface get_crossroad_branches_all_params {
  crossroad_id?: number;
}

export interface get_crossroad_by_id_params {
  crossroad_id: number;
}

export interface get_crossroad_checkout_point_by_id_params {
  checkout_point_id: number;
}

export interface get_crossroad_checkout_points_params {
  crossroad_id?: number;
}

export interface get_crossroad_checkpoint_definitions_params {
  data_versions?: string[];
}

export interface get_crossroad_direction_by_id_params {
  direction_id: number;
}

export interface get_crossroad_directions_params {
  crossroad_id?: number;
}

export interface get_crossroad_driver_types_params {}

export interface get_crossroad_history_events_params {
  vid: string;
  since_dtime: string;
  through_dtime: string;
}

export interface get_crossroad_versions_params {}

export interface get_crossroads_params {}

export interface get_crossroads_by_version_id_params {
  version_id: number;
}

export interface get_diagnostic_data_actual_state_params {}

export interface get_history_params {
  vehicle_id: string;
  from: string;
  until: string;
}

export interface get_history_process_data_params {
  vid?: string;
  from_dt: string;
  until_dt: string;
  limit: number;
}

export interface get_history_process_data__params {
  vid?: string;
  from_dt: string;
  until_dt: string;
  limit: number;
}

export interface get_history_process_data_dpb_params {
  date: string;
}

export interface get_log_records_params {
  since_datetime: string;
  through_datetime: string;
  record_type?: string;
  record_level?: string;
}

export interface get_peripherals_info_by_type_params {
  device_type: string;
}

export interface get_peripherals_info_from_selected_vehicle_params {
  vehicle_id: string;
}

export interface get_report_request_state_params {
  report_file_id: number;
}

export interface get_schedule_service_params {
  service: string;
}

export interface get_stations_realtime_data_params {
  tid?: string;
  zid?: string;
}

export interface get_stations_realtime_data_v2_params {}

export interface get_stop_list_params {
  company_id: number;
}

export interface get_stop_panel_companies_params {}

export interface get_stop_panel_components_params {
  stop_panel_id?: number;
}

export interface get_stop_panel_data_params {
  panel_identifier: string;
  state_dtime?: string;
  operation_mode?: string;
  error_code?: number;
  tamper_ok?: boolean;
}

export interface get_stop_panel_data_2_params {
  panel_identifier: string;
  state_dtime?: string;
  operation_mode?: string;
  error_code?: number;
  tamper_ok?: boolean;
  device_ip?: string;
}

export interface get_stop_panel_data_2_backup_params {
  panel_identifier: string;
  state_dtime?: string;
  operation_mode?: string;
  error_code?: number;
  tamper_ok?: boolean;
  device_ip?: string;
}

export interface get_stop_panel_data_test_params {
  panel_identifier: string;
  state_dtime?: string;
  operation_mode?: string;
  error_code?: number;
  tamper_ok?: boolean;
}

export interface get_stop_panel_data_tmp_params {
  company_id: number;
  tid?: string;
}

export interface get_stop_panel_errors_params {
  stop_panel_id: number;
}

export interface get_stop_panel_layouts_params {}

export interface get_stop_panel_models_params {}

export interface get_stop_panel_schedule_params {
  panel_identifier: string;
}

export interface get_stop_panels_params {}

export interface get_stops_params {
  company_id?: number;
}

export interface get_update_target_def_params {}

export interface get_update_versions_summaries_params {
  update_version_type?: string;
}

export interface get_update_versions_vehicles_params {
  update_version_type?: string;
  update_version_name?: string;
  vid?: string;
}

export interface get_user_by_id_params {
  user_id: number;
}

export interface get_user_capabilities_params {
  user_id: number;
}

export interface get_users_params {
  company_id?: number;
}

export interface get_vehicle_conf_types_params {}

export interface get_vehicle_configurations_params {}

export interface get_vehicle_drivers_history_params {
  date: string;
}

export interface get_vehicle_errors_history_params {
  vehicle_id: string;
}

export interface get_vehicle_errors_history_vlv20240524_params {
  vehicle_id: string;
}

export interface get_vehicle_online_state_params {}

export interface get_vehicle_peripheral_names_params {}

export interface get_vehicle_peripheral_types_params {}

export interface get_vehicle_peripherals_params {
  vehicle_id?: string;
  device_type?: string;
}

export interface get_vehicle_peripherals_1_params {
  vehicle_id?: string;
  device_type?: string;
}

export interface get_vehicle_states_and_versions_params {}

export interface get_vehicle_update_request_params {}

export interface get_vehicle_updates_ui_lock_requests_params {}

export interface get_vehicles_params {}

export interface get_vehicles_actual_state_params {}

export interface get_vehicles_actual_state__params {}

export interface get_vehicles_actual_state_2_params {}

export interface get_vehicles_actual_state_3_params {}

export interface get_vehicles_actual_state_4_params {}

export interface get_versions_from_all_vehicles_params {}

export interface get_versions_from_all_vehicles_with_peripherals_params {}

export interface get_versions_from_vehicle_histor_old_params {
  vid: string;
  from_datetetime?: string;
}

export interface get_versions_from_vehicle_history_params {
  vid: string;
  from_datetetime?: string;
}

export interface inactivate_auth_token_params {
  refresh_token: string;
}

export interface lock_vehicle_updates_ui_params {}

export interface received_text_messages_accept_params {
  received_text_message_ids: number[];
}

export interface received_text_messages_get_params {
  since_dtime?: string;
  through_dtime?: string;
  min_state_changed_dtime?: string;
  vid?: string;
}

export interface received_text_messages_status_get_params {
  since_dtime?: string;
  through_dtime?: string;
  min_state_changed_dtime?: string;
}

export interface received_text_messages_unaccept_params {
  received_text_message_ids: number[];
}

export interface register_stop_panel_params {
  panel_identifier: string;
}

export interface remove_stop_panel_from_company_params {
  stop_panel_id: number;
}

export interface remove_vehicle_params {
  vid: string;
}

export interface reset_stop_panel_stop_params {
  stop_panel_id: number;
}

export interface reset_user_password_params {
  user_id: number;
}

export interface unlock_vehicle_updates_ui_params {}

export interface update_company_params {
  company_id: number;
  company_name?: string;
  company_identifier?: string;
  company_description?: string;
  contact_person?: string;
  company_email?: string;
  company_disabled?: boolean;
  company_language?: string;
}

export interface update_company_section_params {
  company_section_id: number;
  company_section_name?: string;
  assigned_vehicles?: string[];
}

export interface update_crossroad_params {
  crossroad_id: number;
  crossroad_number?: number;
  crossroad_name?: string;
  crossroad_identifier?: string;
  crossroad_description?: string;
  crossroad_position_lat?: number;
  crossroad_position_lon?: number;
  driver_type?: string;
  radio_identifier?: string;
}

export interface update_crossroad_branch_params {
  branch_id: number;
  branch_name?: string;
  branch_identifier?: string;
  branch_description?: string;
  stop_line?: string;
}

export interface update_crossroad_branch_checkin_point_params {
  checkin_point_id: number;
  checkin_point_description?: string;
  geo_point_left_point?: string;
  geo_point_right_point?: string;
  geo_point_zone_circle?: string;
  order_idx?: number;
}

export interface update_crossroad_branch_checkin_points_order_params {
  branch_id: number;
  checkin_point_ids: number[];
}

export interface update_crossroad_checkout_point_params {
  checkout_point_id: number;
  checkput_point_description?: string;
  geo_point_left_point?: string;
  geo_point_right_point?: string;
  geo_point_zone_circle?: string;
}

export interface update_crossroad_direction_params {
  direction_id: number;
  direction_name?: string;
  direction_description?: string;
  direction_tractions?: string[];
  branch_id?: number;
  checkout_branch_id?: number;
  radio_params?: string;
}

export interface update_crossroad_geo_point_params {
  geo_point_id: number;
  geo_point_left_point: string;
  geo_point_right_point: string;
  geo_point_zone_circle: string;
}

export interface update_stop_panel_params {
  stop_panel_id: number;
  stop_panel_model_identifier?: string;
  stop_panel_sernum?: string;
}

export interface update_stop_panel_active_params {
  stop_panel_id: number;
  active: boolean;
}

export interface update_stop_panel_components_params {
  panel_identifier?: string;
  components?: {};
}

export interface update_stop_panel_hw_state_params {
  identifier?: string;
  panel_identifier?: string;
  ac_power?: boolean;
  battery_charged?: boolean;
  temperature?: number;
  temperature_in?: number;
  fan?: boolean;
  fan_rpm?: number;
  light_a?: number;
  light_b?: number;
  brightness_a?: number;
  brightness_b?: number;
  pwr_a?: number;
  pwr_b?: number;
  main_volt?: number;
}

export interface update_stop_panel_layout_params {
  stop_panel_id: number;
  stop_panel_layout_id: number;
}

export interface update_stop_panel_stop_params {
  stop_panel_id: number;
  stop_customer_code: string;
  display_pages?: number;
  show_all_platforms: boolean;
  stop_platform?: string;
}

export interface update_stop_panel_user_params_params {
  stop_panel_id: number;
  description?: string;
}

export interface update_user_params {
  user_id: number;
  user_name?: string;
  user_description?: string;
  user_account_disabled?: boolean;
  user_email?: string;
  user_roles?: string[];
  assigned_company_section_ids?: number[];
  user_notifications?: string[];
}

export interface update_user_password_params {
  user_id: number;
  new_password: string;
}

export interface vehicle_config_apc_info_params {}

export interface vehicle_update_company_settings_params {}

export interface vehicle_update_imported_to_vehicle_params {
  idx: number;
}

export interface vehicle_update_request_delete_params {
  idx: number[];
}

export interface vehicle_update_request_get_params {}

export interface vehicle_update_request_history_params {
  vid: string;
}

export interface vehicle_update_request_set_params {
  vid: string[];
  valid_from_datetime?: string;
  channel?: string;
}

export interface vehicle_update_send_failure_notification_params {
  timoout: number;
}

export interface web_portal_user_setting_create_params {
  key: string;
  value: {};
}

export interface web_portal_user_setting_delete_params {
  idx: number;
  key: string;
}

export interface web_portal_user_setting_get_params {
  key: string;
}

export interface web_portal_user_setting_update_params {
  idx: number;
  key: string;
  value: {};
}
