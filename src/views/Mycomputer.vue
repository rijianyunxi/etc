<template>
  <div class="mycomputer">
    <!-- header -->
    <mt-header fixed title="我的矿机" style="background: #0066ed">
      <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
    </mt-header>
    <!-- list -->
    <div class="computerbox">
      <ComputerList :computerList="computerList" />
    </div>
  </div>
</template>

<script>
import { mycomputer } from "../api/index";
import ComputerList from "../components/ComputerList";
export default {
  name: "mycomputer",
  components: {
    ComputerList,
  },
  data() {
    return {
      computerList: [],
    };
  },
  created() {
    this.dealmycomputer();
  },
  methods: {
    async dealmycomputer() {
      let r = await mycomputer();
      this.computerList = r.data;
    },
  },
};
</script>

<style scoped>
.mycomputer {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.computerbox {
  padding-top: 50px;
}
</style>