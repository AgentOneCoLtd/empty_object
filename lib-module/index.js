/**
 * check if val is emptyObject type ({}) or not
 * @param  val anything
 * @return     true if emptyObject, else false
 */
// tslint:disable-next-line no-any
export function isEmptyObject(val) {
    if (!(val instanceof Object) || val instanceof Array) {
        return false;
    }
    return Object.keys(val).length === 0;
}
//# sourceMappingURL=index.js.map