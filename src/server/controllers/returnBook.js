const { tokenAuth } = require('../services/auth');
const library = require('../services/library');

const returnBook = (ctx) => {
  if (tokenAuth(ctx.query.token)) {
    const { bookId, userId } = ctx.query;
    library.returnBook(bookId, userId);
    ctx.body = {
      code: 0,
      message: 'success',
    };
  } else {
    ctx.body = {
      code: -1,
      message: 'token无效',
    };
  }
};
module.exports = () => returnBook;
