<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:'app'
}
</script>

<style scoped>
  #app{
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    background: #f4f4f4;
    margin: 0 auto;
  }
</style>
