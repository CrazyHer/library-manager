/* md5: 2ac52a506fe7d396e3d0a36d2f362cd4 */
/* Rap仓库id: 277653 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=277653
 */

import * as commonLib from 'rap/runtime/commonLib'
import * as reduxLib from 'rap/runtime/reduxLib'
import {RequestTypes} from './redux'

export interface IModels {
  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880338
   */
  'POST/user/login': {
    Req: {
      /**
       * 管理员账号
       */
      id: number
      /**
       * 密码
       */
      password: string
    }
    Res: {
      message: string
      data: {
        token: string
      }
      /**
       * 0代表成功,-1用户名或密码错误
       */
      code: number
    }
  }

  /**
   * 接口名：addBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880339
   */
  'POST/lib/addBook': {
    Req: {
      /**
       * 书号
       */
      bookId: number
      token: string
      /**
       * 新增量
       */
      amount: string
    }
    Res: {
      message: string
      code: number
    }
  }

  /**
   * 接口名：newBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880340
   */
  'POST/lib/newbook': {
    Req: {
      /**
       * 书号
       */
      bookId: number
      token: string
      /**
       * 书名
       */
      title: string
      /**
       * 作者
       */
      author: string
      /**
       * 库存量
       */
      amount: number
    }
    Res: {
      message: string
    }
  }

  /**
   * 接口名：search
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880342
   */
  'GET/lib/search': {
    Req: {
      /**
       * 书号
       */
      bookId: number
      token: string
    }
    Res: {
      message: string
      /**
       * 库存中是否存在
       */
      isFound: boolean
      /**
       * 若存在，则返回该书信息
       */
      data: {
        /**
         * 书号
         */
        bookId: number
        /**
         * 书名
         */
        title: string
        /**
         * 作者
         */
        author: string
        /**
         * 现存量
         */
        remains: number
        /**
         * 总量
         */
        total: number
        record: {
          /**
           * 借阅证号
           */
          userId: number
          /**
           * 还书日期
           */
          returnDate: string
        }[]
      }
    }
  }

  /**
   * 接口名：borrow
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880343
   */
  'POST/lib/borrow': {
    Req: {
      token: string
      /**
       * 书号
       */
      bookId: number
      /**
       * 借阅证号
       */
      userID: number
      /**
       * 归还日期
       */
      returnDate: string
    }
    Res: {
      message: string
    }
  }

  /**
   * 接口名：return
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880344
   */
  'GET/lib/return': {
    Req: {
      token: string
      /**
       * 书号
       */
      bookId: number
      /**
       * 还书者借阅证号
       */
      userId: number
    }
    Res: {
      message: string
    }
  }

  /**
   * 接口名：getList
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880345
   */
  'GET/lib': {
    Req: {
      token: string
    }
    Res: {
      message: string
      data: {
        /**
         * 书号
         */
        bookId: number
        /**
         * 书名
         */
        title: string
        /**
         * 作者
         */
        author: string
        /**
         * 现存量
         */
        remains: number
        /**
         * 总量
         */
        total: number
        /**
         * 若现存量<总量，则有借阅记录
         */
        record: {
          /**
           * 借阅证号
           */
          userId: number
          /**
           * 归还日期
           */
          returnDate: string
        }[]
      }[]
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'POST/user/login': ResSelector<IModels['POST/user/login']['Res']>
  'POST/lib/addBook': ResSelector<IModels['POST/lib/addBook']['Res']>
  'POST/lib/newbook': ResSelector<IModels['POST/lib/newbook']['Res']>
  'GET/lib/search': ResSelector<IModels['GET/lib/search']['Res']>
  'POST/lib/borrow': ResSelector<IModels['POST/lib/borrow']['Res']>
  'GET/lib/return': ResSelector<IModels['GET/lib/return']['Res']>
  'GET/lib': ResSelector<IModels['GET/lib']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  if (!extraConfig || !extraConfig.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch'
    )
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)
  const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
    const {extra} = requestParams
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams)
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: {...requestParams, modelName, types: RequestTypes[modelName]},
      }
      return reduxLib.dispatchAction(action, rapperFetch)
    }
  }

  return {
    /**
     * 接口名：login
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880338
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/user/login': (req?: IModels['POST/user/login']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/user/login', {
        url: '/user/login',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/user/login']>
    },

    /**
     * 接口名：addBook
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880339
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/lib/addBook': (req?: IModels['POST/lib/addBook']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/lib/addBook', {
        url: '/lib/addBook',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/lib/addBook']>
    },

    /**
     * 接口名：newBook
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880340
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/lib/newbook': (req?: IModels['POST/lib/newbook']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/lib/newbook', {
        url: '/lib/newbook',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/lib/newbook']>
    },

    /**
     * 接口名：search
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880342
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/lib/search': (req?: IModels['GET/lib/search']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/lib/search', {
        url: '/lib/search',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/lib/search']>
    },

    /**
     * 接口名：borrow
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880343
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/lib/borrow': (req?: IModels['POST/lib/borrow']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/lib/borrow', {
        url: '/lib/borrow',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/lib/borrow']>
    },

    /**
     * 接口名：return
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880344
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/lib/return': (req?: IModels['GET/lib/return']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/lib/return', {
        url: '/lib/return',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/lib/return']>
    },

    /**
     * 接口名：getList
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880345
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/lib': (req?: IModels['GET/lib']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/lib', {
        url: '/lib',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/lib']>
    },
  }
}
