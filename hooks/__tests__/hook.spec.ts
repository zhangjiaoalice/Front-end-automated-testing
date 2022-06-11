import { Calculator } from '../index';

describe('没有使用生命周期函数时，测试相互影响测试结果的函数', () => {
    const cal = new Calculator();
    test('base Test', () => {
        expect(cal.num).toBe(0);
    });
    test('add method', () => {
        cal.add();
        expect(cal.num).toBe(1);
    });
    test('addDoubel method', () => {
        cal.addDouble();
        expect(cal.num).not.toBe(2);
        expect(cal.num).toBe(3);
    });
});

describe('使用生命周期钩子函数', () => {
    let cal;
    beforeAll(() => {
        console.log('beforeAll：在执行单元测试之前执行');
    });
    beforeEach(() => {
        console.log('beforeEach: 执行每个单元测试之前都会执行的函数');
        cal = new Calculator();
    });
    afterEach(() => {
        console.log('afterEach: 每个单元测试执行完成之后都会执行');
    });
    afterAll(() => {
        console.log('afterAll: 所有的单元测试执行完成之后执行');
        
    });
    test('test add method', () => {
        cal.add();
        cal.add();
        expect(cal.num).toBe(2);
    });
    test('test addDouble method', () => {
        cal.addDouble();
        expect(cal.num).toBe(2);
    });

    describe('分组嵌套测试:', () => {
        beforeAll(() => {
            console.log('嵌套 >>>>>>>beforeAll');
        });
        beforeEach(() => {
            console.log('嵌套 ******* beforeEach');
        });
        test('test minus method', () => {
            cal.minus();
            expect(cal.num).toBe(-1);
        })
    })
})