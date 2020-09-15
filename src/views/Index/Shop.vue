<template>
  <div class="shop">
    <!-- header -->
    <mt-header fixed title="兑换矿机" style="background:#0066ed;font-size: 16px;font-weight:bold">
      <mt-button slot="right" @click="$router.push('/mycomputer')">我的矿机</mt-button>
    </mt-header>
    <!--kuangjiliebiao  -->
    <div class="computerlist">
      <div class="computer" v-for="(r,i) in computerList" :key="i">
        <div class="computername">
          <p>
            {{r.name}}
            <span style="color:#0066ed;font-size:13px">{{r.buynumber}}</span>
          </p>
          <div class="buy" @click="buycomputer(r.id)">兑换</div>
        </div>
        <div class="detail">
          <p>
            <span>{{r.price}}</span>
            <span>价格ETC</span>
          </p>
          <p>
            <span>{{r.suanli}}</span>
            <span>算力</span>
          </p>
          <p>
            <span>{{r.day}}</span>
            <span>运行周期</span>
          </p>
          <p>
            <span>{{r.output}}</span>
            <span>预产ETC</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { getcomputer, buycomputer } from "../../api/index";
export default {
  name: "shop",
  data() {
    return {
      computerList: [],
    };
  },
  created() {
    this.dealgetcomputer();
  },
  methods: {
    async dealgetcomputer() {
      let r = await getcomputer();
      //   console.log(r);
      this.computerList = r.r;
    },
    buycomputer(id) {
      MessageBox.confirm("确定要兑换吗?").then(async (action) => {
        if (action == "confirm") {
          let r = await buycomputer(id);
          MessageBox.alert(r.msg)
        }
      });
    },
  },
};
</script>

<style scoped>
.shop {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.computerlist {
  padding-top: 60px;
}
.computer {
  width: 90%;
  margin: 10px 5%;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
}
.computername {
  /* height: 50px; */
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.computername p {
  font-size: 17px;
  font-weight: bold;
}

.buy {
  height: 30px;
  width: 80px;
  border-radius: 5px;
  background: #0066ed;
  text-align: center;
  line-height: 30px;
  color: #ffffff;
}
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail p {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #999;
}
p span:nth-child(1) {
  font-size: 14px;
  color: #333;
  padding-bottom: 5px;
}
</style>