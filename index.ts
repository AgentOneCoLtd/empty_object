export type emptyObject = {};

export function isEmptyObject(val: any): val is emptyObject {
    if (!(val instanceof Object)) {
        throw new Error('OBJECT_EXPECTED');
    }

    if (val instanceof Array) {
        throw new Error('OBJECT_EXPECTED');
    }

    return Object.keys(val as Object).length === 0;
}
