<template>
  <div class="container">
    <my-header></my-header>
    <div class="box">
      <nav-bar></nav-bar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./../components/NavBar/index.vue";
import MyHeader from "./../components/MyHeader/index.vue";
export default defineComponent({
  components: {
    MyHeader,
    NavBar,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .box {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    .content {
      flex: 1;
      padding: 20px;
    }
  }
}
</style>