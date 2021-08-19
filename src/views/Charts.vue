<template>
  <div class="myChart" ref="myChart"></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  setup() {
    const myChart = ref<HTMLElement>(); //也可以用const myChart = ref<any>();
    const myCharts = ref<any>();
    setTimeout(() => {
      // 绘制图表
      myCharts.value = echarts.init(myChart.value!);
      myCharts.value.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    }, 10);
    return {
      myChart,
    };
  },
});
</script>
<style lang="scss" scoped>
.myChart {
  width: 300px;
  height: 300px;
}
</style>