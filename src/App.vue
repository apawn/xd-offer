<template>
  <div class="color-wrapper">
    <topbar></topbar>
    <offer-header></offer-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import topbar from './components/topbar/topbar'
import offerHeader from './components/header/header'
export default {
  components: {
    'Hello':Hello,
    'topbar':topbar,
    'offer-header':offerHeader,
  }
}
</script>

<style lang="less">
</style>