const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();//post访问解析表单数据
const compose = require('koa-compose');//中间件合并
const static = require('koa-static');//处理静态资源中间件
const session = require('koa-session');//session中间件
const path = require('path');
const errHandler = require('./middlewares/error');//加载自定义错误中间件
const loggerAsync = require('./middlewares/logger');//加载自定义日志中间件
const router = require('./middlewares/router');//加载自定义路由中间件 


const app = new Koa();
const staticPath ='./static';
app.keys = ['some secret hurr'];
const CONFIG = {11111
    key: 'koa:sess',   //cookie key (default is koa:sess)
    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true,  //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true,   //签名默认true
    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false,  //(boolean) renew session when session is nearly expired,
 };
const middleware = compose([loggerAsync,errHandler,bodyParser]);
app.use(middleware);
app.use(session(CONFIG,app));
app.use(static(path.join(__dirname,staticPath)));
app.use(router.routes()).use(router.allowedMethods());
// app.use();
app.listen(8080);
console.log('Internet Server is starting at port 8080');
