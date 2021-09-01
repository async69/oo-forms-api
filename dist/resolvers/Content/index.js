"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var content_types_1 = require("../../models/Content/content.types");
var fs_1 = __importDefault(require("fs"));
var readline_1 = __importDefault(require("readline"));
var columns = 'DOT_NUMBER","LEGAL_NAME","DBA_NAME","CARRIER_OPERATION","HM_FLAG","PC_FLAG","PHY_STREET","PHY_CITY","PHY_STATE","PHY_ZIP","PHY_COUNTRY","MAILING_STREET","MAILING_CITY","MAILING_STATE","MAILING_ZIP","MAILING_COUNTRY","TELEPHONE","FAX","EMAIL_ADDRESS","MCS150_DATE","MCS150_MILEAGE","MCS150_MILEAGE_YEAR","ADD_DATE","OIC_STATE","NBR_POWER_UNIT","DRIVER_TOTAL"';
var line = '10000,"POWELL DISTRIBUTING CO INC","","A","N","N","","","","","US","","","","","","","","","25-JUN-20","10000","2019","01-JUN-74","OR","1","1"';
var line2 = '1000015,"DAREN STONE","","C","N","N","","","","","US","","","","","","","","","22-JAN-02","0","","22-JAN-02","CO","1","1"';
var line3 = '1000014,"HACKWELL TRUCKING LLC","","C","N","N","8767 HOLMAN CIR","ARVADA","CO","80005","US","8767 HOLMAN CIR","ARVADA","CO","80005","US","(303) 423-3329","","GHACKWE@COMCAST.NET","26-JAN-20","18000","2019","22-JAN-02","CO","1","1"';
function processLineByLine() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, count, data, rl_1, rl_1_1, line_1, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fileStream = fs_1.default.createReadStream(fs_1.default.realpathSync('./src/blob/file.txt'));
                    rl = readline_1.default.createInterface({
                        input: fileStream,
                        crlfDelay: Infinity
                    });
                    count = 0;
                    data = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    rl_1 = __asyncValues(rl);
                    _b.label = 2;
                case 2: return [4, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3, 5];
                    line_1 = rl_1_1.value;
                    if (count === 100000)
                        return [2, data];
                    data.push(line_1);
                    count++;
                    _b.label = 4;
                case 4: return [3, 2];
                case 5: return [3, 12];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(rl_1_1 && !rl_1_1.done && (_a = rl_1.return))) return [3, 9];
                    return [4, _a.call(rl_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7];
                case 11: return [7];
                case 12: return [2, data];
            }
        });
    });
}
var ContentResolver = {
    Query: {
        fetchContents: function (_, prop) {
            return __awaiter(this, void 0, void 0, function () {
                var data, database, keys, resultArray, collection;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, processLineByLine()];
                        case 1:
                            data = _a.sent();
                            database = [];
                            data.forEach(function (dataItem) {
                                var foundArray = dataItem.split(',');
                                database.push(foundArray);
                            });
                            keys = Object.keys(content_types_1.IContentEnum);
                            resultArray = [];
                            database.forEach(function (filteredArray, _idx) {
                                var resultObj = {};
                                keys.forEach(function (key, keyIdx) {
                                    resultObj[key] = filteredArray[keyIdx].replace("\"", "").replace("\"", "");
                                });
                                resultArray.push(resultObj);
                            });
                            collection = __spreadArray([], resultArray);
                            return [2, collection];
                    }
                });
            });
        },
        fetchWithFilters: function (_, _a) {
            var prop = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var collection, results, dateResults, numberOfPages, remainder, start_index;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, ContentResolver.Query.fetchContents({}, {})];
                        case 1:
                            collection = _b.sent();
                            results = [];
                            collection.forEach(function (data) {
                                if (prop.DRIVER_TOTAL) {
                                    if (Number(data.DRIVER_TOTAL) === prop.DRIVER_TOTAL) {
                                        results.push(data);
                                    }
                                }
                                if (prop.NBR_POWER_UNIT) {
                                    if (Number(data.NBR_POWER_UNIT) === prop.NBR_POWER_UNIT)
                                        results.push(data);
                                }
                                if (prop.PHY_STATE) {
                                    if (String(data.PHY_STATE) === prop.PHY_STATE)
                                        results.push(data);
                                }
                                if (prop.CARRIER_OPERATION) {
                                    console.log("hereeee");
                                    if (String(data.CARRIER_OPERATION) === prop.CARRIER_OPERATION)
                                        results.push(data);
                                }
                                if (prop.PC_FLAG) {
                                    if (String(data.PC_FLAG) === prop.PC_FLAG)
                                        results.push(data);
                                }
                            });
                            dateResults = [];
                            results.forEach(function (data) {
                                var dataTime = new Date(data.ADD_DATE).getTime();
                                var fromTime = new Date(prop.ADD_DATE.from).getTime();
                                var toTime = new Date(prop.ADD_DATE.to).getTime();
                                if (dataTime <= toTime && dataTime >= fromTime) {
                                    dateResults.push(data);
                                }
                            });
                            numberOfPages = dateResults.length / 50;
                            remainder = dateResults.length % 50;
                            if (remainder > 0 || remainder < 1)
                                numberOfPages += 1;
                            start_index = (prop.PAGE_NUMBER - 1) * 50;
                            return [2, {
                                    count: Math.floor(numberOfPages),
                                    results: dateResults.slice(start_index, start_index + 50)
                                }];
                    }
                });
            });
        }
    }
};
exports.default = ContentResolver;
