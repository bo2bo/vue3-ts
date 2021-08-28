const spotOption: any = {
    baseOption: {
        tooltip: {
            trigger: 'item',
            formatter: function (result: any) {
                if (typeof (result.value) == 'object') {
                    return result.name + '<br/>数据：' + result.value[2].toFixed(2);
                } else if (!isNaN(result.value)) {
                    return result.name + '<br />数据:' + result.value.toFixed(2);
                } else {
                    return result.name;
                }
            },
        },
        title: {
            text: '点状图',
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        timeline: {
            axisType: 'category',
            data: [],
            currentIndex: 0,
            autoPlay: false,
            playInterval: 2000,
            controlPosition: 'right',
            left: '8%',
            width: '85%',
            symbolSize: 8,
            label: {
                // normal: {
                //     color: '#ffffff',
                //     fontSize: 14
                // }
            },
            checkpointStyle: {
                symbolSize: 2,
                color: "#00ffff",
                borderColor: '#00ffff'
            },
            controlStyle: {
                show: false,
                // normal: {
                //     color: '#ddd'
                // }
            },
            tooltip: {
                textStyle: {
                    color: '#00ffff',
                    fontSize: 14
                },
                backgroundColor: 'rgba(50,50,50,0.3)',
                position: 'top',
                formatter: function (result: any) {
                    return result.name;
                },
            },
        },
        geo: {
            id: 'map',
            type: 'map',
            map: 'china', //要和echarts.registerMap（）中第一个参数一致
            width: 'auto',
            height: 'auto',
            top: '15%',
            itemStyle: {
                // normal: {
                //     borderColor: 'rgba(255, 255, 255, 0.2)',
                //     areaColor: '#868686'
                // },
                // emphasis: {
                //     label: {
                //         show: true
                //     }
                // }
            },
            label: {
                // normal: {
                //     show: true,
                //     color: '#3c3c3c'
                // },
                // emphasis: {
                //     show: true
                // }
            },
            markLine: {
                silent: true
            },
        },
        series: [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: 10,
            label: {
                // normal: {
                //     show: false
                // },
                // emphasis: {
                //     show: false
                // }
            },
            itemStyle: {
                // normal: {
                //     color: '#00ffff'
                // }
            }
        }]
    },
    options: []
}
export default spotOption
