"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
var schema_1 = __importDefault(require("./schema/"));
var resolvers_1 = __importDefault(require("./resolvers/"));
var graphql_tools_1 = require("graphql-tools");
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_1.default, resolvers: resolvers_1.default
});
exports.default = schema;
