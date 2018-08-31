import { isEmptyObject } from './index';

it('should return true', () => {
    expect(isEmptyObject({})).toBe(true);
});

it('should return false', () => {
    expect(isEmptyObject({ foo: 'bar' })).toBe(false);
});

it('should throw error (not object)', () => {
    const fx = () => isEmptyObject('a');

    expect(fx).toThrowError();
});

it('should throw error (array)', () => {
    const fx = () => isEmptyObject([]);

    expect(fx).toThrowError();
});
