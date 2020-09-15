<template>
  <div class="register">
    <div class="bg">
      <img src="../../public/img/bj.jpeg" alt />
    </div>
    <!-- from -->
    <div class="from">
      <!-- nickname -->
      <Myinput icon="iconfont icon-wode" type="text" v-model="nickname" placeholder="用户名" />
      <!-- phone -->
      <Myinput icon="iconfont icon-phone" type="text" v-model="phone" placeholder="手机号码" />
      <!-- code -->
      <Myinput
        icon="iconfont icon-yanzhengma"
        type="text"
        v-model="code"
        placeholder="验证码"
        :ifBtn="true"
        :msg="msg"
        :disabled="disabled"
        @getverifycode="getVerifyCode()"
      />
      <!-- password -->
      <Myinput
        icon="iconfont icon-iconset0114"
        type="password"
        v-model="password"
        placeholder="密码 8-20位数字字母组合"
      />
      <!-- tradepassword -->
      <Myinput
        icon="iconfont icon-iconset0114"
        type="password"
        v-model="tradepassword"
        placeholder="6位数支付密码"
      />
      <!-- invatation -->
      <!-- <Myinput ref="invatation" icon="" type="text" v-model="invatation" /> -->
      <div class="invatation">
        <i class="iconfont icon-yqhy"></i>
        <div class="text">{{invatation}}</div>
        <i></i>
      </div>
      <!-- button -->
      <mt-button
        style="width: 90%;margin:10px 0;font-size: 15px;"
        type="primary"
        size="small"
        @click="dealRegister()"
      >注册</mt-button>
      <mt-button
        style="width: 90%;margin:10px 0;font-size: 15px;"
        type="primary"
        size="small"
        @click="register()"
      >下载APP</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Myinput from "../components/Myinput";
import { register, smsSend } from "../api/index";
export default {
  name: "register",
  components: {
    Myinput,
  },
  data() {
    return {
      nickname: "",
      phone: "",
      code: "",
      password: "",
      tradepassword: "",
      invatation: "",
      msg: "获取验证码",
      disabled: false,
      msgId: "45de215b-2512-40b2-9de4-f126b7731f84",
    };
  },
  created() {
    this.getInvatation();
  },
  methods: {
    getInvatation() {
      this.invatation = this.$route.query.invatation;
    },
    async getVerifyCode() {
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)) {
        let r = await smsSend(this.phone);
        if (r.code == 201) {
          Toast({
            message: "手机号码已经被注册",
            position: "middle",
            duration: 2000,
          });
        } else {
          this.msgId = r.msgId;
          let time = 60;
          let timer = setInterval(() => {
            if (time == 0) {
              clearInterval(timer);
              this.disabled = false;
              this.msg = "获取验证码";
            } else {
              this.msg = time + "秒后获取";
              this.disabled = true;
              time--;
            }
          }, 1000);
          Toast({
            message: "验证码发送成功",
            position: "middle",
            duration: 2000,
          });
        }
      } else {
        Toast({
          message: "请输入正确的手机号码",
          position: "middle",
          duration: 2000,
        });
      }
    },
    async dealRegister() {
      if (
        this.nickname &&
        this.phone &&
        this.code &&
        this.msgId &&
        this.password &&
        this.tradepassword &&
        this.invatation
      ) {
        let result = await register(
          this.nickname,
          this.phone,
          this.code,
          this.msgId,
          this.password,
          this.tradepassword,
          this.invatation
        );
        if (result.code == 200) {
          Toast({
            message: result.msg,
            position: "middle",
            duration: 2000,
          });
        }
      } else {
        Toast({
          message: "表单填写不完整",
          position: "middle",
          duration: 2000,
        });
      }
    },
  },
};
</script>

<style scoped>
.register {
  height: 100%;
  width: 100%;
}
.register .bg {
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
}
.register .bg img {
  height: 100%;
  width: 100%;
}
.register .from {
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.invatation {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 20px;
}
.invatation i {
  font-size: 18px;
  margin: 0 10px;
}
.invatation .text {
  flex: 1;
}
</style>