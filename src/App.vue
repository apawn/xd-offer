<template>
  <div id="app">
    <div class="test-less">
      <span class="test-icon">
        <i class="fa fa-etsy"></i>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style  lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 500px;
  .test-less{
    height:200px;
    width:200px;
    border:1px solid red;
    .test-icon{
      font-size:15px;
      color:red;
    }
  }
}
</style>
