"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatError = exports.getError = void 0;
var getError = function (type, message) {
    return exports.formatError({ type: type, message: message });
};
exports.getError = getError;
var formatError = function (error) {
    console.error(error);
    return { error: error };
};
exports.formatError = formatError;
