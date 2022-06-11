import { num, str, bool, arr, set, demoFunc } from '../index';

describe(`Matcher useage`, () => {
    /** number */
    test('toBe test', () => {
      expect(num).toBe(225);
    });
    test('toBeGreaterThan test' , () => {
      expect(num).toBeGreaterThan(2);
    });
    test('toBeLessThan test', () => {
        expect(num).toBeLessThan(250);
    });
    test('toBeGreaterThanOrEqual test', () => {
        expect(num).toBeGreaterThanOrEqual(225);
    });

    /** string */
    test('toEqual test', () => {
        expect(str).toEqual('Hello jest');
    });
    test('toEqual test', () => {
        expect(str).toMatch(/Hello jest/);
    });

    /** boolean */
    test('Boolean test', () => {
        expect(bool).toBeFalsy();
        expect(bool).not.toBeTruthy();
    });

    /** arr */
    test('arr toContain test', () => {
        expect(arr).toContain('apple');
        expect(arr.length).toEqual(3);
    });

    /** set */
    test('set toContain test', () => {
        expect(set).toContain('ccc');
    });

    /** function */
    test('test function called', () => {
        const res = demoFunc();
        expect(res).toBe(123);
    });
});
