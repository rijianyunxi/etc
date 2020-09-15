<template>
  <div>
    <div v-if="computerList.length == 0" class="nocomputer">暂无矿机，请先完成实名</div>
    <div class="computerlist" v-else>
      <div class="computer" v-for="(r,i) in computerList" :key="i">
        <div class="computername">
          <p>{{r.name}}</p>
          <p v-if="r.status == 0">
            状态：
            <span style="color:green">运行中...</span>
          </p>
          <p v-else>
            <span style="color:red">状态：已停止</span>
          </p>
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
export default {
  name: "mycomputer",
  props: {
    computerList: Array,
  },
};
</script>

<style scoped>
.computer {
  width: 90%;
  margin: 10px 5%;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
}
.computername {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.computername p:nth-child(1) {
  font-size: 16px;
  font-weight: bold;
  color: #0066ed;
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
.nocomputer{
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  color: #0066ed;
  font-weight: bold;
}
</style>