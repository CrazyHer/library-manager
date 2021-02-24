import { Button, Dropdown, Layout, Menu, MenuItemProps } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { RootState } from '../reducers/types';
import style from './layout.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Index = (props: any) => {
  const location = useLocation().pathname;
  const history = useHistory();
  const { children } = props;

  const userID = useSelector((state: RootState) => state.user.userID);

  const onSelect: MenuItemProps['onSelect'] = (e) => {
    history.push(e.key.toString());
  };

  const onLogoff = () => {};

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={onLogoff} type="text">
          退出登录
        </Button>
      </Menu.Item>
    </Menu>
  );

  if (location === '/login') return children;
  return (
    <Layout>
      <Layout.Header className={style.header}>
        <div>
          <Link to="/userinfo">
            <h1>图书管理系统</h1>
          </Link>
        </div>

        <Dropdown overlay={menu}>
          <div className={style['user-tag']}>
            <p>管理员：{userID}</p>
          </div>
        </Dropdown>
      </Layout.Header>

      <Layout>
        <Layout.Sider theme="light">
          <Menu
            mode="vertical-left"
            theme="light"
            selectedKeys={[location]}
            style={{ textAlign: 'center' }}
            onSelect={onSelect}
          >
            <Menu.Item key="/search">查找借阅</Menu.Item>
            <Menu.Item key="/return">归还图书</Menu.Item>
            <Menu.Item key="/addbook">采编入库</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout style={{ backgroundColor: 'white' }}>
          <Layout.Content className={style.content}>{children}</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Index;
