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