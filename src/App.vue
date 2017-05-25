<template>
  <div class="color-wrapper">
    <topbar></topbar>
    <offer-header></offer-header>
    <router-view></router-view>
    <offer-footer></offer-footer>
  </div>
</template>

<script>
import Hello from './components/Hello'
import topbar from './components/topbar/topbar'
import offerHeader from './components/header/header'
import footer from './components/footer/footer'
import store from './vuex/store.js'
export default {
  store,
  components: {
    'Hello': Hello,
    'topbar': topbar,
    'offer-header': offerHeader,
    'offer-footer': footer
  }
}

</script>

<style lang="less">

</style>