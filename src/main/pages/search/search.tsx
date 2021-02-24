import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetch, Models } from '../../rapper';
import { RootState } from '../../reducers/types';

const Search = () => {
  const [data, setData] = useState<Models['GET/lib']['Res']['data']>();
  const token = useSelector((state: RootState) => state.user.token);
  useEffect(() => {
    if (token) {
      fetch['GET/lib']()
        .then((res) => setData(res.data))
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div>
      <p>查找借阅</p>
      <Link to="/login">登录页面</Link>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
export default Search;
