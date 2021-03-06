import { router } from '../router.js'

export default {
    ROUTE_GO(state, href, anchorSelector = "body") {
        // router.go(href);
        router.go(href);
        setTimeout(() => {
            var anchor = document.querySelector(anchorSelector);
            if (anchor)
                document.body.scrollTop = anchor.offsetTop - 60;
        }, 0);
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

    SET_CURRENT_COMPANY_DETAIL(state, currentCompany) {
        state.currentCompany = currentCompany;
    },
    // 设置登录对话框是否显示
    SET_SIGNIN_MODAL(state, signInModal) {
        state.signInModal = signInModal;
    },

    COMMENT_COMPANY(state, content) {
        state.currentCompany.comments.push({ content: content, time: new Date().toLocaleDateString() });
    },
    SET_CURRENT_ACTIVE_KEY(state, activeKey) {
        state.currentActiveKey = activeKey;
    },
    UPDATE_CURRENT_STUDENT(state, currentStudent) {
        state.session = currentStudent
    },
    // 设置当前公告
    SET_CURRENT_NEWS(state, current) {
        state.currentNews = current || {}
    },
    //  设置所有公告
    SET_ALL_NEWS(state, news) {
        state.allNews = news || {}
    },
    SET_INVITATIONS_STUDENT(state, companys) {
        state.invitationsCompany = companys || []
    },
    SET_DELIVERIED_STUDENT(state, companys) {
        state.deliveriedCompany = companys || []
    },


    DELIVERY_SUCCESS(state, email, position) {
        state.session.resumeDelivered.push({
            email: email,
            position: position
        });
        var company = state.currentCompanies.find(item => item.email == email);
        if (company) {
            console.log(company);
            state.deliveriedCompany.push(company);
        }

    }
}

