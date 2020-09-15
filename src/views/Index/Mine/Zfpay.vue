<template>
  <div class="zftrue">
    <!-- nav -->
    <mt-header fixed title="绑定支付宝" style="background: #0066ed">
      <div slot="left">
        <mt-button @click="$router.go(-1)" icon="back">返回</mt-button>
      </div>
    </mt-header>
    <!-- content -->
    <div v-if="status == 1" class="content">
      <Myinput v-model="zfpay" placeholder="请输入您的支付宝" type="text" icon="iconfont icon-jiaoyi" />
      <span>支付宝绑定之后不可更改，谨慎操作！</span>
      <!-- button -->
      <mt-button
        @click="dealbindzfpay()"
        style="width:80%;margin: 20px 10%;"
        type="primary"
        size="small"
      >认证</mt-button>
    </div>
    <!-- else -->
    <div v-else class="elsecontent">支付宝已经绑定</div>
  </div>
</template>

<script>
import Myinput from "../../../components/Myinput";
import { bindzfpay, checknametrue } from "../../../api/index";
import { Toast } from "mint-ui";
export default {
  name: "zftrue",
  components: {
    Myinput,
  },
  created() {
    this.dealchecknametrue();
  },
  data() {
    return {
      zfpay: "",
      status: 1,
    };
  },
  methods: {
    async dealbindzfpay() {
      let r = await bindzfpay(this.zfpay);
      if (r.result == 1) {
        Toast({
          message: r.msg,
          position: "middle",
          duration: 2000,
        });
      } else {
        Toast({
          message: r.msg,
          position: "middle",
          duration: 2000,
        });
        this.status = 0;
      }
    },
    async dealchecknametrue() {
      let r = await checknametrue();
      if (r.zftrue == 0) {
        this.status = 0;
      }
    },
  },
};
</script>

<style scoped>
.zftrue {
  height: 100%;
  width: 100%;
  overflow: scroll;
  background: #ffffff;
}
.content {
  width: 90%;
  margin: 50px 5% 10px 5%;
}
.content span {
  color: #666666;
  font-size: 13px;
}
.elsecontent {
  height: 300px;
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>