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
        console.log(page);
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
            console.log(res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const setCurrentCompanyEmail = ({ dispatch }, email) => {


    return new Promise((resolve, reject) => {
        fetch(`/api/${email}`, {
            method: 'POST'
        }).then(res => res.json).then(res = {

        }).catch(err => {

        })
    })
}

