import { router } from '../router.js'

export default {
    ROUTE_GO(state, href, query) {
        query = query || {}
        // router.go(href);
        router.go({
            path: href,
            query: query
        })

    },

    SIGN_IN(state, result) {
        if (result.ok) {
            state.session = result.session;
        } else {
            state.session = null;
        }
    },

    SIGN_UP(state, { username, password, email, phone }) {
        state.session = {
            username: '胡飞'
        }
    },

    SIGN_OUT(state) {
        state.session = null;
    }
}