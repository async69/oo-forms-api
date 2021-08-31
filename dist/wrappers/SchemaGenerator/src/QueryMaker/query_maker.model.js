"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_maker_types_1 = require("./query_maker.types");
var QueryMaker = (function () {
    function QueryMaker(queryInput) {
        var _this = this;
        this.isExtended = true;
        this.queryType = query_maker_types_1.QueryTypes.QUERY;
        this.getBuiltSingleSchema = function (singleQuery) {
            var totalSchema = "\t" + singleQuery.queryName + "(";
            singleQuery.inputs.forEach(function (input) {
                totalSchema += input.name + ": " + input.model.getSchemaName() + (input.isRequired ? "!" : "") + ", ";
            });
            totalSchema = totalSchema.slice(0, totalSchema.length - 2);
            totalSchema += ")";
            if (singleQuery.returnType.type === query_maker_types_1.ReturnTypes.ARRAY) {
                totalSchema += ": [";
                singleQuery.returnType.isObjectRequired ?
                    totalSchema += singleQuery.returnType.model.getSchemaName() + "!" :
                    totalSchema += singleQuery.returnType.model.getSchemaName();
                totalSchema += "]";
                singleQuery.returnType.isArrayRequired ?
                    totalSchema += "!" : null;
            }
            else {
                totalSchema += ": ";
                totalSchema += singleQuery.returnType.isObjectRequired ?
                    singleQuery.returnType.model.getSchemaName() + "!" :
                    singleQuery.returnType.model.getSchemaName();
            }
            return totalSchema;
        };
        this.getBuiltSchema = function () {
            var totalSchema = (_this.isExtended ? 'extend ' : '') + ("type " + _this.queryType + " {\n");
            _this.queries.forEach(function (query) {
                totalSchema += _this.getBuiltSingleSchema(query) + "\n";
            });
            totalSchema += "\n}";
            return totalSchema;
        };
        this.queries = queryInput.queries;
        if (queryInput.isExtended) {
            this.isExtended = Boolean(queryInput.isExtended);
        }
        queryInput.queryType ? this.queryType = queryInput.queryType : null;
    }
    return QueryMaker;
}());
exports.default = QueryMaker;
