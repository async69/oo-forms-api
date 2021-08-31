"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnique = void 0;
var getUnique = function (firstArray, secondArray, identifier) {
    if (firstArray === void 0) { firstArray = []; }
    if (secondArray === void 0) { secondArray = []; }
    if (identifier === void 0) { identifier = "_id"; }
    var usedIDs = firstArray.map(function (item) { return item[identifier]; });
    secondArray.forEach(function (item) {
        var index = usedIDs.findIndex(function (used) { return used === item[identifier]; });
        if (index < 0) {
            usedIDs.push(item[identifier]);
        }
    });
    return usedIDs.map(function (_id) {
        var firstIndex = firstArray.findIndex(function (item) { return item[identifier] === _id; });
        var secondIndex = secondArray.findIndex(function (item) { return item[identifier] === _id; });
        if (firstIndex >= 0) {
            return firstArray[firstIndex];
        }
        else if (secondIndex >= 0) {
            return secondArray[secondIndex];
        }
    });
};
exports.getUnique = getUnique;
