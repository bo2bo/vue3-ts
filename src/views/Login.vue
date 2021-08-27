<template>
  <div class="login">
    <div class="container">
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="70px">
        <el-form-item label="姓名" prop="useName">
          <el-input v-model="loginForm.useName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" v-model="loginForm.passWord" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="验证码" prop="code">
          <div class="login-code">
            <el-input v-model="loginForm.code" auto-complete="off" style="width: 63%" @keyup.enter="submitForm('loginForm')">
            </el-input>
            <img :src="codeUrl" @click="getCode" class="login-code-img" />
          </div>
        </el-form-item> -->
        <el-form-item style="text-align: center;">
          <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import Cookies from "js-cookie";
import { defineComponent } from "vue";
import { getCodeImgFun, loginFun, LoginParams } from "@/api/login";
import { setToken } from "@/utils/auth";
export default defineComponent({
  data() {
    return {
      codeUrl: "",
      loginForm: {
        useName: "admin",
        passWord: "123456",
        code: "",
        uuid: "",
      },
      rules: {
        useName: [
          { required: true, trigger: "blur", message: "用户名不能为空" },
        ],
        passWord: [
          { required: true, trigger: "blur", message: "密码不能为空" },
        ],
        code: [
          { required: true, trigger: "change", message: "验证码不能为空" },
        ],
      },
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {
    // this.getCode();
  },
  methods: {
    getCode() {
      let _this = this;
      getCodeImgFun().then((res) => {
        let { img, uuid } = res.data;
        _this.codeUrl = "data:image/gif;base64," + img;
        _this.loginForm.uuid = uuid;
      });
    },
    submitForm(formName: string) {
      (this.$refs[formName] as HTMLFormElement).validate((valid: boolean) => {
        if (valid) {
          Cookies.remove("username");
          Cookies.remove("password");
          let params: LoginParams = {
            username: this.loginForm.useName,
            password: this.loginForm.passWord,
            code: this.loginForm.code,
            uuid: this.loginForm.uuid,
          };
          //   loginFun(params).then((res) => {
          //     if (res.code === 200) {
          //       setToken(res.data.token);
          //       this.$router.push({ path: this.redirect || "/" }).catch(() => {});
          //     }
          //   });
          setToken('admin123456');
          this.$router.push({ path: this.redirect || "/" }).catch(() => {});
        }
      });
    },
    resetForm(formName: string) {
      (this.$refs[formName] as HTMLFormElement).resetFields();
    },
  },
});
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(./../assets/img/login-background.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    padding: 25px 25px 5px 25px;
    .login-code {
      display: flex;
      justify-content: space-around;
      .login-code-img {
        width: 80px;
        height: 40px;
      }
    }
  }
}
</style>