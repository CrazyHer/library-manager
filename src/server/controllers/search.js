const { tokenAuth } = require('../services/auth');
const library = require('../services/library');

const search = (ctx) => {
  if (tokenAuth(ctx.request.body.token)) {
    const res = library.searchBook(ctx.request.body.bookId);
    if (res.length === 0) {
      ctx.body = {
        code: 0,
        message: 'success',
        isFound: false,
        data: [],
      };
    } else {
      ctx.body = {
        code: 0,
        message: 'success',
        isFound: true,
        data: res,
      };
    }
  } else {
    ctx.body = {
      code: -1,
      message: 'token无效',
    };
  }
};
module.exports = () => search;
