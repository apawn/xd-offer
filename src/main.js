import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import iView from 'iview'
import store from './vuex/store.js'

// 组件路由导入
import home from './components/home/home'
import meetingPlan from './components/meeting-plan/meeting-plan.vue'
import news from './components/news/news'
import my from './components/my/my'
import signUp from './components/sign-up/sign-up'

// 组件样式
import 'font-awesome/less/font-awesome.less'
import 'iview/dist/styles/iview.css';   
import './common/less/index.less'
import './common/less/overright-iview.less'

Vue.use(VueRouter);
Vue.use(iView);



/* eslint-disable no-new */

let app = Vue.extend(App);


export var router = new VueRouter();
router.map({
  '/home': {
    component:home
  },
  '/meeting-plan': {
    component:meetingPlan
  },
  '/announcements': {
    component:news
  },
  '/my': {
    component:my
  },
  '/sign-up': {
    component:signUp
  }
})

router.start(app, '#app');
router.go('/announcements');

