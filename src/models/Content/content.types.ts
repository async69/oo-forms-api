import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

const columns = [
'DOT_NUMBER"',      '"LEGAL_NAME"',
'"DBA_NAME"',       '"CARRIER_OPERATION"',
'"HM_FLAG"',        '"PC_FLAG"',
'"PHY_STREET"',     '"PHY_CITY"',
'"PHY_STATE"',      '"PHY_ZIP"',
'"PHY_COUNTRY"',    '"MAILING_STREET"',
'"MAILING_CITY"',   '"MAILING_STATE"',
'"MAILING_ZIP"',    '"MAILING_COUNTRY"',
'"TELEPHONE"',      '"FAX"',
'"EMAIL_ADDRESS"',  '"MCS150_DATE"',
'"MCS150_MILEAGE"', '"MCS150_MILEAGE_YEAR"',
'"ADD_DATE"',       '"OIC_STATE"',
'"NBR_POWER_UNIT"', '"DRIVER_TOTAL"'
]

export interface IDateFilter {
  from: string
  to: string
}

export interface GQLFilterOptions {
  input: IFilterOptions
}

export interface IFilterOptions {
  ADD_DATE: IDateFilter
  NBR_POWER_UNIT: number
  DRIVER_TOTAL: number
  PHY_STATE: string
  CARRIER_OPERATION: string
  PC_FLAG: string
  PAGE_NUMBER: number
}

export interface IContent {
  DOT_NUMBER: string
  LEGAL_NAME: string
  DBA_NAME: string
  CARRIER_OPERATION: string
  HM_FLAG: string
  PC_FLAG: string
  PHY_STREET: string
  PHY_CITY: string
  PHY_STATE: string
  PHY_ZIP: string
  PHY_COUNTRY: string
  MAILING_STREET: string
  MAILING_CITY: string
  MAILING_STATE: string
  MAILING_ZIP: string
  MAILING_COUNTRY: string
  TELEPHONE: string
  FAX: string
  EMAIL_ADDRESS: string
  MCS150_DATE: string
  MCS150_MILEAGE: string
  MCS150_MILEAGE_YEAR: string
  ADD_DATE: string
  OIC_STATE: string
  NBR_POWER_UNIT: string
  DRIVER_TOTAL: string
}

export interface IContentDoc extends IContent {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export enum IContentEnum {
  DOT_NUMBER = "DOT_NUMBER",
  LEGAL_NAME = "LEGAL_NAME",
  DBA_NAME = "DBA_NAME",
  CARRIER_OPERATION = "CARRIER_OPERATION",
  HM_FLAG = "HM_FLAG",
  PC_FLAG = "PC_FLAG",
  PHY_STREET = "PHY_STREET",
  PHY_CITY = "PHY_CITY",
  PHY_STATE = "PHY_STATE",
  PHY_ZIP = "PHY_ZIP",
  PHY_COUNTRY = "PHY_COUNTRY",
  MAILING_STREET = "MAILING_STREET",
  MAILING_CITY = "MAILING_CITY",
  MAILING_STATE = "MAILING_STATE",
  MAILING_ZIP = "MAILING_ZIP",
  MAILING_COUNTRY = "MAILING_COUNTRY",
  TELEPHONE = "TELEPHONE",
  FAX = "FAX",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  MCS150_DATE = "MCS150_DATE",
  MCS150_MILEAGE = "MCS150_MILEAGE",
  MCS150_MILEAGE_YEAR = "MCS150_MILEAGE_YEAR",
  ADD_DATE = "ADD_DATE",
  OIC_STATE = "OIC_STATE",
  NBR_POWER_UNIT = "NBR_POWER_UNIT",
  DRIVER_TOTAL = "DRIVER_TOTAL",
}

export interface IContentInput {
  DOT_NUMBER: string
  LEGAL_NAME: string
  DBA_NAME: string
  CARRIER_OPERATION: string
  HM_FLAG: string
  PC_FLAG: string
  PHY_STREET: string
  PHY_CITY: string
  PHY_STATE: string
  PHY_ZIP: string
  PHY_COUNTRY: string
  MAILING_STREET: string
  MAILING_CITY: string
  MAILING_STATE: string
  MAILING_ZIP: string
  MAILING_COUNTRY: string
  TELEPHONE: string
  FAX: string
  EMAIL_ADDRESS: string
  MCS150_DATE: string
  MCS150_MILEAGE: string
  MCS150_MILEAGE_YEAR: string
  ADD_DATE: string
  OIC_STATE: string
  NBR_POWER_UNIT: string
  DRIVER_TOTAL: string
}

export interface IContentEdit extends IContentInput {
  _id: string
}

export interface GQLPostContent {
  input: IContentInput
}

export interface GQLEditContent {
  input: IContentEdit
}

export interface IContentDocument extends IContent, Document {}

export interface IContentModel extends IContent, Model<IContentDocument> { }