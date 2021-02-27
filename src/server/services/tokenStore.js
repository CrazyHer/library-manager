class TokenStore {
  tokens = [];

  // 生成一个用户id对应的token并返回
  generateToken = (id) => {
    // 一段随机字符串
    const token = Math.random().toString(36).substr(2);

    const res = this.tokens.find((v) => v.id === id);
    // 如果该用户id已经存在，则重新为该id生成一个token
    if (res) {
      res.token = token;
      return token;
    }
    this.tokens.push({ id, token });
    return token;
  };

  // 根据id获取token
  getToken = (id) => {
    const res = this.tokens.find((v) => v.id === id);
    if (res) {
      return res.token;
    }
    return undefined;
  };

  // 根据token获取id
  getId = (token) => {
    const res = this.tokens.find((v) => v.token === token);
    if (res) {
      return res.id;
    }
    return undefined;
  };
}

const tokenStore = new TokenStore();

module.exports = tokenStore;
