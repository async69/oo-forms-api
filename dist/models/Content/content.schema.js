"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    name: {
        type: String, unique: false
    },
    phoneNumber: {
        type: String, unique: false
    },
    email: {
        type: String, unique: false
    },
    password: {
        type: String, unique: false
    },
    hasUserDetail: {
        type: Boolean, unique: false, default: false
    },
    userType: {
        type: String, unique: false
    },
    createdAt: {
        type: String, unique: false, default: String(new Date())
    },
    updatedAt: {
        type: String, unique: false, default: String(new Date())
    }
});
exports.default = User;
