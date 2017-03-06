import Vue from 'vue'
import App from './App'
import iView from 'iview'

import 'font-awesome/less/font-awesome.less'
import 'iview/dist/styles/iview.css';   
import './common/less/index.less'
import './common/less/overright-iview.less'

Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})