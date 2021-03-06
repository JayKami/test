const Koa = require('koa');
const app = new Koa();
// 轮子
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());

app.use(async(ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        // 显示表单页面, submit之后就是post请求
        let html = `
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br>
                <p>age</p>
                <input name="age" /><br>
                <p>website</p>
                <input name="website" /><br>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // 直接通过request.body 不需要解析就能获得post的json
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = '<h1>404!</h1>';
    }
});

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
});
