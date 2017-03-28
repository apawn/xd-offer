export const routerGo = ({ dispatch }, href) => {

    var res = dispatch('ROUTE_GO', href);

}

export const signIn = ({ dispatch }, username, password) => {
    return new Promise((resolve, reject) => {
        fetch("/api/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        }).then(res => res.json()).then(json => {
            resolve(json);
            // 在 mutations里面设置session
            dispatch('SIGN_IN', json);
        }).catch(err => {
            reject(err);
        })
    })
}

export const setSignInModal = ({ dispatch }, signInModal) => {
    dispatch('SET_SIGNIN_MODAL', signInModal);
}


export const signOut = ({ dispatch }, username, password) => {
    return new Promise((resolve, reject) => {
        fetch("/api/loginOut", {
            method: 'POST'
        }).then(res => {
            dispatch('SIGN_OUT');
        }).catch(res => {
            dispatch('SIGN_OUT');
        })
    })
}


export const getCurrentPage = ({ dispatch }, page) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getCurrentPage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: page
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_CURRENT_PAGE', page, res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
export const getCompaniesCount = ({ dispatch }) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getCompaniesCount', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res => {
            dispatch('SET_TOTAL_COUNT', res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const getCurrentCompanyDetail = ({ dispatch }, companyName) => {
    return new Promise((resolve, reject) => {
        fetch('/api/companydetail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: companyName
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_CURRENT_COMPANY_DETAIL', res);
            resolve(res);
        }).catch(err => {
            dispatch('SET_CURRENT_COMPANY_DETAIL', {});
            reject(err);
        })
    })
}


// 提交评价

export const commentCompany = ({ dispatch }, email, content) => {
    return new Promise((resolve, reject) => {
        fetch('/api/commentcompany', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                companyemail: email,
                content: content
            })
        }).then(res => res.json).then(res => {

        }).catch(err => {

        })
    })
}

