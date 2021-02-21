/* md5: 3a284641301c7bfad7f15459b0535098 */
/* Rap仓库id: 277653 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=277653
 */

import {useSelector} from 'react-redux'
import {IModels, IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'
import {fetch} from './index'

/** 请求types */
export const RequestTypes = {
  'POST/user/login': ['POST/user/login_REQUEST', 'POST/user/login_SUCCESS', 'POST/user/login_FAILURE'],

  'POST/lib/addBook': ['POST/lib/addBook_REQUEST', 'POST/lib/addBook_SUCCESS', 'POST/lib/addBook_FAILURE'],

  'POST/lib/newbook': ['POST/lib/newbook_REQUEST', 'POST/lib/newbook_SUCCESS', 'POST/lib/newbook_FAILURE'],

  'GET/lib/search': ['GET/lib/search_REQUEST', 'GET/lib/search_SUCCESS', 'GET/lib/search_FAILURE'],

  'GET/lib/borrow': ['GET/lib/borrow_REQUEST', 'GET/lib/borrow_SUCCESS', 'GET/lib/borrow_FAILURE'],

  'GET/lib/return': ['GET/lib/return_REQUEST', 'GET/lib/return_SUCCESS', 'GET/lib/return_FAILURE'],

  'GET/lib': ['GET/lib_REQUEST', 'GET/lib_SUCCESS', 'GET/lib_FAILURE'],
}

/** store中存储的数据结构 */
interface IRapperStore {
  'POST/user/login': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/user/login']['Req']
      response: IResponseTypes['POST/user/login']
    }
  >

  'POST/lib/addBook': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/lib/addBook']['Req']
      response: IResponseTypes['POST/lib/addBook']
    }
  >

  'POST/lib/newbook': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/lib/newbook']['Req']
      response: IResponseTypes['POST/lib/newbook']
    }
  >

  'GET/lib/search': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/lib/search']['Req']
      response: IResponseTypes['GET/lib/search']
    }
  >

  'GET/lib/borrow': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/lib/borrow']['Req']
      response: IResponseTypes['GET/lib/borrow']
    }
  >

  'GET/lib/return': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/lib/return']['Req']
      response: IResponseTypes['GET/lib/return']
    }
  >

  'GET/lib': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/lib']['Req']
      response: IResponseTypes['GET/lib']
    }
  >
}
export type TRapperStoreKey = keyof IRapperStore

export const useResponse = {
  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880338
   */
  'POST/user/login': function useData(
    filter?: {request?: IModels['POST/user/login']['Req']} | {(storeData: IRapperStore['POST/user/login'][0]): boolean}
  ) {
    type Req = IModels['POST/user/login']['Req']
    type Item = IRapperStore['POST/user/login'][0]
    type Res = IResponseTypes['POST/user/login']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/user/login', filter)
  },

  /**
   * 接口名：addBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880339
   */
  'POST/lib/addBook': function useData(
    filter?:
      | {request?: IModels['POST/lib/addBook']['Req']}
      | {(storeData: IRapperStore['POST/lib/addBook'][0]): boolean}
  ) {
    type Req = IModels['POST/lib/addBook']['Req']
    type Item = IRapperStore['POST/lib/addBook'][0]
    type Res = IResponseTypes['POST/lib/addBook']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/lib/addBook', filter)
  },

  /**
   * 接口名：newBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880340
   */
  'POST/lib/newbook': function useData(
    filter?:
      | {request?: IModels['POST/lib/newbook']['Req']}
      | {(storeData: IRapperStore['POST/lib/newbook'][0]): boolean}
  ) {
    type Req = IModels['POST/lib/newbook']['Req']
    type Item = IRapperStore['POST/lib/newbook'][0]
    type Res = IResponseTypes['POST/lib/newbook']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/lib/newbook', filter)
  },

  /**
   * 接口名：search
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880342
   */
  'GET/lib/search': function useData(
    filter?: {request?: IModels['GET/lib/search']['Req']} | {(storeData: IRapperStore['GET/lib/search'][0]): boolean}
  ) {
    type Req = IModels['GET/lib/search']['Req']
    type Item = IRapperStore['GET/lib/search'][0]
    type Res = IResponseTypes['GET/lib/search']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/lib/search', filter)
  },

  /**
   * 接口名：borrow
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880343
   */
  'GET/lib/borrow': function useData(
    filter?: {request?: IModels['GET/lib/borrow']['Req']} | {(storeData: IRapperStore['GET/lib/borrow'][0]): boolean}
  ) {
    type Req = IModels['GET/lib/borrow']['Req']
    type Item = IRapperStore['GET/lib/borrow'][0]
    type Res = IResponseTypes['GET/lib/borrow']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/lib/borrow', filter)
  },

  /**
   * 接口名：return
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880344
   */
  'GET/lib/return': function useData(
    filter?: {request?: IModels['GET/lib/return']['Req']} | {(storeData: IRapperStore['GET/lib/return'][0]): boolean}
  ) {
    type Req = IModels['GET/lib/return']['Req']
    type Item = IRapperStore['GET/lib/return'][0]
    type Res = IResponseTypes['GET/lib/return']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/lib/return', filter)
  },

  /**
   * 接口名：getList
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880345
   */
  'GET/lib': function useData(
    filter?: {request?: IModels['GET/lib']['Req']} | {(storeData: IRapperStore['GET/lib'][0]): boolean}
  ) {
    type Req = IModels['GET/lib']['Req']
    type Item = IRapperStore['GET/lib'][0]
    type Res = IResponseTypes['GET/lib']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/lib', filter)
  },
}

