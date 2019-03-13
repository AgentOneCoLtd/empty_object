"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * check if val is emptyObject type ({}) or not
 * @param  val anything
 * @return     true if emptyObject, else false
 */
// tslint:disable-next-line no-any
function isEmptyObject(val) {
    if (!(val instanceof Object) || val instanceof Array) {
        return false;
    }
    return Object.keys(val).length === 0;
}
exports.isEmptyObject = isEmptyObject;
//# sourceMappingURL=index.js.map