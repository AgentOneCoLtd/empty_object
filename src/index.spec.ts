import { isEmptyObject } from './index';

it('should return true ({})', () => {
    expect(isEmptyObject({})).toBe(true);
});

it('should return true (new Object())', () => {
    expect(isEmptyObject(new Object())).toBe(true);
});

it('should return false ({ foo: \'bar\' })', () => {
    expect(isEmptyObject({ foo: 'bar' })).toBe(false);
});

it('should return false (null)', () => {
    expect(isEmptyObject(null)).toBe(false);
});

it('should return false (undefined)', () => {
    expect(isEmptyObject(undefined)).toBe(false);
});

it('should return false (str)', () => {
    expect(isEmptyObject('foo')).toBe(false);
});
