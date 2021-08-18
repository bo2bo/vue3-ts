import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus';
// import store from '@/store'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import { getBaseUrl } from '@/utils/baseUrl'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    // baseURL: process.env.VUE_APP_BASE_API || getBaseUrl(),
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 10000
})
// request拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    // 是否需要设置 token
    const isToken: boolean = (config.headers || {}).isToken === false
    if (getToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        let url: string = config.url + '?';
        for (const propName of Object.keys(config.params)) {
            const value: string = config.params[propName];
            const part: string = encodeURIComponent(propName) + "=";
            if (value !== null && typeof (value) !== "undefined") {
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        const params: string = propName + '[' + key + ']';
                        const subPart: string = encodeURIComponent(params) + "=";
                        url += subPart + encodeURIComponent(value[key]) + "&";
                    }
                } else {
                    url += part + encodeURIComponent(value) + "&";
                }
            }
        }
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    return config
}, (error: any) => {
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(async (res: AxiosResponse) => {
    // 未设置状态码则默认成功状态
    const code: number = res.data.code || 200;
    // 获取错误信息
    const msg: string = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 401) {
        ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            console.log('重新登录')
        })
    } else if (code === 500) {
        ElMessage({
            message: msg,
            type: 'error'
        })
        return Promise.reject(new Error(msg))
    } else if (code !== 200) {
        console.log(msg)
        return Promise.reject('error')
    } else {
        return res.data
    }
}, error => {
    let { message } = error;
    if (message == "Network Error") {
        message = "网络繁忙 请稍后再试";
    }
    else if (message.includes("timeout")) {
        message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({
        message: message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

export default service
