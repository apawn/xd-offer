<template>
  <topbar></topbar>
  <offer-header></offer-header>
  <home></home>
  <div id="app">

  </div>
</template>

<script>
import Hello from './components/Hello'
import topbar from './components/topbar/topbar'
import offerHeader from './components/header/header'
import home from './components/home/home'
export default {
  components: {
    'Hello':Hello,
    'topbar':topbar,
    'offer-header':offerHeader,
    'home':home

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