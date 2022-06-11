jest.mock('../index.ts');
import { Animal } from '../index'

test('class test', () => {
    const dog = new Animal('Tom');
    dog.run();
    // console.log('dog:', dog.run.mock);
    expect(dog.run.mock.calls.length).toBe(1)
})