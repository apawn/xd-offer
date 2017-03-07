import Vue from 'vue'
import Vuex from 'vuex'
import {router} from '../main.js'
Vue.use(Vuex);

const state = {
    count:0
}
const mutations = {
    ROUTE_GO(state, href) {
       
        router.go(href);
    }
}

export default new Vuex.Store({
    state,
    mutations
})