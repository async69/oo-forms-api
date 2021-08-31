"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IContentEnum = exports.Query = void 0;
var mongoose_1 = require("mongoose");
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return mongoose_1.Query; } });
var columns = [
    'DOT_NUMBER"', '"LEGAL_NAME"',
    '"DBA_NAME"', '"CARRIER_OPERATION"',
    '"HM_FLAG"', '"PC_FLAG"',
    '"PHY_STREET"', '"PHY_CITY"',
    '"PHY_STATE"', '"PHY_ZIP"',
    '"PHY_COUNTRY"', '"MAILING_STREET"',
    '"MAILING_CITY"', '"MAILING_STATE"',
    '"MAILING_ZIP"', '"MAILING_COUNTRY"',
    '"TELEPHONE"', '"FAX"',
    '"EMAIL_ADDRESS"', '"MCS150_DATE"',
    '"MCS150_MILEAGE"', '"MCS150_MILEAGE_YEAR"',
    '"ADD_DATE"', '"OIC_STATE"',
    '"NBR_POWER_UNIT"', '"DRIVER_TOTAL"'
];
var IContentEnum;
(function (IContentEnum) {
    IContentEnum["DOT_NUMBER"] = "DOT_NUMBER";
    IContentEnum["LEGAL_NAME"] = "LEGAL_NAME";
    IContentEnum["DBA_NAME"] = "DBA_NAME";
    IContentEnum["CARRIER_OPERATION"] = "CARRIER_OPERATION";
    IContentEnum["HM_FLAG"] = "HM_FLAG";
    IContentEnum["PC_FLAG"] = "PC_FLAG";
    IContentEnum["PHY_STREET"] = "PHY_STREET";
    IContentEnum["PHY_CITY"] = "PHY_CITY";
    IContentEnum["PHY_STATE"] = "PHY_STATE";
    IContentEnum["PHY_ZIP"] = "PHY_ZIP";
    IContentEnum["PHY_COUNTRY"] = "PHY_COUNTRY";
    IContentEnum["MAILING_STREET"] = "MAILING_STREET";
    IContentEnum["MAILING_CITY"] = "MAILING_CITY";
    IContentEnum["MAILING_STATE"] = "MAILING_STATE";
    IContentEnum["MAILING_ZIP"] = "MAILING_ZIP";
    IContentEnum["MAILING_COUNTRY"] = "MAILING_COUNTRY";
    IContentEnum["TELEPHONE"] = "TELEPHONE";
    IContentEnum["FAX"] = "FAX";
    IContentEnum["EMAIL_ADDRESS"] = "EMAIL_ADDRESS";
    IContentEnum["MCS150_DATE"] = "MCS150_DATE";
    IContentEnum["MCS150_MILEAGE"] = "MCS150_MILEAGE";
    IContentEnum["MCS150_MILEAGE_YEAR"] = "MCS150_MILEAGE_YEAR";
    IContentEnum["ADD_DATE"] = "ADD_DATE";
    IContentEnum["OIC_STATE"] = "OIC_STATE";
    IContentEnum["NBR_POWER_UNIT"] = "NBR_POWER_UNIT";
    IContentEnum["DRIVER_TOTAL"] = "DRIVER_TOTAL";
})(IContentEnum = exports.IContentEnum || (exports.IContentEnum = {}));
