const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    let url = ctx.url;
    let request = ctx.request;
    // 从request 接收Get请求
    // 自动转化json
    let req_query = request.query;
    // 只是接收字符串
    let req_querystring = request.querystring;

    // 从上下文直接获取Get请求
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring,
    }
});

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})