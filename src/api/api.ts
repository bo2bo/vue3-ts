import request from '@/utils/request'
// 表格
export function getTableList(params: any): Promise<any> {
    return request({
        url: '/table/getList',
        method: 'post',
        data: params
    })
}
export function deleteTableList(params: any): Promise<any> {
    return request({
        url: '/table/delete',
        method: 'post',
        data: params
    })
}
export function updateTableList(params: any): Promise<any> {
    return request({
        url: '/table/update',
        method: 'post',
        data: params
    })
}
export function getColorMap(): Promise<any> {
    return request({
        url: '/map/getColorMap',
        method: 'get'
    })
}
export function getSpotMap(): Promise<any> {
    return request({
        url: '/map/getSpotMap',
        method: 'get'
    })
}
export function getMap(): Promise<any> {
    return request({
        url: '/map/getMap',
        method: 'get'
    })
}