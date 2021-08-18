import request from '@/utils/request'
// 登录方法
export function loginFun(params: LoginParams): Promise<any> {
    return request({
        url: '/login',
        method: 'post',
        data: params
    })
}

// 退出方法
export function logoutFun(): Promise<any> {
    return request({
        url: '/logout',
        method: 'post'
    })
}

// 获取验证码
export function getCodeImgFun(): Promise<any> {
    return request({
        url: '/captchaImage',
        method: 'get'
    })
}

export interface LoginParams {
    username: string;
    password: string;
    code: string;
    uuid: string;
}