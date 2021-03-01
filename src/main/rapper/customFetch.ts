import { overrideFetch } from './index';

export default function customFetch(prefix = '') {
  overrideFetch({
    /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
    prefix,
    fetchOption: {
      /** 全局配置请求 content-type，默认是 'application/json' */
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    },
  });
}
