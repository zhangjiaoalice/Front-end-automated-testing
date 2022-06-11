const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


// 对于任意请求，app将调用该异步函数处理请求
app.use(async (ctx, next) => {
    console.log('request methods:', ctx.request.method);
    console.log('request url', ctx.request.url);
    await next();
});

// 处理路由
router.get('/', async (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
        data: {
            age: 18,
        }
    }
    await next();
});

router.get('/msg', async (ctx, next) => {
    ctx.body = {
        msg: 'aaaa'
    }
    await next();
})

router.get('/list', async(ctx, next) => {
    ctx.body = {
        data: {
            list: [1, 3, 5]
        }
    }
    await next();
})


// 注册路由
app.use(router.routes());

app.listen(3000, () => {
    console.log('server is running...')
})