export const useAPI = {
  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880338
   */
  'POST/user/login': function useData(
    requestParams?: IModels['POST/user/login']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/user/login']['Req']>
  ) {
    type Req = IModels['POST/user/login']['Req']
    type Res = IResponseTypes['POST/user/login']
    type IFetcher = typeof fetch['POST/user/login']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/user/login',
      fetcher: fetch['POST/user/login'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：addBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880339
   */
  'POST/lib/addBook': function useData(
    requestParams?: IModels['POST/lib/addBook']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/lib/addBook']['Req']>
  ) {
    type Req = IModels['POST/lib/addBook']['Req']
    type Res = IResponseTypes['POST/lib/addBook']
    type IFetcher = typeof fetch['POST/lib/addBook']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/lib/addBook',
      fetcher: fetch['POST/lib/addBook'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：newBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880340
   */
  'POST/lib/newbook': function useData(
    requestParams?: IModels['POST/lib/newbook']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/lib/newbook']['Req']>
  ) {
    type Req = IModels['POST/lib/newbook']['Req']
    type Res = IResponseTypes['POST/lib/newbook']
    type IFetcher = typeof fetch['POST/lib/newbook']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/lib/newbook',
      fetcher: fetch['POST/lib/newbook'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：search
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880342
   */
  'GET/lib/search': function useData(
    requestParams?: IModels['GET/lib/search']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/lib/search']['Req']>
  ) {
    type Req = IModels['GET/lib/search']['Req']
    type Res = IResponseTypes['GET/lib/search']
    type IFetcher = typeof fetch['GET/lib/search']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/lib/search',
      fetcher: fetch['GET/lib/search'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：borrow
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880343
   */
  'GET/lib/borrow': function useData(
    requestParams?: IModels['GET/lib/borrow']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/lib/borrow']['Req']>
  ) {
    type Req = IModels['GET/lib/borrow']['Req']
    type Res = IResponseTypes['GET/lib/borrow']
    type IFetcher = typeof fetch['GET/lib/borrow']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/lib/borrow',
      fetcher: fetch['GET/lib/borrow'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：return
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880344
   */
  'GET/lib/return': function useData(
    requestParams?: IModels['GET/lib/return']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/lib/return']['Req']>
  ) {
    type Req = IModels['GET/lib/return']['Req']
    type Res = IResponseTypes['GET/lib/return']
    type IFetcher = typeof fetch['GET/lib/return']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/lib/return',
      fetcher: fetch['GET/lib/return'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：getList
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880345
   */
  'GET/lib': function useData(
    requestParams?: IModels['GET/lib']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/lib']['Req']>
  ) {
    type Req = IModels['GET/lib']['Req']
    type Res = IResponseTypes['GET/lib']
    type IFetcher = typeof fetch['GET/lib']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/lib',
      fetcher: fetch['GET/lib'],
      requestParams,
      extra,
    })
  },
}

export const useAllResponse = {
  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880338
   */
  'POST/user/login': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/user/login']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/user/login']['Req']
        response?: IResponseTypes['POST/user/login']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：addBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880339
   */
  'POST/lib/addBook': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/lib/addBook']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/lib/addBook']['Req']
        response?: IResponseTypes['POST/lib/addBook']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：newBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880340
   */
  'POST/lib/newbook': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/lib/newbook']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/lib/newbook']['Req']
        response?: IResponseTypes['POST/lib/newbook']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：search
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880342
   */
  'GET/lib/search': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/lib/search']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/lib/search']['Req']
        response?: IResponseTypes['GET/lib/search']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：borrow
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880343
   */
  'GET/lib/borrow': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/lib/borrow']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/lib/borrow']['Req']
        response?: IResponseTypes['GET/lib/borrow']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：return
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880344
   */
  'GET/lib/return': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/lib/return']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/lib/return']['Req']
        response?: IResponseTypes['GET/lib/return']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：getList
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880345
   */
  'GET/lib': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/lib']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/lib']['Req']
        response?: IResponseTypes['GET/lib']
      }
      return selectedState as Array<TReturnItem>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880338
   */
  'POST/user/login': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/user/login': undefined},
    })
  },

  /**
   * 接口名：addBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880339
   */
  'POST/lib/addBook': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/lib/addBook': undefined},
    })
  },

  /**
   * 接口名：newBook
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880340
   */
  'POST/lib/newbook': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/lib/newbook': undefined},
    })
  },

  /**
   * 接口名：search
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880342
   */
  'GET/lib/search': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/lib/search': undefined},
    })
  },

  /**
   * 接口名：borrow
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880343
   */
  'GET/lib/borrow': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/lib/borrow': undefined},
    })
  },

  /**
   * 接口名：return
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880344
   */
  'GET/lib/return': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/lib/return': undefined},
    })
  },

  /**
   * 接口名：getList
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=277653&mod=440680&itf=1880345
   */
  'GET/lib': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/lib': undefined},
    })
  },
}

