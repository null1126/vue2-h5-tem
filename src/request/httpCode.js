import { Notify } from 'vant';

/** 
 * 请求失败后的错误统一处理 
 * @param {请求失败的状态码} status
 */
export default function (code) {
    // 请求错误信息
    let errorInfo = ''
    //判断参数来输出错误信息
    switch (code) {
        case 400:
            errorInfo = "错误请求";
            break;
        case 401:
            //跳转到登录页
            errorInfo = '访问令牌无效或已过期';
            break;
        case 403:
            errorInfo = '登录过期，请重新登录';
            break;
        case 404:
            errorInfo = '请求资源不存在';
            break;
        case 405:
            errorInfo = '请求方法未允许';
            break;
        case 408:
            errorInfo = '请求超时';
            break;
        case 500:
            errorInfo = '访问服务失败';
            break;
        case 501:
            errorInfo = '未实现';
            break;
        case 502:
            errorInfo = '无效网关';
            break;
        case 503:
            errorInfo = '服务不可用';
            break;
        default:
            errorInfo = "连接错误";
            break;
    }

    Notify({
        type: 'danger',
        message: errorInfo
    })
}