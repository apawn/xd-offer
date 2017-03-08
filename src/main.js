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
  '/news': {
    component:news
  },
  '/my': {
    component:my
  }
})

router.start(app, '#app');
router.go('/home');

