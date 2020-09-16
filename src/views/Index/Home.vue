<template>
  <div class="home">
    <!-- 公告 -->
    <Message :messageList="messageList" />
    <!-- 天梯榜 -->
    <div class="grade">
      <div class="grade-tabs">
        <li
          :class="{'selected': currentIndex == i}"
          @click="dealMove(i)"
          v-for="(r,i) in tabsList"
          :key="i"
        >{{r}}</li>
      </div>
      <div class="grade-contents">
        <li v-for="(r,i) in data" :key="i">
          <div class="index">{{i+1}}.</div>
          <div class="lilist">
            {{r.phone}}
            <span>{{r.number}}</span>
          </div>
        </li>
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<script>
import Message from "../../components/Message";
export default {
  name: "home",
  components: {
    Message,
  },
  data() {
    return {
      messageList: [
        {
          a: "关于ETC的公告",
          b:
            "测速网(SpeedTest.cn)为你提供免费在线网速测试,专业5G测速,宽带提速,网络加速,Ping测试,路由测试等优质服务,拥有内外数千高性能测速点,全面覆盖电信、移动、联通",
          c: "2020-09-15 22:19",
        },
      ],
      tabsList: ["直推榜", "团队榜", "个人算力榜", "团队算力榜"],
      currentIndex: 0,
      data: [
        {
          phone: 15236775230,
          number: 1277,
        },
        {
          phone: 15243434330,
          number: 999,
        },
        {
          phone: 15434275230,
          number: 40,
        },
      ],
    };
  },
  methods: {
    dealMove(i) {
      this.currentIndex = i;
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.grade-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10px 5% 0 5%;
  border-bottom: 1px dashed #999999;
}
.grade-tabs li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
  background: #ffffff;
  color: #666666;
  font-size: 14px;
}
.selected {
  font-size: 16px !important;
  font-weight: bold;
  color: #0066ed !important;
}
.grade-contents {
  min-height: 300px;
  background: #ffffff;
  width: 90%;
  margin: 0 5%;
  padding: 0 15px;
}
.grade-contents .index {
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  color: #0066ed;
}
.grade-contents li {
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.grade-contents li .lilist {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>