"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleSchemaModel = (function () {
    function SingleSchemaModel(schema, type) {
        var _this = this;
        this.getSchema = function () { return _this.schema; };
        this.getBuiltSchema = function () {
            var totalString = '';
            var Schema = _this.schema;
            totalString += _this.schemaType + " " + Schema.name + " {\n";
            for (var key in Schema.props) {
                totalString += "\t" + key + ": " + Schema.props[key] + "\n";
            }
            totalString += '}';
            return totalString;
        };
        this.getSchemaName = function () { return _this.schema.name; };
        this.schema = schema;
        this.schemaType = type;
    }
    return SingleSchemaModel;
}());
exports.default = SingleSchemaModel;
