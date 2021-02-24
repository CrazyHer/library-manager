import { overrideFetch } from './index';

export default function customFetch(token: string) {
  overrideFetch({
    /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
    prefix: 'http://rap2api.taobao.org/app/mock/277653',
    fetchOption: {
      /** 全局配置请求 content-type，默认是 'application/json' */
      headers: { 'Content-Type': 'application/json', token },
      credentials: 'same-origin',
    },
  });
}
