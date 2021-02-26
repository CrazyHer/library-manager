import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider, message } from 'antd';
import { applyMiddleware, compose, createStore } from 'redux';
import { HashRouter as Router } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import { rapperEnhancer } from './main/rapper';
import App from './main/App';
import rootReducer from './main/reducers/rootReducer';

const composedEnhancer = () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    // eslint-disable-next-line global-require
    const { createLogger } = require('redux-logger');
    return compose(rapperEnhancer(), applyMiddleware(createLogger()));
  }
  return rapperEnhancer();
};

const store = createStore(rootReducer, composedEnhancer());
// 监听主进程信息
ipcRenderer.on('ServerMessage', (e, arg) => {
  message.info(arg.msg);
});

render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
