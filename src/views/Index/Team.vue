<template>
  <div class="team">
    <!-- getrecover -->
    <div class="getrecover">
      <!-- img -->
      <div class="img">
        <!-- <img src="../../../public/img/wakuang.jpg" alt /> -->
      </div>
      <!-- 收取 -->
      <div v-if="status==0" class="shou">可收：{{recover}}</div>
      <div v-else>挖矿中...</div>
    </div>
    <!-- 基础信息容器 -->
    <div class="topbox">
      <div class="box">
        <p>1</p>
        <span>算力</span>
      </div>
      <div class="box">
        <p>1</p>
        <span>直推</span>
      </div>
      <div class="box">
        <p>1</p>
        <span>团队算力</span>
      </div>
      <div class="box">
        <p>1</p>
        <span>团队人数</span>
      </div>
    </div>
    <!-- list -->
    <ComputerList :computerList="computerList" />
  </div>
</template>

<script>
import { recover, mycomputer } from "../../api/index";
import ComputerList from "../../components/ComputerList";
export default {
  name: "team",
  components: {
    ComputerList,
    recover: "",
    status: 1,
  },
  data() {
    return {
      status: 1,
      computerList: [],
    };
  },
  created() {
    this.dealRecover();
    this.dealmycomputer();
  },
  methods: {
    async dealRecover() {
      let res = await recover();
      this.status = res.code;
      this.recover = res.recover;
    },
    async dealmycomputer() {
      let r = await mycomputer();
      this.computerList = r.data;
    },
  },
};
</script>

<style scoped>
.team {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.getrecover {
  box-sizing: border-box;
  padding: 0 15px;
  height: 70px;
  width: 100%;
  background: #0066ed;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 17px;
}
.topbox {
  width: 100%;
  padding: 15px;
  background: #0066ed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topbox .box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #eeeeee;
}
.topbox .box:nth-child(4) {
  border: 0;
}
.topbox .box p {
  padding-bottom: 15px;
  font-size: 17px;
  font-weight: bold;
  /* color: #333333; */
  color: #ffffff;
}
.topbox .box span {
  font-size: 12px;
  /* color: #666666; */
  color: #ffffff;
}
</style>