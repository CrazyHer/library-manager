import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <p>主页</p>
      <Link to="/login">登录页面</Link>
    </div>
  );
};
export default Index;
