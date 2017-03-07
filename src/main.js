import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import iView from 'iview'
import store from './vuex/store.js'

// 组件路由导入
import home from './components/home/home'
import meetingPlan from './components/meeting-plan/meeting-plan'
import news from './component/news/news'
import my from './components/my/my'


import 'font-awesome/less/font-awesome.less'
import 'iview/dist/styles/iview.css';   
import './common/less/index.less'
import './common/less/overright-iview.less'

Vue.use(VueRouter);
Vue.use(iView);



/* eslint-disable no-new */

let app = Vue.extend(App);
// new Vue({
//   el: '#app',
//   store,
//   render: h => h(App)
// });

export var router = new VueRouter();
router.map({
  '/home': {
    component:home
  },
  './meeting-plan': {
    component:meetingPlan
  },
  '/news': {
    component:news
  },
  '/my': {
    component:my
  }
})

router.start(app, '#app');
router.go('/home');

