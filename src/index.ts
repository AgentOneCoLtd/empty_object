export type emptyObject = {};

/**
 * check if val is emptyObject type ({}) or not
 * @param  val anything
 * @return     true if emptyObject, else false
 */
// tslint:disable-next-line no-any
export function isEmptyObject(val: any): val is emptyObject {
    if (!(val instanceof Object) || val instanceof Array) {
        return false;
    }

    return Object.keys(<Object>val).length === 0;
}
