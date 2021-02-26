const Koa = require('koa');
const cors = require('koa2-cors');
const koabody = require('koa-body');
const route = require('./controllers/router');

const app = new Koa();

app.use(cors());
app.use(koabody());

app.use(route.routes()).use(route.allowedMethods());

app.listen(process.env.port);
process.send({ msg: `服务器已启动在端口${process.env.port}上` });
