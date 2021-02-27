const { Compare, AVLTree } = require('../lib/avlTree');

const compareFunc = (a, b) => {
  if (a.bookId === b.bookId) {
    return Compare.EQUALS;
  }
  return a.bookId < b.bookId ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const avlTree = new AVLTree(compareFunc);

const newBook = (bookId, title, author, amount) => {
  avlTree.insert({
    bookId,
    title,
    author,
    remains: Number(amount),
    total: Number(amount),
    record: [],
  });
};

const searchBook = (bookId) => {
  const res = avlTree.search({ bookId: Number(bookId) });
  return res;
};

const addBook = (bookId, amount) => {
  const res = searchBook(bookId);
  res.remains += Number(amount);
  res.total += Number(amount);
};

const borrowBook = (bookId, userId, returnDate) => {
  const res = searchBook(bookId);
  res.remains -= 1;
  res.record.push({ userId, returnDate });
};

const returnBook = (bookId, userId) => {
  const res = searchBook(bookId);
  if (res.record[0]) {
    let amount = res.record.length;
    res.record = res.record.filter((v) => Number(v.userId) !== Number(userId));
    amount -= res.record.length;
    res.remains += amount;
  }
};

const getBookList = () => {
  const res = [];
  avlTree.preOrderTraverse((v) => {
    res.push(v);
  });
  return res;
};

module.exports = {
  newBook,
  searchBook,
  addBook,
  borrowBook,
  returnBook,
  getBookList,
};
