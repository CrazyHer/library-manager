const Router = require('@koa/router');
const index = require('./index');

const route = new Router();
route.get('/', index());
module.exports = route;
