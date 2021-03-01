const fs = require('fs');
const path = require('path');
const { Compare, AVLTree } = require('../lib/avlTree');

const compareFunc = (a, b) => {
  if (a.bookId === b.bookId) {
    return Compare.EQUALS;
  }
  return a.bookId < b.bookId ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const avlTree = new AVLTree(compareFunc);

// 加载保存的本地文件数据初始化图书馆图书清单
const initializeLibraryData = async () => {
  let dataPath;
  try {
    dataPath = require.resolve('../../bookData.json');
    const booksData = await fs.readFileSync(dataPath, 'utf-8');
    try {
      const bd = JSON.parse(booksData);
      if (bd && bd[0]) {
        bd.forEach((element) => {
          avlTree.insert({
            bookId: element.bookId,
            title: element.title,
            author: element.author,
            remains: element.remains,
            total: element.total,
            record: element.record,
          });
        });
      }
    } catch (error) {
      // 文件格式错误
      console.error(error);
    }
  } catch (error) {
    // 图书数据文件不存在
    dataPath = path.join(__dirname, '../../bookData.json');
    await fs.writeFileSync(dataPath, '');
  }
};

initializeLibraryData();

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
  // 使用中序遍历从小到大输出顺序结果
  avlTree.inOrderTraverse((v) => {
    res.push(v);
  });
  return res;
};

process.on('message', async (e) => {
  // 进程退出，保存图书清单
  if (e.msg === 'exit') {
    await fs.writeFileSync(
      path.join(__dirname, '../../bookData.json'),
      JSON.stringify(getBookList(), null, 2)
    );
    process.exit(0);
  }
});

module.exports = {
  newBook,
  searchBook,
  addBook,
  borrowBook,
  returnBook,
  getBookList,
};
