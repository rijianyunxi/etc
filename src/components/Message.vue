<template>
  <div class="message-box" v-if="messageList">
    <div class="message" v-for="(r,i) in messageList" :key="i">
      <div class="message-title">
          {{r.a}}
          <span v-if="messageList.length == 1" style="font-size:16px;color:#0066ED;" @click="dealMoreMessage">更多公告</span>
      </div>
      <div class="message-content">
          {{r.b}}
      </div>
      <div class="message-date">
          {{r.c}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    messageList: Array,
  },
  data() {
    return {
      a: "",
    };
  },
  methods:{
      dealMoreMessage(){
          console.log(1);
      }
  },
};
</script>

<style scopd>
    .message{
        width: 90%;
        margin: 15px 5%;
        background: #ffffff;
        border-radius: 20px;
        padding: 15px;
    }
    .message .message-title{
        font-size: 18px;
        font-weight: bold;
        color: #0066ED;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .message .message-content{
        font-size: 14px;
        line-height: 17px;
        color: #999999;
        margin-bottom: 10px;
    }
    .message .message-date{
        font-size: 16px;
        color: #666666;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        /* float: right; */
    }
</style>