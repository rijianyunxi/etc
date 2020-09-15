<template>
  <div class="nametrue">
    <!-- nav -->
    <mt-header fixed title="实名认证" style="background: #0066ed">
      <div slot="left">
        <mt-button @click="$router.go(-1)" icon="back">返回</mt-button>
      </div>
    </mt-header>
    <!-- content -->
    <div class="content" v-if="nametrue == 1">
      <!-- name -->
      <Myinput v-model="name" placeholder="请输入您的名字" type="text" icon="iconfont icon-wode" />
      <!-- idcard -->
      <Myinput
        v-model="idcard"
        placeholder="请输入您的身份证号"
        type="text"
        icon="iconfont icon-credentials_icon"
      />
      <!-- bankcard -->
      <Myinput v-model="bankcard" placeholder="请输入您的银行卡号" type="text" icon="iconfont icon-jiaoyi" />
      <!-- mobile -->
      <Myinput v-model="mobile" placeholder="请输入您的手机号" type="text" icon="iconfont icon-phone" />
      <!-- tips -->
      <span>所填写的内容均要为同一个的信息，且必须与注册账号手机号相同</span>
      <!-- button -->
      <mt-button
        @click="dealnametrue()"
        style="width:80%;margin: 20px 10%;"
        type="primary"
        size="small"
      >认证</mt-button>
    </div>
    <!-- content2 -->
    <div class="content2" v-else>您已经实名过了，不能再实名</div>
  </div>
</template>

<script>
import Myinput from "../../../components/Myinput";
import { nametrue, checknametrue } from "../../../api/index";
import { Toast } from "mint-ui";
export default {
  name: "nametrue",
  components: {
    Myinput,
  },
  created() {
    this.dealchecknametrue();
  },
  data() {
    return {
      name: "",
      mobile: "",
      idcard: "",
      bankcard: "",
      nametrue: 1,
    };
  },
  methods: {
    async dealnametrue() {
      if (this.mobile.length == 11 && this.idcard.length == 18 && this.bankcard.length > 15 && this.name) {
        let r = await nametrue(
          this.name,
          this.mobile,
          this.idcard,
          this.bankcard
        );
        if (r.result == 0) {
          Toast({
            message: "实名认证成功",
            position: "middle",
            duration: 2000,
          });
          this.$router.replace("/mine");
        } else {
          Toast({
            message: r.msg,
            position: "middle",
            duration: 2000,
          });
        }
      } else {
        Toast({
            message: "请检查内容是否正确",
            position: "middle",
            duration: 2000,
          });
      }
    },
    async dealchecknametrue() {
      let r = await checknametrue();
      if (r.nametrue == 0) {
        this.nametrue = 0;
      }
    },
  },
};
</script>

<style scoped>
.nametrue {
  height: 100%;
  width: 100%;
  overflow: scroll;
  /* background: #f4f4f4; */
}
.content {
  margin-top: 50px;
  padding: 0 15px;
}
.content span {
  color: #999;
  font-size: 13px;
}
.content2 {
  margin-top: 50px;
  height: 200px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>