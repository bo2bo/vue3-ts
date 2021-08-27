<template>
  <el-tabs type="border-card">
    <el-tab-pane label="色温图">
      <div class="colorMap" ref="colorMap"></div>
    </el-tab-pane>
    <el-tab-pane label="标记地图">
      <div class="pointMap" ref="pointMap"></div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  setup() {
    // const colorMap = ref<HTMLElement>();
    // const colorMaps = ref<any>();
    // colorMaps.value = echarts.init(colorMap.value!);
    // colorMaps.value.setOption({

    // });
    // const pointMap = ref<HTMLElement>();
    // const pointMaps = ref<any>();
    // pointMaps.value = echarts.init(pointMap.value!);
    // pointMaps.value.setOption({});
    // return {
    //   colorMap,
    //   pointMap,
    // };
  },
});
</script>
<style lang="scss" scoped>
.colorMap,
.pointMap {
  width: 1260px;
  height: 630px;
  background-color: antiquewhite;
}
</style>