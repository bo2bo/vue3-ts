<template>
  <div class="navBar">
    <el-menu :uniqueOpened="uniqueOpened" :default-active="defaultActive" class="el-menu-vertical-demo" background-color="#304156" text-color="#fff" active-text-color="#ffd04b" :router="true">
      <template v-for="item in menuList" :key="item.id">
        <el-submenu v-if="item.children.length!==0" :index="item.path">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item v-for="subitem in item.children" :key="subitem.id" :index="subitem.path">
            {{subitem.title}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path">
          <i :class="item.icon"></i>
          <template #title>
            {{item.title}}
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    let data = reactive({
      defaultActive: "/table",
      uniqueOpened: true,
    });
    const menuList: {
      id: string;
      title: string;
      icon: string;
      path: string;
      children: { id: string; title: string; path: string }[];
    }[] = reactive([
      {
        id: "1",
        title: "导航一",
        icon: "el-icon-menu",
        path: "/table",
        children: [
          {
            id: "1-1",
            title: "表格",
            path: "/table",
          },
          {
            id: "1-2",
            title: "图表",
            path: "/charts",
          },
        ],
      },
      {
        id: "2",
        title: "导航二",
        icon: "el-icon-s-data",
        path: "/form",
        children: [
          {
            id: "2-1",
            title: "表单",
            path: "/form",
          },
        ],
      },
      {
        id: "3",
        title: "导航三",
        icon: "el-icon-pie-chart",
        path: "/map",
        children: [
          {
            id: "3-1",
            title: "地图",
            path: "/map",
          },
        ],
      },
      {
        id: "4",
        title: "导航四",
        icon: "el-icon-document",
        path: "/",
        children: [],
      },
    ]);
    return {
      ...toRefs(data),
      menuList,
    };
  },
});
</script>
<style lang="scss" scoped>
.navBar {
  .el-menu {
    border-right: unset;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
}
</style>