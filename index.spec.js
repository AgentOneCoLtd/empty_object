"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
it('should return true', () => {
    expect(index_1.isEmptyObject({})).toBe(true);
});
it('should return false', () => {
    expect(index_1.isEmptyObject({ foo: 'bar' })).toBe(false);
});
it('should throw error (not object)', () => {
    const fx = () => index_1.isEmptyObject('a');
    expect(fx).toThrowError();
});
it('should throw error (array)', () => {
    const fx = () => index_1.isEmptyObject([]);
    expect(fx).toThrowError();
});
