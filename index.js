"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmptyObject(val) {
    if (!(val instanceof Object)) {
        throw new Error('OBJECT_EXPECTED');
    }
    if (val instanceof Array) {
        throw new Error('OBJECT_EXPECTED');
    }
    return Object.keys(val).length === 0;
}
exports.isEmptyObject = isEmptyObject;
