const { tokenAuth } = require('../services/auth');
const library = require('../services/library');

const getList = (ctx) => {
  if (tokenAuth(ctx.query.token)) {
    ctx.body = {
      code: 0,
      message: 'success',
      data: library.getBookList(),
    };
  } else {
    ctx.body = {
      code: -1,
      message: 'token无效',
    };
  }
};

module.exports = () => getList;
