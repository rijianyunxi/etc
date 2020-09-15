<template>
  <div class="tabbar" >
      <router-link class="li" :to="item.path" v-for="(item,index) in tabList" :key="index">
          <i :class="item.icon"></i>
          {{item.title}}
      </router-link>
  </div>
</template>

<script>
export default {
    name:'tabbar',
    data(){
        return{
            tabList:[
                {
                    title:'首页',
                    icon:'iconfont icon-shouye',
                    path:'home'
                },
                {
                    title:'团队',
                    icon:'iconfont icon-tuandui',
                    path:'team'
                },
                {
                    title:'交易',
                    icon:'iconfont icon-jiaoyi',
                    path:'trade'
                },
                {
                    title:'商城',
                    icon:'iconfont icon-shangcheng',
                    path:'shop'
                },
                {
                    title:'我的',
                    icon:'iconfont icon-wode',
                    path:'mine'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .tabbar{
        height: 50px;
        width:100%;
        display: flex;
        background: #ffffff;
    }
    .li{
        color:#333;
        font-size: 15px;
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .li i{
        padding: 5px 0;
        font-size: 16px;
    }
    .router-link-active{
        color: #0066ED;
        font-weight: bold;
    }
</style>