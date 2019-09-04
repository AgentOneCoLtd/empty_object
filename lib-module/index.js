/**
 * check if val is emptyObject type ({}) or not
 * @param  val anything
 * @return     true if emptyObject, else false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEmptyObject(val) {
    if (!(val instanceof Object) || val instanceof Array) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(val).length === 0;
}
//# sourceMappingURL=index.js.map