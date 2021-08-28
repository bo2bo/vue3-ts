<template>
  <el-tabs type="border-card" @tab-click="handleClick">
    <el-tab-pane label="色温图">
      <div class="colorMap" ref="colorMap"></div>
    </el-tab-pane>
    <el-tab-pane label="标记地图">
      <div class="pointMap" ref="pointMap"></div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import * as echarts from "echarts";
import { getSpotMap, getColorMap, getMap } from "@/api/api";
import colorOption from "@/utils/colorOption";
import spotOption from "@/utils/spotOption";

export default defineComponent({
  setup() {
    const colorMap = ref<HTMLElement>();
    const colorMaps = ref<any>();
    const pointMap = ref<HTMLElement>();
    const pointMaps = ref<any>();
    const setColorMapOption = function (param: any) {
      if (param.data.datas.length) {
        let timeData: Array<string> = [],
          data = param.data.datas[param.data.index].data;
        for (var i = 0; i < param.data.datas.length; i++) {
          timeData.push(param.data.datas[i].date);
          param.option.options.push({
            series: {
              data: param.data.datas[i].data,
            },
          });
        }
        param.option.baseOption.timeline.currentIndex = param.data.index;
        for (let i: number = param.data.index + 1; i < timeData.length; i++) {
          let obj: any = {
            value: timeData[i],
            symbol: "circle",
            symbolSize: 8,
          };
          timeData[i] = obj;
        }
        param.option.baseOption.timeline.data = timeData;
        param.option.baseOption.dataRange.max = getMaxAndMin(data).max;
        param.option.baseOption.dataRange.min = getMaxAndMin(data).min;
      }
      param.dom.setOption(param.option, true);
    };
    const getMaxAndMin = function (data: any): any {
      let valueData = [];
      for (let i = 0; i < data.length; i++) {
        valueData.push(data[i].value);
      }
      let max = valueData[0],
        min = valueData[0];
      for (let i = 1; i < valueData.length; i++) {
        if (max < valueData[i]) {
          max = valueData[i];
        }
        if (min > valueData[i]) {
          min = valueData[i];
        }
      }
      return {
        max: max,
        min: min,
      };
    };
    const setSpotMapOption = function (param: any) {
      if (param.data.datas.length) {
        var timeData = [];
        for (var i = 0; i < param.data.datas.length; i++) {
          timeData.push(param.data.datas[i].date);
          param.option.options.push({
            series: {
              data: param.data.datas[i].data,
            },
          });
        }
        param.option.baseOption.timeline.data = timeData;
        param.option.baseOption.timeline.currentIndex = timeData.length - 1;
      }
      param.dom.setOption(param.option, true);
    };
    const handleClick = function (tab: any, event: any) {
      if (tab.props.label === "标记地图") {
        nextTick(() => {
          // 标记地图
          pointMaps.value = echarts.init(pointMap.value!);
          getSpotMap().then((res) => {
            setSpotMapOption({
              dom: pointMaps.value,
              data: res,
              option: spotOption,
            });
          });
        });
      }
    };
    onMounted(() => {
      nextTick(() => {
        colorMaps.value = echarts.init(colorMap.value!);
        getMap().then((mapJson) => {
          echarts.registerMap("china", mapJson);
          // 色温图
          getColorMap().then((res) => {
            setColorMapOption({
              dom: colorMaps.value,
              data: res,
              option: colorOption,
            });
          });
        });
      });
    });
    return {
      colorMap,
      pointMap,
      setColorMapOption,
      setSpotMapOption,
      getMaxAndMin,
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.colorMap,
.pointMap {
  width: 1260px;
  height: 630px;
}
</style>