<template>
  <div class="index">
      <div class="main">
        <router-view></router-view>
      </div>
      <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '../../components/Tabbar'
export default {
    name:'index',
    components:{
      Tabbar
    }
}
</script>

<style scoped>
  .index{
    height: 100%;
    width: 100%;
  }
  .main{
    /* flex:1; */
    /* overflow: auto; */
    height: calc(100% - 50px)
  }
</style>