export const rapperBaseSelector = {
  'POST/user/login': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/user/login']['Req']} | {(storeData: IRapperStore['POST/user/login'][0]): boolean}
  ) => {
    type Req = IModels['POST/user/login']['Req']
    type Res = IResponseTypes['POST/user/login']
    type Item = IRapperStore['POST/user/login'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/user/login', filter)
  },
  'POST/lib/addBook': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['POST/lib/addBook']['Req']}
      | {(storeData: IRapperStore['POST/lib/addBook'][0]): boolean}
  ) => {
    type Req = IModels['POST/lib/addBook']['Req']
    type Res = IResponseTypes['POST/lib/addBook']
    type Item = IRapperStore['POST/lib/addBook'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/lib/addBook', filter)
  },
  'POST/lib/newbook': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['POST/lib/newbook']['Req']}
      | {(storeData: IRapperStore['POST/lib/newbook'][0]): boolean}
  ) => {
    type Req = IModels['POST/lib/newbook']['Req']
    type Res = IResponseTypes['POST/lib/newbook']
    type Item = IRapperStore['POST/lib/newbook'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/lib/newbook', filter)
  },
  'GET/lib/search': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/lib/search']['Req']} | {(storeData: IRapperStore['GET/lib/search'][0]): boolean}
  ) => {
    type Req = IModels['GET/lib/search']['Req']
    type Res = IResponseTypes['GET/lib/search']
    type Item = IRapperStore['GET/lib/search'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/lib/search', filter)
  },
  'GET/lib/borrow': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/lib/borrow']['Req']} | {(storeData: IRapperStore['GET/lib/borrow'][0]): boolean}
  ) => {
    type Req = IModels['GET/lib/borrow']['Req']
    type Res = IResponseTypes['GET/lib/borrow']
    type Item = IRapperStore['GET/lib/borrow'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/lib/borrow', filter)
  },
  'GET/lib/return': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/lib/return']['Req']} | {(storeData: IRapperStore['GET/lib/return'][0]): boolean}
  ) => {
    type Req = IModels['GET/lib/return']['Req']
    type Res = IResponseTypes['GET/lib/return']
    type Item = IRapperStore['GET/lib/return'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/lib/return', filter)
  },
  'GET/lib': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/lib']['Req']} | {(storeData: IRapperStore['GET/lib'][0]): boolean}
  ) => {
    type Req = IModels['GET/lib']['Req']
    type Res = IResponseTypes['GET/lib']
    type Item = IRapperStore['GET/lib'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/lib', filter)
  },
}

export const rapperDataSelector = {
  'POST/user/login': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/user/login']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/user/login')
  },
  'POST/lib/addBook': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/lib/addBook']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/lib/addBook')
  },
  'POST/lib/newbook': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/lib/newbook']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/lib/newbook')
  },
  'GET/lib/search': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/lib/search']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/lib/search')
  },
  'GET/lib/borrow': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/lib/borrow']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/lib/borrow')
  },
  'GET/lib/return': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/lib/return']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/lib/return')
  },
  'GET/lib': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/lib']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/lib')
  },
}

export const rapperActions = RequestTypes || []
