<template>
  <div class="myHeader">
    <h3>后台管理系统</h3>
    <div class="use">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-image class="avatar" :src="imgUrl" fit="cover"></el-image>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item disabled>个人中心</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { logoutFun } from "@/api/login";
import { ElMessageBox } from "element-plus";
import { removeToken } from "@/utils/auth";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    let imgUrl = ref(
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    );
    const router = useRouter();
    const logout = function (): void {
      ElMessageBox.confirm("确定注销并退出系统吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          logoutFun().then((res: any) => {
            if (res.code === 200) {
              removeToken();
              router.push({ path: "/login" }).catch(() => {});
            }
          });
        })
        .catch(() => {
          console.log("已取消删除");
        });
    };
    return { imgUrl, logout };
  },
});
</script>

<style lang="scss" scoped>
.myHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #223246;
  padding: 0 20px;
  h3 {
    color: #fff;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
}
</style>