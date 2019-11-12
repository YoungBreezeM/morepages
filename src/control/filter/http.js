/**
 * Created by superman on 19/11/12.
 * http配置
 */

import axios from 'axios'
import store from '../../store/store'
import * as types from '../../store/types'
import router from '../../pages/index/router'
// axios 配置
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            // eslint-disable-next-line no-console
            // console.log(store.state.token)
            config.headers.Authorization = `token ${store.state.token}`
        }
        // eslint-disable-next-line no-console
        // console.log(config)
        return config
    },
    err => {
        return Promise.reject(err)
    },
)

// // http response 拦截器
axios.interceptors.response.use(
    response => {
        // eslint-disable-next-line no-console
        // console.log(response)
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT)
                    // 只有在当前路由不是登录页面才跳转
                    router.currentRoute.path !== 'logFail' &&
                    router.replace({
                        path: 'logFail',
                        query: { redirect: router.currentRoute.path },
                    })
            }
        }
        // eslint-disable-next-line no-console
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    },
)

export default axios