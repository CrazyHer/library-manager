const { tokenAuth } = require('../services/auth');
const library = require('../services/library');

const addBook = (ctx) => {
  if (tokenAuth(ctx.request.body.token)) {
    library.addBook(ctx.body.bookId);
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
module.exports = () => addBook;
