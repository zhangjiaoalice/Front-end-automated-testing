jest.mock('../index.ts');
import { fetchData, promiseFun } from "../index";
const { runCallback } = jest.requireActual('../index')

describe('异步函数、promise、回调函数测试', () => {
    test('fetchData test', (done) => {
        fetchData(data => {
            expect(data).toEqual({
                age: 18
            })
            done();
        })
    });
    /** async/await */
    test('async/await 测试', async () => {
        await fetchData(data => {
            expect(data).toEqual({
                age: 18
            })
        });
    });

    /** promise test */
    test('promise test', () => {
        expect.assertions(1);
        return promiseFun().then(data => {
            expect(data).toEqual({
                msg: 'aaaa',
            })
        })
    });

    /** callback */
    test('callback 回调函数测试', () => {
        const fun = jest.fn(() => {
            // 自定义返回值
            return '啊哈';
        }); // jest 模拟函数
        runCallback(fun);
        // console.log('mock 函数属性', fun.mock);
        expect(fun.mock.calls.length).toBe(1);
    });
    
});