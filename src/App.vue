<template>
  <topbar></topbar>
  <div id="app">
    <hello></hello>
    <span>
      <i class="fa fa-bath"></i>
    </span>
  </div>
</template>

<script>
import Hello from './components/Hello'
import topbar from './components/topbar/topbar'
export default {
  components: {
    'Hello':Hello,
    'topbar':topbar
  }
}
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  display: block;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  a {
    color: #000;
    text-decoration: none;
  }
}


.logo {
  width: 100px;
  height: 100px
}
</style>
