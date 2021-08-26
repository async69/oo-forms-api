import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchContents: [ContentDoc]
    fetchWithFilters(input: FilterOptions!): [ContentDoc]
  }

  extend type Mutation {
    postContent(input: IContentInput!): ContentDoc
    editContent(input: IContentEdit!): ContentDoc
    removeContent(_id: String!): ContentDoc
  }

  type ContentDoc {
    _id: String
    DOT_NUMBER: String
    LEGAL_NAME: String
    DBA_NAME: String
    CARRIER_OPERATION: String
    HM_FLAG: String
    PC_FLAG: String
    PHY_STREET: String
    PHY_CITY: String
    PHY_STATE: String
    PHY_ZIP: String
    PHY_COUNTRY: String
    MAILING_STREET: String
    MAILING_CITY: String
    MAILING_STATE: String
    MAILING_ZIP: String
    MAILING_COUNTRY: String
    TELEPHONE: String
    FAX: String
    EMAIL_ADDRESS: String
    MCS150_DATE: String
    MCS150_MILEAGE: String
    MCS150_MILEAGE_YEAR: String
    ADD_DATE: String
    OIC_STATE: String
    NBR_POWER_UNIT: String
    DRIVER_TOTAL: String
    error: ErrorType
    createdAt: String
    updatedAt: String
  }

  input FilterOptions {
    ADD_DATE: DateFilter!
    NBR_POWER_UNIT: Int
    DRIVER_TOTAL: Int
    PHY_STATE: String
    CARRIER_OPERATION: String
    PC_FLAG: String
  }

  input DateFilter {
    from: String
    to: String
  }

  input IContentInput {
    DOT_NUMBER: String
    LEGAL_NAME: String
    DBA_NAME: String
    CARRIER_OPERATION: String
    HM_FLAG: String
    PC_FLAG: String
    PHY_STREET: String
    PHY_CITY: String
    PHY_STATE: String
    PHY_ZIP: String
    PHY_COUNTRY: String
    MAILING_STREET: String
    MAILING_CITY: String
    MAILING_STATE: String
    MAILING_ZIP: String
    MAILING_COUNTRY: String
    TELEPHONE: String
    FAX: String
    EMAIL_ADDRESS: String
    MCS150_DATE: String
    MCS150_MILEAGE: String
    MCS150_MILEAGE_YEAR: String
    ADD_DATE: String
    OIC_STATE: String
    NBR_POWER_UNIT: String
    DRIVER_TOTAL: String
  }

  input IContentEdit {
    _id: String!
    DOT_NUMBER: String
    LEGAL_NAME: String
    DBA_NAME: String
    CARRIER_OPERATION: String
    HM_FLAG: String
    PC_FLAG: String
    PHY_STREET: String
    PHY_CITY: String
    PHY_STATE: String
    PHY_ZIP: String
    PHY_COUNTRY: String
    MAILING_STREET: String
    MAILING_CITY: String
    MAILING_STATE: String
    MAILING_ZIP: String
    MAILING_COUNTRY: String
    TELEPHONE: String
    FAX: String
    EMAIL_ADDRESS: String
    MCS150_DATE: String
    MCS150_MILEAGE: String
    MCS150_MILEAGE_YEAR: String
    ADD_DATE: String
    OIC_STATE: String
    NBR_POWER_UNIT: String
    DRIVER_TOTAL: String
  }

`