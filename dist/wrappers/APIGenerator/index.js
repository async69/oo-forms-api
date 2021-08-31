"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var formatError_1 = require("../../helpers/formatError");
var API = (function () {
    function API(modelInput) {
        var _this = this;
        this.schema = "";
        this.getSchema = function () { return _this.schema; };
        this.setSchema = function (schemaString) { return _this.schema = schemaString; };
        this.getModel = function () { return _this.model; };
        this.setModel = function (model) { return _this.model = model; };
        this.defaultCallback = function (data, err) {
            if (err === void 0) { err = null; }
            return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2, null];
            }); });
        };
        this.getAPICalls = function () { return ({
            Fetch: function (callback) {
                if (callback === void 0) { callback = _this.defaultCallback; }
                return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, ((_a = this.model) === null || _a === void 0 ? void 0 : _a.find({}))];
                            case 1:
                                response = _b.sent();
                                callback(response, null);
                                return [2, response];
                        }
                    });
                });
            },
            Find: function (finObj, callback) {
                if (finObj === void 0) { finObj = {}; }
                if (callback === void 0) { callback = _this.defaultCallback; }
                return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, ((_a = this.model) === null || _a === void 0 ? void 0 : _a.find(finObj))];
                            case 1:
                                response = _b.sent();
                                callback(response, null);
                                return [2, response];
                        }
                    });
                });
            },
            FetchOne: function (tagValue, fetchTag, callback) {
                if (fetchTag === void 0) { fetchTag = "_id"; }
                if (callback === void 0) { callback = _this.defaultCallback; }
                return __awaiter(_this, void 0, void 0, function () {
                    var foundItem;
                    var _a;
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4, ((_b = this.model) === null || _b === void 0 ? void 0 : _b.findOne((_a = {}, _a[fetchTag] = tagValue, _a)))];
                            case 1:
                                foundItem = _c.sent();
                                if (!foundItem) {
                                    callback(null, formatError_1.getError(400, "Item could not be found"));
                                    return [2, formatError_1.getError(400, "Item could not be found")];
                                }
                                callback(foundItem);
                                return [2, foundItem];
                        }
                    });
                });
            },
            Edit: function (prop, callback) {
                if (callback === void 0) { callback = _this.defaultCallback; }
                return __awaiter(_this, void 0, void 0, function () {
                    var foundItem, objectProps, item, editResponse;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4, ((_a = this.model) === null || _a === void 0 ? void 0 : _a.findOne({ _id: prop._id }))];
                            case 1:
                                foundItem = _c.sent();
                                if (!foundItem) {
                                    callback(null, formatError_1.getError(400, "Item could not be found"));
                                    return [2, formatError_1.getError(400, "Item could not be found")];
                                }
                                objectProps = {};
                                for (item in foundItem.toJSON()) {
                                    if (item) {
                                        objectProps[item] = foundItem[item];
                                    }
                                }
                                editResponse = __assign(__assign({}, prop), { updatedAt: String(new Date()) });
                                return [4, ((_b = this.model) === null || _b === void 0 ? void 0 : _b.updateOne({ _id: prop._id }, editResponse).then(function () {
                                        var data = __assign(__assign({}, objectProps), editResponse);
                                        callback(data, null);
                                        return data;
                                    }).catch(function (err) {
                                        callback(null, formatError_1.getError(500, err));
                                        return formatError_1.getError(500, err);
                                    }))];
                            case 2: return [2, _c.sent()];
                        }
                    });
                });
            },
            Create: function (prop, callback) {
                if (callback === void 0) { callback = _this.defaultCallback; }
                return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, ((_a = this.model) === null || _a === void 0 ? void 0 : _a.create(prop).then(function (newUser) {
                                    callback(newUser, null);
                                    return newUser;
                                }).catch(function (err) {
                                    callback(null, formatError_1.getError(500, err));
                                    return formatError_1.getError(500, err);
                                }))];
                            case 1: return [2, _b.sent()];
                        }
                    });
                });
            },
            Remove: function (_id, callback) {
                if (callback === void 0) { callback = _this.defaultCallback; }
                return __awaiter(_this, void 0, void 0, function () {
                    var foundItem, objectProps, item;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4, ((_a = this.model) === null || _a === void 0 ? void 0 : _a.findOne({ _id: _id }))];
                            case 1:
                                foundItem = _c.sent();
                                if (!foundItem) {
                                    callback(null, formatError_1.getError(400, "Item could not be found"));
                                    return [2, formatError_1.getError(400, "Item could not be found")];
                                }
                                objectProps = {};
                                for (item in foundItem.toJSON()) {
                                    if (item) {
                                        objectProps[item] = foundItem[item];
                                    }
                                }
                                return [4, ((_b = this.model) === null || _b === void 0 ? void 0 : _b.deleteOne({ _id: _id }).then(function () {
                                        callback(objectProps, null);
                                        return objectProps;
                                    }).catch(function (err) {
                                        callback(null, formatError_1.getError(500, err));
                                        return formatError_1.getError(500, err);
                                    }))];
                            case 2: return [2, _c.sent()];
                        }
                    });
                });
            },
            RemoveAll: function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, ((_a = this.model) === null || _a === void 0 ? void 0 : _a.deleteMany({}).then(function () {
                                return [];
                            }).catch(function (err) {
                                return formatError_1.getError(500, err);
                            }))];
                        case 1:
                            _b.sent();
                            return [2, []];
                    }
                });
            }); },
        }); };
        if (modelInput) {
            this.model = modelInput;
        }
    }
    return API;
}());
exports.default = API;
