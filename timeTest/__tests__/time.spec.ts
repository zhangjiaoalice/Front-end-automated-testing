import { runTimeout, moreTimers } from '../index';
jest.useFakeTimers(); // jest 模拟定时器

describe('定时器测试', () => {
    afterAll(() => {
        jest.clearAllMocks();
    })
    test('setTimeout test', () => {
        const fun = jest.fn();
        runTimeout(fun);
        jest.runAllTimers();
        console.log(fun.mock);
        expect(fun.mock.calls.length).toBe(1);
        expect(fun).toHaveBeenCalledTimes(1);
    });
    test.only('more timers test', () => {
        const fun = jest.fn();
        moreTimers(fun);
        jest.runOnlyPendingTimers();
        expect(fun).toHaveBeenCalledTimes(1);
        jest.runOnlyPendingTimers();
        expect(fun).toHaveBeenCalledTimes(2);
    });
})