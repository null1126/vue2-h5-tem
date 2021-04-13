import axios from 'axios'
import httpCode from './httpCode'
import { Toast, Notify } from 'vant'

let loading
const BASE_URL = process.env.VUE_APP_BASE_URL
let instance = axios.create({ timeout: 1000 * 20, baseURL: BASE_URL })

// 请求拦截器
instance.interceptors.request.use(config => {
    config.loading = config.loading == undefined ? true : config.loading
    if(config.loading){
        loading = Toast.loading({
            message: config.loadingText || '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
        })
    }

    const token = ''
    token && (config.headers.Authorization = token)
    return config
}, error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(config => {
    if(config.config.loading) loading.clear()
    if(config.status === 200){
        return Promise.resolve(config.data)
    } else {
        return Promise.reject(config)
    }
}, error => {
    const { response } = error;
    if (response) {
        //请求已发出，但是不在2xx的范围
        httpCode(response.status)
        if(response.config.loading) loading.clear()
        return Promise.reject(response);
    } else {
        //处理断网的情况 请求超时或断网时 更新state的network状态
        Notify({ type: 'danger', message:'网络链接错误' })
    }

    if(response.config.loading) loading.clear()
})

export default instance
