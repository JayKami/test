const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'Myname', 'JSPang', {
                // 域名
                domain: '127.0.0.1',
                // path: '/index',
                //cookie有效时间
                maxAge:  1000 * 60 * 60,
                //失效时间
                expires: new Date('2018-12-31'),
                // 只允许http有效
                httpOnly: false,
                // 是否允许重写
                overwrite: false,
            }
        );
        ctx.body = 'Cookie is ok';
    } else {
        if (ctx.cookies.get('Myname')) {
            ctx.body = ctx.cookies.get('Myname');
        } else {
            ctx.body = 'Cookie is none';
        }

        //ctx.body = "Hello World";
    }
});

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})