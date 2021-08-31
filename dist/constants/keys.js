"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbName = process.env.DATABASE_NAME || "sebsib_db";
var deployedDBUri = process.env.DEPLOYED === "false" ?
    "mongodb://localhost:27017/sebsib_db" :
    "mongodb+srv://yab:Lumberjack_6969@test-y8c98.mongodb.net/" + dbName + "?authSource=admin&replicaSet=test-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
exports.default = {
    deployedDBUri: deployedDBUri
};
