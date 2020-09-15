<template>
  <div class="mine">
    <!-- top -->
      <div class="top">
        <div class="touxaing">
          云
        </div>
        <div class="msg">
          <p>云顶商行</p>
          <p>15236775239</p>
        </div>
      </div>
    <!-- jine -->
    <div class="jine">
      <div class="coin" style="border-right:1px solid #ffffff">
        <p style="font-size: 18px;font-weight:bold;padding-bottom:10px">0.000</p>
        <p>COIN</p>
      </div>
      <div class="usdt">
        <p style="font-size: 18px;font-weight:bold;padding-bottom:10px">0.000</p>
        <p>USDT</p>
      </div>
    </div>
    <!-- trade -->
    <div class="trade">
      <p><i class="iconfont icon-48"></i>充币</p>
      <p><i class="iconfont icon-tiquliuliang"></i>提币</p>
      <p><i class="iconfont icon-jixuduihuan"></i>兑换</p>
    </div>
    <!-- settings -->
    <div class="settings">
      <li v-for="(r,i) in listData" :key="i" @click="$router.push(r.path)">
        <i :class="r.icon"></i>
        <p>{{r.title}}</p>
        <i class="iconfont icon-you-"></i>
      </li>
    </div>
    <!-- button -->
    <!-- <mt-button type="danger" style="width: 80%;margin:10px 10%">退出登录</mt-button> -->
  </div>
</template>

<script>
export default {
    name:'mine',
    data(){
      return{
        listData:[
          {
            icon:"iconfont icon-Order",
            title:"交易明细",
            path:"/tradedetail"
          },
          {
            icon:"iconfont icon-credentials_icon",
            title:'实名认证',
            path:"/nametrue"
          },
          {
            icon:"iconfont icon-jiaoyi",
            title:'绑定支付宝',
            path:"/zfpay"
          },
          {
            icon:"iconfont icon-yaoqing",
            title:'我的邀请',
            path:"/invatation"
          },
          {
            icon:"iconfont icon-zhinan",
            title:'新手指南',
            path:"/guide"
          },
          {
            icon:"iconfont icon-xieyi",
            title:'用户协议',
            path:"/agreen"
          },
          {
            icon:"iconfont icon-shezhi",
            title:'设置',
            path:"/setting"
          }
        ]
      }
    }
}
</script>

<style scoped>
  .mine{
    height: 100%;
    width: 100%;
    overflow: scroll;
  }
  .top{
    height: 80px;
    width: 100%;
    padding: 10px 15px;
    background: #0066ed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .touxaing{
    height: 60px;
    width: 60px;
    background: #ffffff;
    border-radius: 10px;
    border:1px solid #ffffff;
    margin-right: 15px;
    text-align: center;
    line-height: 60px;
    font-size: 25px;
    color:#0066ed;
    font-weight: bold;
  }
  .msg p:nth-child(1){
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    padding-bottom: 7px;
  }
  .msg p:nth-child(2){
    font-size: 12px;
    color: #ffffff;
  }
  .jine{
    height: 80px;
    width: 100%;
    padding: 10px 15px;
    background: #0066ed;
    color: #ffffff;
    /* border-top: 1px dashed #ffffff; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .coin,.usdt{
    flex: 1;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .trade{
    height: 60px;
    width: 90%;
    margin: 15px 5%;
    background: #ffffff;
    border-radius: 15px;
    padding: 5px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .trade p{
    color: #333;
    font-size: 16px;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   i{
    color: #0066ed;
    font-size: 20px;
    font-weight: bold;
    margin-right: 7px;
  }
  .settings{
    width: 100%;
    margin:15px 0;
  }
  .settings li{
    box-sizing: border-box;
    height: 45px;
    width: 100%;
    background: #ffffff;
    padding: 0 15px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .settings p{
    flex:1;
  }
</style>