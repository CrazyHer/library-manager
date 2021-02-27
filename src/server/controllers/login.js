const { loginAuth } = require('../services/auth');
const tokenStore = require('../services/tokenStore');

const login = (ctx) => {
  if (loginAuth(ctx.request.body.id, ctx.request.body.password)) {
    // 为该用户生成一个id并返回
    const token = tokenStore.generateToken(ctx.request.body.id);
    ctx.body = {
      code: 0,
      message: 'success',
      data: {
        token,
      },
    };
  } else {
    ctx.body = {
      code: -1,
      message: '用户名或密码错误',
    };
  }
};

module.exports = () => login;
