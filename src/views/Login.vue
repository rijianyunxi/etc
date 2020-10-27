<template>
  <div class="login">
    <div class="bj">
      <img src="../../public/img/bj.jpeg" alt="">
    </div>
    <div class="from">
      <!-- phone -->
      <Myinput v-model="phone" placeholder="请输入手机号码" type="text" icon="iconfont icon-wode" />
      <!-- password -->
      <Myinput
        v-model="password"
        placeholder="请输入密码"
        type="password"
        icon="iconfont icon-iconset0114"
      />
         <!-- xieyi -->
         <p style="color:#999;font-size:12px">登陆即表示同意用户协议</p>
      <!-- submit -->
      <mt-button
        style="width: 90%;margin:20px 0;font-size: 15px;"
        type="primary"
        size="small"
        @click="dealLogin()"
      >登陆</mt-button>
      <!-- register -->
      <mt-button
        style="width: 90%;font-size: 15px;"
        size="small"
        type="danger"
        @click=" $router.push({
          path: '/register',
          query: {
            invatation: 'AAAAAAA'
          }
        })"
      >还没账号？</mt-button>
    </div>
  </div>
</template>

<script>
import { login } from "../api/index";
import { Toast } from "mint-ui";
import Myinput from "../components/Myinput";
export default {
  name: "login",
  components: {
    Myinput,
  },
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    //登陆
    async dealLogin() {
      let result = await login(this.phone, this.password);
      if (result.code === 200) {
        Toast({
          message: "登陆成功",
          position: "middle",
          duration: 2000,
        });
        localStorage.setItem("token", result.token);
        this.$router.replace("/home");
      } else {
        Toast({
          message: "账号或密码错误，请重试",
          position: "middle",
          duration: 2000,
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  background: #ffffff;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.bg{
  height: 250px;
  width: 100%;
}
.bj img{
  height: 100%;
  width: 100%;
}
.login .from {
  height: 300px;
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>