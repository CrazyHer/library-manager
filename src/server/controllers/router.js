const Router = require('@koa/router');
const index = require('./index');
const addBook = require('./addBook');
const borrow = require('./borrow');
const getList = require('./getList');
const login = require('./login');
const newBook = require('./newBook');
const returnBook = require('./returnBook');
const search = require('./search');

const route = new Router();

route.get('/', index());
route.post('/user/login', login());
route.post('/lib/addBook', addBook());
route.post('/lib/newbook', newBook());
route.get('/lib/search', search());
route.post('/lib/borrow', borrow());
route.get('/lib/return', returnBook());
route.get('/lib', getList());

module.exports = route;
