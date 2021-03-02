const Koa = require('koa');
const cors = require('koa2-cors');
const koabody = require('koa-body');
const route = require('./controllers/router');

try {
  const app = new Koa();

  app.use(cors());
  app.use(koabody());

  app.use(route.routes()).use(route.allowedMethods());

  app.listen(process.env.port);
} catch (error) {
  process.send({ msg: 'QAQ! 服务器出错了' });
  console.error(error);
}
process.send({ msg: `服务器已启动在端口${process.env.port}上` });
