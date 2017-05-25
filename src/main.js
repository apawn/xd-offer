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
import basicInfo from './components/basic-info/basic-info';
import keyInfo from './components/key-info/key-info.vue'
import uploadResume from './components/upload-resume/upload-resume'
import forget from './components/forget/forget'

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
    component: home
  },
  '/home': {
    name: 'home',
    component: home,
  },
  '/meeting-plan': {
    name: 'meetingPlan',
    component: meetingPlan
  },
  '/announcements': {
    name: 'news',
    component: news
  },
  '/my': {
    name: 'my',
    component: my
  },
  '/sign-up': {
    name: 'signUp',
    component: signUp
  },
  '/home/:companyname': {
    name: 'company',
    component: company
  },
  '/basic-info': {
    name: 'basicInfo',
    component: basicInfo
  },
  '/key-info': {
    name: 'keyInfo',
    component: keyInfo
  },
  '/upload-resume': {
    name: 'uploadResume',
    component: uploadResume
  },
  '/forget': {
    name: 'forget',
    component: forget
  }

})

router.start(app, '#app');
// router.go('/home');

