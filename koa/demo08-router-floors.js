const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// 子级路由
let home = new Router();
home.get('/jspang', async(ctx) => {
    ctx.body = "Home JSPang page";
}).get('/todo', async(ctx) => {
    ctx.body = 'Home Todo page';
})

let page = new Router();
page.get('/jspang', async(ctx) => {
    ctx.body = "Page JSPang page";
}).get('/todo', async(ctx) => {
    ctx.body = 'Page Todo page';
})

// 父级路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());


app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000, () => {
    console.log('starting at port 3000');
})