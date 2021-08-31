"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GraphQLMerger = (function () {
    function GraphQLMerger(input) {
        var _this = this;
        this.typeDefs = [];
        this.resolvers = [];
        this.getTypeDefs = function () {
            return _this.typeDefs;
        };
        this.getResolvers = function () {
            return _this.resolvers;
        };
        this.attachSchema = function (schema) {
            _this.typeDefs.push(schema);
        };
        this.attachResolver = function (resolver) {
            _this.resolvers.push(resolver);
        };
        if (input) {
            this.typeDefs = input.typeDefs;
            this.resolvers = input.resolvers;
        }
    }
    return GraphQLMerger;
}());
exports.default = GraphQLMerger;
