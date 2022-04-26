export type Nullable<T> = T | null;

export type Voidable<T> = T | null | undefined;

export interface IpcResponse<T> {
  data?: T;
  error?: any;
}

export type TicketType =
  | "legacyPartnerHub"
  | "featureAsk"
  | "nonTechIssue"
  | "techIssue";

export type BaseTicketFromData = {
  area:
    | "Account"
    | "Analytics & Reports"
    | "Contents"
    | "EE & Infra"
    | "Engagement"
    | "Monetization"
    | "UX"
    | "WordPress";
  issue: string;
  status: "Active" | "Resolved" | "Mitigate";
  externalTeam:
    | "/"
    | "BDT"
    | "BD"
    | "DnI."
    | "FMT"
    | "Creator Growth"
    | "Ingestion"
    | "Moderation"
    | "Community"
    | "MSN News"
    | "CCMT"
    | "XPay"
    | "CMS";
  owner: string;
  note: string;
  comment: string
}

export type TechIssueFormData = {
  severity: `S${1 | 2 | 3 | 4}`;
  ticket: string;
  customerImpact: false;
} & BaseTicketFromData;

export type NonTechIssueFormData = {
  severity: `S${1 | 2 | 3 | 4}`;
  ticket: string;
  customerImpact: false;
} & BaseTicketFromData;

export type FeatureAskFormData = BaseTicketFromData

export type LegacyPartnerHubFormData = BaseTicketFromData

export type TicketFormData = TechIssueFormData & NonTechIssueFormData & FeatureAskFormData & LegacyPartnerHubFormData

export type TicketData<T = BaseTicketFromData> = {
  id: string;
  createTime: number;
  updateTime: number;
  ticketFormData: T;
};
