# jest mock 函数
使用mock函数可以测试模块之间的关联性，实现方式包括：模拟函数的实际实现、捕获对函数的调用次数、调用时传递的参数、还可以模拟调用之后返回的内容，在使用`new` 关键字实例化对象的时候还可以捕获到到构造函数的实例

## 使用mock函数的两种方式
1. 使用`jest.mock('./xxx')`来模拟某个模块，调用这个方法的时候，jest会将该模块下所有的方法都转换成`jest.fn()`
2. 使用手动模拟的方式，在对应的根目录下创建一个`__mocks__` 目录，将一些复杂的、异步的代码转换成简单的、同步的代码；只测试主要的逻辑和流程

## mock函数的mock属性
``
    {
        calls: [],
        contexts: [],
        instances: [],
        invocationCallOrder: [],
        results: []
    }
``
1. calls: 表示函数被调用了多少次,以及每次调用时传递的参数
2. contexts: 一个包含mock函数调用上下文的数组， 上下文时函数在调用时的this指向，可以使用Function.prototype.bind、Function.proptotype.call、Function.prototype.apply设置上下文
3. instances:表示被调用了多少次，以及每次调用时this的指向 
4. invocationCallOrder:表示mock函数可能会被多次的传入到同一个或者是不同的方法中，传入进去之后mock函数执行的顺序被放到这个属性中
5. results: 表示mock函数被调用了多少次，以及执行之后返回的结果