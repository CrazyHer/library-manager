const { tokenAuth } = require('../services/auth');
const library = require('../services/library');

const newBook = (ctx) => {
  if (tokenAuth(ctx.request.body.token)) {
    const { bookId, title, author, amount } = ctx.request.body;
    library.newBook(Number(bookId), title, author, Number(amount));
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
module.exports = () => newBook;
