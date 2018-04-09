const router = require('koa-router')();
module.exports = router.get('/',async ctx=>{
    ctx.body='page页面';
}).get('/404', async ctx=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ctx=>{
  ctx.cookies.set(
    'pid',
    'this is a cookie',
    {
      domain:'localhost',
      path:'/page/helloworld',
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  );
  ctx.body = 'helloworld page!'
}).post('/helloworld',async ctx=>{
    ctx.body = ctx.request.body;
})