import axios from '../request/index'

// 请求配置项 选填
let config = {
    loading: true, // 是否需要loading
    loadingText: '正在请求...' // loading下方文字
}

/* =============================================== 注册相关 =============================================== */

// 获取协议
export const getServiceProtocol = () => axios.get('/achwallet/rule/serviceProtocol?language=chinese', config)

// 获取验证滑块
export const getVerificationInfo = (data) => axios.get(`/achwallet/verification/getVerificationInfo?language=chinese&account=${data.account}&code=${data.code}`)

// 发送验证码
export const getCode = (data) => axios.post('/achwallet/user/v2/getCode', data, config)

// 用户注册
export const register = (data) => axios.post('/achwallet/user/v1/redPacketsPageRegister', data, config)

// 合并
// export const getAllList = (data) => Promise.all([getList(), getListPost(data)])




/* =============================================== 发红包 =============================================== */

// 获取主题及币种
export const getRedPackeConfig = () => axios.post('/achwallet/redPackets/v1/config', config)




/* =============================================== 领红包 =============================================== */

// 领取红包
export const openRedPackets = () => axios.post('/achwallet/redPackets/v1/open', config)

