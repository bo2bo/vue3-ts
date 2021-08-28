import Mock from 'mockjs'
import table from './data/table'

Mock.mock('/table/getList', 'post', table.getList)
Mock.mock('/table/update', 'post', table.update)
Mock.mock('/table/delete', 'post', table.delete)
Mock.mock('/map/getMap', 'get', require('./json/china.json'))
Mock.mock('/map/getColorMap', 'get', require('./json/colorData.json'))
Mock.mock('/map/getSpotMap', 'get', require('./json/spotData.json'))

export default Mock