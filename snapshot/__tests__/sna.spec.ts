import { config } from '../index.config';

describe('快照测试:', () => {
    // test('生成快照', () => {
    //     expect(config).toMatchSnapshot({
    //         date: expect.any(Date)
    //     });
    // });
    test('行内的快照测试', () => {
        expect(config).toMatchInlineSnapshot({
  date: expect.any(Date) }, `
Object {
  "baseUrl": "./",
  "date": Any<Date>,
  "dir": "/dist",
  "filename": "testFile",
}
`);
    });
})