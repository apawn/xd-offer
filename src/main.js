import Vue from 'vue'
import { router } from './router.js'
import App from './App'
import iView from 'iview'

// 组件路由导入
import home from './components/home/home'
import meetingPlan from './components/meeting-plan/meeting-plan.vue'
import news from './components/news/news'
import my from './components/my/my'
import signUp from './components/sign-up/sign-up'

// home 子路由
import company from './components/company/company'

// 组件样式
import 'font-awesome/less/font-awesome.less'
import 'iview/dist/styles/iview.css';
import './common/less/index.less'
import './common/less/overright-iview.less'


Vue.use(iView);



/* eslint-disable no-new */

let app = Vue.extend(App);


router.map({
  '/': {
    component: signUp
  },
  '/home': {
    component: home,
  },
  '/meeting-plan': {
    component: meetingPlan
  },
  '/announcements': {
    component: news
  },
  '/my': {
    component: my
  },
  '/sign-up': {
    component: signUp
  },
  '/home/:companyname': {
    name: 'company',
    component: company
  }
})

router.start(app, '#app');
// router.go('/home');

