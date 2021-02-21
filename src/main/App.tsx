import { ConfigProvider } from 'antd';
import { rapperEnhancer } from 'rap/runtime/reduxLib';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import zhCN from 'antd/lib/locale/zh_CN';

import './App.global.css';
import Index from './pages/index';
import Login from './pages/login/login';
import rootReducer from './reducers/rootReducer';

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

export default function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}
