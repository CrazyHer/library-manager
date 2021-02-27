const tokenStore = require('./tokenStore');

// 由于不使用数据库，就简单验证一下
const loginAuth = (id, password) => {
  if (id === 666 && password === 'admin') {
    return true;
  }
  return false;
};

const tokenAuth = (token) => {
  if (tokenStore.getId(token)) {
    return true;
  }
  return false;
};
module.exports = { loginAuth, tokenAuth };
