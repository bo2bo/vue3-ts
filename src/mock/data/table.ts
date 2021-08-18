import { Random } from 'mockjs'
interface ListType {
    id: number,
    name: string,
    code: number,
    province: string,
    date: string
}
const dataList: Array<ListType> = [];
for (let i = 0; i < 100; i++) {
    dataList.push({
        id: i,
        name: Random.cname(),
        code: Random.integer(100000, 800000),
        province: Random.province(),
        date: Random.date(),
    })
}
export default {
    getList: (params: any) => {
        const info = JSON.parse(params.body);
        const [index, size, total] = [info.pageIndex - 1, info.pageSize, dataList.length]
        const len: any = total / size
        const totalPages: number = len - parseInt(len) >= 0 ? parseInt(len) + 1 : len
        const newDataList: Array<ListType> = dataList.slice(index * size, (index + 1) * size)
        return {
            total: dataList.length,
            data: newDataList,
            totalPages: totalPages
        }
    },
    update: (params: any) => {
        const info = JSON.parse(params.body);
        dataList[info.index] = info.data
        return {
            result: true,
            data: 'success'
        }
    },
    delete: (params: any) => {
        const info = JSON.parse(params.body);
        dataList.splice(info.index, 1);
        return {
            result: true,
            data: 'success'
        }
    }
}