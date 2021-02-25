import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect,
} from 'react-router-dom';
import Layout from './components/layout';
import './App.global.css';
import Login from './pages/login/login';
import customFetch from './rapper/customFetch';
import { RootState } from './reducers/types';
import Search from './pages/search/search';
import Return from './pages/return/return';
import AddBook from './pages/addbook/addbook';

export default function App() {
  const token = useSelector((state: RootState) => state.user.token);
  const history = useHistory();
  const location = useLocation().pathname;

  useEffect(() => {
    customFetch();
  }, []);

  useEffect(() => {
    // 未登录状态访问除管理员登录页面以外的页面，均跳转到登录页面进行登录
    if (location !== '/login' && token === '') {
      history.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, token]);

  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/return" component={Return} />
        <Route path="/addbook" component={AddBook} />
        <Redirect from="/" to="/search" />
      </Switch>
    </Layout>
  );
}
