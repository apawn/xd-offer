import {router} from '../router.js'

export default {
    ROUTE_GO(state, href) {
        router.go(href);
    },

    SIGN_IN(state,username, password) {
        // 查询操作 
        state.session = {
            username: '胡飞'
        }
    },

    SIGN_UP(state,{username, password, email, phone}) {
        state.session = {
            username: '胡飞'
        }
    },

    SIGN_OUT(state) { 
        state.session = null;
    }
}