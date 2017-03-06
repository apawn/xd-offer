import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import iView from 'iview'

// 组件路由导入
import home from './components/home/home'
import my from './components/my/my'


import 'font-awesome/less/font-awesome.less'
import 'iview/dist/styles/iview.css';   
import './common/less/index.less'
import './common/less/overright-iview.less'

Vue.use(VueRouter);
Vue.use(iView);





/* eslint-disable no-new */
new Vue({
    el: '#app',
    component: App
});

var router = new VueRouter();
router.map({
  '/home': {
    component:home
  },
  '/my': {
    component:my
  }
})

router.start(App, '#app');
router.go('/home');