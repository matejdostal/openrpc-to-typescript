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

export interface Login_Params {
  login: string;
  pass_hash: string;
}

export interface Logout_Params {}

export interface GetSessionStatus_Params {}

export interface RdsBillingTariff_Create_Params {
  entity: RdsBillingTariff;
}

export interface RdsBillingTariff_Update_Params {
  entity: RdsBillingTariff;
}

export interface RdsBillingTariff_Delete_Params {
  entity: RdsBillingTariff;
}

export interface RdsBillingTariff_GetAll_Params {}

export interface Dodavatel_Create_Params {
  entity: Dodavatel;
}

export interface Dodavatel_Update_Params {
  entity: Dodavatel;
}

export interface Dodavatel_Delete_Params {
  entity: Dodavatel;
}

export interface Dodavatel_GetAll_Params {}

export interface InvoiceItem_Create_Params {
  entity: InvoiceItem;
}

export interface InvoiceItem_Update_Params {
  entity: InvoiceItem;
}

export interface InvoiceItem_Delete_Params {
  entity: InvoiceItem;
}

export interface InvoiceItemRevision_Create_Params {
  entity: InvoiceItemRevision;
}

export interface InvoiceItemRevision_Update_Params {
  entity: InvoiceItemRevision;
}

export interface InvoiceItemRevision_Delete_Params {
  entity: InvoiceItemRevision;
}

export interface Mds_Create_Params {
  entity: Mds;
}

export interface Mds_Update_Params {
  entity: Mds;
}

export interface Mds_Delete_Params {
  entity: Mds;
}

export interface Mds_GetAll_Params {}

export interface Mds_GetByEic_Params {
  mdsEic: string;
  _from?: string;
  _to?: string;
}

export interface MdsPurgeById_Params {
  mdsId: string;
}

export interface MdsRevision_Create_Params {
  entity: MdsRevision;
}

export interface MdsRevision_Update_Params {
  entity: MdsRevision;
}

export interface MdsRevision_Delete_Params {
  entity: MdsRevision;
}

export interface Oom_Create_Params {
  entity: Oom;
}

export interface Oom_Update_Params {
  entity: Oom;
}

export interface Oom_Delete_Params {
  entity: Oom;
}

export interface OomGetByEic_Params {
  oomEic: string;
  _from?: string;
  _to?: string;
}

export interface OomGetByMdsId_Params {
  mdsId: string;
  _from?: string;
  _to?: string;
}

export interface OomRevision_InsertNewRevision_Params {
  mdsId: string;
  oomId: string;
  entity: OomRevision;
}

export interface OomRevision_Create_Params {
  entity: OomRevision;
}

export interface OomRevision_Update_Params {
  entity: OomRevision;
}

export interface OomRevision_Delete_Params {
  entity: OomRevision;
}

export type Login_Result = boolean;

export type Logout_Result = boolean;

export type GetSessionStatus_Result = SessionStatus;

export type RdsBillingTariff_Create_Result = RdsBillingTariff_Update_Result;

export type RdsBillingTariff_Delete_Result = RdsBillingTariff_Update_Result;

export type RdsBillingTariff_GetAll_Result = RdsBillingTariff[];

export type Dodavatel_Create_Result = Dodavatel_Update_Result;

export type Dodavatel_Delete_Result = Dodavatel_Update_Result;

export type Dodavatel_GetAll_Result = Dodavatel[];

export type InvoiceItem_Create_Result = InvoiceItem_Update_Result;

export type InvoiceItem_Delete_Result = InvoiceItem_Update_Result;

export type InvoiceItemRevision_Create_Result = InvoiceItemRevision_Update_Result;

export type InvoiceItemRevision_Delete_Result = InvoiceItemRevision_Update_Result;

export type Mds_Create_Result = Mds_Update_Result;

export type Mds_Delete_Result = Mds_Update_Result;

export type Mds_GetAll_Result = Mds[];

export type MdsPurgeById_Result = Result;

export type MdsRevision_Create_Result = MdsRevision_Update_Result;

export type MdsRevision_Delete_Result = MdsRevision_Update_Result;

export type Oom_Create_Result = Oom_Update_Result;

export type Oom_Delete_Result = Oom_Update_Result;

export type OomGetByEic_Result = Oom_QueryResult;

export type OomGetByMdsId_Result = Oom_QueryResult[];

export type OomRevision_Create_Result = OomRevision_Update_Result;

export type OomRevision_Delete_Result = OomRevision_Update_Result;
