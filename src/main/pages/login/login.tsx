import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, message, Radio } from 'antd';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import styles from './Login.css';
import sduIcon from '../../assets/logo.png';
import { fetch } from '../../rapper';
import { updateUserAction } from './login_redux';
import customFetch from '../../rapper/customFetch';

interface LoginFormData {
  autoLogin: boolean;
  password: string;
  userID: string;
}

interface ServerConfig {
  isLocal: boolean;
  data: string;
}

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [isSetupPage, setSetupPage] = useState<boolean>(false);
  const [serverOption, setServerOption] = useState<number>(0);

  const dipatch = useDispatch();
  const history = useHistory();

  // 如果本地存储有服务器设置信息，则加载它。否则要求用户设置服务器信息
  useEffect(() => {
    const serverConfig = localStorage.getItem('serverConfig');

    if (serverConfig) {
      // 服务器设置信息存在
      const sc = JSON.parse(serverConfig) as ServerConfig;
      if (sc.isLocal) {
        // 启动本地服务器
        ipcRenderer.send('StartServer', {
          msg: sc.data,
        });
        customFetch(`http://localhost:${sc.data}`);
      } else {
        // 设置远程服务器
        customFetch(sc.data);
      }
    } else {
      message.warn('请先设置服务器信息');
      // 服务器设置信息不存在
      // 转到服务器设置界面
      setSetupPage(true);
    }
  }, []);

  const onFinish = async (e: LoginFormData) => {
    setLoading(true);
    await fetch['POST/user/login']({
      id: Number(e.userID),
      password: e.password,
    })
      .then((res) => {
        if (res.code === 0) {
          dipatch(updateUserAction(res.data.token, Number(e.userID)));
          if (e.autoLogin) localStorage.setItem('loginData', JSON.stringify(e));
          setLoading(false);
          return history.push('/');
        }
        setLoading(false);
        return message.error('用户名或密码错误!');
      })
      .catch((err) => {
        message.error('登陆失败!');
        setLoading(false);
        return new Error(err);
      });
  };

  const getInitialValues = (): LoginFormData => {
    let res: LoginFormData = {
      userID: '',
      password: '',
      autoLogin: false,
    };
    try {
      if (typeof localStorage.getItem('loginData') === 'string')
        res = JSON.parse(localStorage.getItem('loginData') as string);
    } catch (error) {
      Error(error);
    }
    return res;
  };

  return (
    <div className={styles['login-body']}>
      <div className={styles['login-logo']}>
        <img src={sduIcon} alt="logo" />
        <span />
        <h1>图书管理系统</h1>
      </div>
      {!isSetupPage ? (
        <div className={styles['login-form']}>
          <h3>管理员登录</h3>

          <Form onFinish={onFinish} initialValues={getInitialValues()}>
            <Form.Item
              label="账号"
              name="userID"
              validateFirst
              rules={[
                { required: true, message: '请输入管理员账号！' },
                {
                  type: 'integer',
                  transform: (v) => Number(v),
                  message: '账号无效！',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码！' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="autoLogin" valuePropName="checked">
              <Checkbox style={{ float: 'right' }}>记住密码</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                className={styles['login-btn']}
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                登录
              </Button>
              <br />
              <Button
                type="link"
                className={styles['register-link']}
                onClick={() => setSetupPage(true)}
              >
                服务器设置
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <div className={styles['login-form']}>
          <h3>服务器设置</h3>
          <div>
            <Radio.Group
              onChange={(e) => setServerOption(e.target.value)}
              defaultValue={serverOption}
            >
              <Radio value={0}>连接远程服务器</Radio>
              <Radio value={1}>启动本机服务器</Radio>
            </Radio.Group>

            {serverOption === 0 ? (
              <Form
                onFinish={(v) => {
                  localStorage.setItem(
                    'serverConfig',
                    JSON.stringify({
                      isLocal: false,
                      data: v.serverAddress,
                    } as ServerConfig)
                  );
                  customFetch(v.serverAddress);
                  message.success('设置保存成功');
                }}
              >
                <Form.Item
                  name="serverAddress"
                  label="远程服务器地址"
                  rules={[{ required: true, message: '请填写服务器地址' }]}
                >
                  <Input width={8} placeholder="http://服务器IP:端口号" />
                </Form.Item>
                <Button onClick={() => setSetupPage(false)}>返回</Button>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form>
            ) : (
              <Form
                onFinish={(v) => {
                  // 端口设置保存至本地
                  localStorage.setItem(
                    'serverConfig',
                    JSON.stringify({
                      isLocal: true,
                      data: v.localPort,
                    } as ServerConfig)
                  );
                  ipcRenderer.send('StartServer', {
                    msg: v.localPort,
                  });
                  customFetch(`http://localhost:${v.localPort}`);
                }}
              >
                <Form.Item
                  name="localPort"
                  label="设置本机服务器端口"
                  rules={[{ required: true, message: '请填写端口号' }]}
                >
                  <Input
                    type="number"
                    width={4}
                    min={1025}
                    max={65535}
                    placeholder="服务器端口号"
                  />
                </Form.Item>
                <Button onClick={() => setSetupPage(false)}>返回</Button>
                <Button type="primary" htmlType="submit">
                  启动
                </Button>
              </Form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
