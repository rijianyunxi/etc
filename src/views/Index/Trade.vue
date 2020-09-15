<template>
  <div class="trade">
    <!-- header -->
   
    <!-- tradeheader -->
    <div class="traderheader">
      <div class="tradetitle">
        <span class="span" :class="{'checked': 0 == current}" @click="dealTab(0)">我要买</span>
        <span class="span" :class="{'checked': 1 == current}" @click="dealTab(1)">我要卖</span>
      </div>
      <div class="tradeorder">
        <i class="iconfont icon-Order"></i>
        <i class="iconfont icon-21"></i>
      </div>
    </div>
    <!-- tradecontent -->
    <div class="tradecontent">
      <div class="shop">
        <div class="shopmsg">
          <div class="nickname">
            <div class="name">云</div>
			<span style="font-size: 15x;font-weight: bold;">云顶商行</span>
          </div>
          <p>数量：100 个</p>
          <p>单价：¥ 50</p>
        </div>
        <div class="shopprice">
          <h1>¥ 5000</h1>
          <div v-if="current == 0" class="buy">购买</div>
          <div v-else class="buy">卖出</div>
        </div>
      </div>
      <!-- tradecontent over -->
    </div>
  </div>
</template>

<script>
export default {
  name: "trade",
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    dealTab(i) {
      this.current = i;
    },
  },
};
</script>

<style scoped>
.trade {
  height: 100%;
  width: 100%;
}
.traderheader {
  height: 50px;
  width: 100%;
  background-color: #f7f6fb;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.traderheader .span {
  font-size: 14px;
  color: #8b9fad;
  font-weight: 400;
  padding-right: 15px;
}
.tradeorder i {
  font-size: 22px;
  font-weight: bold;
  color: #0066ed;
  padding-right: 15px;
}
.checked {
  font-size: 20px !important;
  color: #13191f !important;
  font-weight: bold !important;
}
.tradecontent {
  height: calc(100% - 50px);
  background: #ffffff;
  overflow: scroll;
}
.shop {
  height: 80px;
  width: 100%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ecedee;
  color: #45484c;
}
.shopmsg p {
  color: #8ba0ad;
  font-size: 12px;
  padding-top: 5px;
}
.nickname {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;
}
.nickname .name {
  height: 25px;
  width: 25px;
  font-size: 14px;
  border-radius: 50%;
  background: #0066ed;
  color: #ffffff;
  text-align: center;
  line-height: 25px;
  margin-right: 5px;
}
.buy {
  height: 30px;
  width: 90px;
  background: #0066ed;
  border-radius: 5px;
  color: #ffffff;
  line-height: 30px;
  text-align: center;
}
.shopprice {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.shopprice h1 {
  color: #0066ed;
  padding-bottom: 5px;
  font-weight: bold;
}
</style>