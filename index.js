const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();//post访问解析表单数据
const compose = require('koa-compose');//中间件合并
const static = require('koa-static');//处理静态资源中间件
const path = require('path');
const errHandler = require('./middlewares/error');//加载自定义错误中间件
const loggerAsync = require('./middlewares/logger');//加载自定义日志中间件
const router = require('./middlewares/router');//加载自定义路由中间件 

const app = new Koa();
const staticPath ='./static';
const middleware = compose([loggerAsync,errHandler,bodyParser]);
app.use(middleware);
app.use(static(path.join(__dirname,staticPath)));
app.use(router.routes()).use(router.allowedMethods());
// app.use();
app.listen(8080);
console.log('Internet Server is starting at port 8080');
