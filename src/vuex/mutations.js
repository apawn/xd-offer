import { router } from '../router.js'

export default {
    ROUTE_GO(state, href, query) {
        // router.go(href);
        router.go(href);

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
    },

    SET_CURRENT_PAGE(state, page, companies) {
        state.currentPage = page;
        state.currentCompanies = companies;
    },

    SET_TOTAL_COUNT(state, totalCount) {
        state.totalCount = totalCount.count;
    },

    SET_CURRENT_COMPANY(state, email) {
        state.email = email;
    }
}