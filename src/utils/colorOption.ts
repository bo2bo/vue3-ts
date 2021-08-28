const colorOption: any = {
    baseOption: {
        visualMap: {
            type: 'continuous',
            bottom: '10%',
            itemWidth: 20,
            itemHeight: 140,
            show: true,
            calculable: true
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
        dataRange: {
            splitNumber: 0,
            text: ['高', '低'],
            textStyle: {
                color: '#fff'
            },
            realtime: false,
            calculable: true,
            selectedMode: false,
            show: true,
            itemWidth: 20,
            itemHeight: 100,
            color: ['#ff1d1d', '#ffffff', '#009cff'],
            bottom: '10%',
            left: '4%'
        },
        title: {
            text: '色温图',
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        //地图
        series: {
            id: 'map',
            type: 'map',
            map: 'china', //要和echarts.registerMap（）中第一个参数一致
            top: '15%',
            width: 'auto',
            height: 'auto',
            itemStyle: {
                // normal: {
                //     borderColor: 'rgba(255, 255, 255, 0.2)',
                //     areaColor: '#868686',
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
            data: []
        }
    },
    options: []
}
export default colorOption
