/* AUTO-GENERATED: types.ts — do not edit by hand. */

export interface SessionStatus {
  valid?: boolean;
  userId?: string;
}

export interface RdsBillingTariff {
  Id?: string;
  Identifier?: string;
  ValidFrom?: string;
  ValidTo?: string;
  Name?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface RdsBillingTariff_Update_Result {
  success?: boolean;
  entity?: RdsBillingTariff;
}

export interface Dodavatel {
  Id?: string;
  Name?: string;
  Eic?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface Dodavatel_Update_Result {
  success?: boolean;
  entity?: Dodavatel;
}

export interface InvoiceItem {
  Id?: string;
  RdsBillingTariffId?: string;
  MdsId?: string;
  InvoiceItemType?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface InvoiceItem_Update_Result {
  success?: boolean;
  entity?: InvoiceItem;
}

export interface InvoiceItemRevision {
  Id?: string;
  ValidFrom?: string;
  ValidTo?: string;
  RevisionReasonTags?: string;
  ReferenceId?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface InvoiceItemRevision_Update_Result {
  success?: boolean;
  entity?: InvoiceItemRevision;
}

export interface Mds {
  Id?: string;
  Name?: string;
  Eic?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface Mds_Update_Result {
  success?: boolean;
  entity?: Mds;
}

export interface MdsRevision {
  Id?: string;
  ReferenceId?: string;
  ValidFrom?: string;
  ValidTo?: string;
  RevisionReasonTags?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface Mds_GetByEic_Result {
  mds?: Mds;
  requestFrom?: string;
  requestTo?: string;
  revisions?: MdsRevision[];
}

export interface Result {
  mdsId?: string;
  numberOfMdsPurged?: number;
  numberOfMdsRevisionPurged?: number;
}

export interface MdsRevision_Update_Result {
  success?: boolean;
  entity?: MdsRevision;
}

export interface Oom {
  Id?: string;
  Eic?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface Oom_Update_Result {
  success?: boolean;
  entity?: Oom;
}

export interface OomRevision {
  Id?: string;
  ReferenceId?: string;
  MdsReferenceId?: string | null;
  OdberatelReferenceId?: string | null;
  DodavatelReferenceId?: string | null;
  ValidFrom?: string;
  ValidTo?: string;
  Name?: string;
  MedMeteringPointIdentifiers?: string;
  RevisionReasonTags?: string;
  CreationDate?: string;
  LastModification?: string;
  DeletationDate?: string | null;
}

export interface Oom_QueryResult {
  oom?: Oom;
  revisionsFrom?: string;
  revisionsTo?: string;
  revisions?: OomRevision[];
}

export interface OomRevision_InsertNewRevision_Result {
  success?: boolean;
  oom?: Oom;
  revisions?: OomRevision[];
  updatedIds?: string[];
  createdId?: string;
}

export interface OomRevision_Update_Result {
  success?: boolean;
  entity?: OomRevision;
}

export interface Login_params {
  login: string;
  pass_hash: string;
}

export interface Logout_params {}

export interface GetSessionStatus_params {}

export interface RdsBillingTariff_Create_params {
  entity: RdsBillingTariff;
}

export interface RdsBillingTariff_Update_params {
  entity: RdsBillingTariff;
}

export interface RdsBillingTariff_Delete_params {
  entity: RdsBillingTariff;
}

export interface RdsBillingTariff_GetAll_params {}

export interface Dodavatel_Create_params {
  entity: Dodavatel;
}

export interface Dodavatel_Update_params {
  entity: Dodavatel;
}

export interface Dodavatel_Delete_params {
  entity: Dodavatel;
}

export interface Dodavatel_GetAll_params {}

export interface InvoiceItem_Create_params {
  entity: InvoiceItem;
}

export interface InvoiceItem_Update_params {
  entity: InvoiceItem;
}

export interface InvoiceItem_Delete_params {
  entity: InvoiceItem;
}

export interface InvoiceItemRevision_Create_params {
  entity: InvoiceItemRevision;
}

export interface InvoiceItemRevision_Update_params {
  entity: InvoiceItemRevision;
}

export interface InvoiceItemRevision_Delete_params {
  entity: InvoiceItemRevision;
}

export interface Mds_Create_params {
  entity: Mds;
}

export interface Mds_Update_params {
  entity: Mds;
}

export interface Mds_Delete_params {
  entity: Mds;
}

export interface Mds_GetAll_params {}

export interface Mds_GetByEic_params {
  mdsEic: string;
  _from?: string;
  _to?: string;
}

export interface MdsPurgeById_params {
  mdsId: string;
}

export interface MdsRevision_Create_params {
  entity: MdsRevision;
}

export interface MdsRevision_Update_params {
  entity: MdsRevision;
}

export interface MdsRevision_Delete_params {
  entity: MdsRevision;
}

export interface Oom_Create_params {
  entity: Oom;
}

export interface Oom_Update_params {
  entity: Oom;
}

export interface Oom_Delete_params {
  entity: Oom;
}

export interface OomGetByEic_params {
  oomEic: string;
  _from?: string;
  _to?: string;
}

export interface OomGetByMdsId_params {
  mdsId: string;
  _from?: string;
  _to?: string;
}

export interface OomRevision_InsertNewRevision_params {
  mdsId: string;
  oomId: string;
  entity: OomRevision;
}

export interface OomRevision_Create_params {
  entity: OomRevision;
}

export interface OomRevision_Update_params {
  entity: OomRevision;
}

export interface OomRevision_Delete_params {
  entity: OomRevision;
}

export type Login_result = boolean;

export type Logout_result = boolean;

export type GetSessionStatus_result = SessionStatus;

export type RdsBillingTariff_Create_result = RdsBillingTariff_Update_Result;

export type RdsBillingTariff_Update_result = RdsBillingTariff_Update_Result;

export type RdsBillingTariff_Delete_result = RdsBillingTariff_Update_Result;

export type RdsBillingTariff_GetAll_result = RdsBillingTariff[];

export type Dodavatel_Create_result = Dodavatel_Update_Result;

export type Dodavatel_Update_result = Dodavatel_Update_Result;

export type Dodavatel_Delete_result = Dodavatel_Update_Result;

export type Dodavatel_GetAll_result = Dodavatel[];

export type InvoiceItem_Create_result = InvoiceItem_Update_Result;

export type InvoiceItem_Update_result = InvoiceItem_Update_Result;

export type InvoiceItem_Delete_result = InvoiceItem_Update_Result;

export type InvoiceItemRevision_Create_result = InvoiceItemRevision_Update_Result;

export type InvoiceItemRevision_Update_result = InvoiceItemRevision_Update_Result;

export type InvoiceItemRevision_Delete_result = InvoiceItemRevision_Update_Result;

export type Mds_Create_result = Mds_Update_Result;

export type Mds_Update_result = Mds_Update_Result;

export type Mds_Delete_result = Mds_Update_Result;

export type Mds_GetAll_result = Mds[];

export type Mds_GetByEic_result = Mds_GetByEic_Result;

export type MdsPurgeById_result = Result;

export type MdsRevision_Create_result = MdsRevision_Update_Result;

export type MdsRevision_Update_result = MdsRevision_Update_Result;

export type MdsRevision_Delete_result = MdsRevision_Update_Result;

export type Oom_Create_result = Oom_Update_Result;

export type Oom_Update_result = Oom_Update_Result;

export type Oom_Delete_result = Oom_Update_Result;

export type OomGetByEic_result = Oom_QueryResult;

export type OomGetByMdsId_result = Oom_QueryResult[];

export type OomRevision_InsertNewRevision_result = OomRevision_InsertNewRevision_Result;

export type OomRevision_Create_result = OomRevision_Update_Result;

export type OomRevision_Update_result = OomRevision_Update_Result;

export type OomRevision_Delete_result = OomRevision_Update_Result;
