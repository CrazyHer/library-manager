const { tokenAuth } = require('../services/auth');
const library = require('../services/library');

const borrow = (ctx) => {
  if (tokenAuth(ctx.request.body.token)) {
    const { bookId, userId, returnDate } = ctx.request.body;
    library.borrowBook(bookId, userId, returnDate);
    ctx.body = {
      code: 0,
      message: 'success!',
    };
  } else {
    ctx.body = {
      code: -1,
      message: 'token无效',
    };
  }
};

module.exports = () => borrow;
