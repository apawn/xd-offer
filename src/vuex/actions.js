export const routerGo = ({ dispatch }, href, anchor) => {

    var res = dispatch('ROUTE_GO', href, anchor);

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
        }).then(res => res.json()).then(res => {
            dispatch('COMMENT_COMPANY', content);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const deliveryAction = ({ dispatch }, _studentEmail, _companyemail, _position) => {
    return new Promise((resolve, reject) => {
        fetch('/api/delivery', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                studentEmail: _studentEmail,
                companyemail: _companyemail,
                position: _position
            })
        }).then(res => res.json()).then(res => {
            if (res.ok) {
                if (res.company) {
                    dispatch('SET_CURRENT_COMPANY_DETAIL', res.company);
                }
            }
        }).catch(err => {
            return;
        })
    });
}


// 得到验证码

export const getVertifyCodeAction = ({ dispatch }, email) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getvertifycode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                param: Math.random(2, 8),
                email: email
            })
        }).then(res => res.json()).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const signUpAction = ({ dispatch }, name, email, code, password) => {
    return new Promise((resolve, reject) => {
        fetch('/api/signup', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                vertifyCode: code
            })
        }).then(res => res.json()).then(res => {
            resolve(res);
        }).catch(err => {

        })
    });
}

export const completeBasicInfo = ({ dispatch }, basicInfo) => {
    return new Promise((resolve, reject) => {
        fetch('api/completebasicinfo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: basicInfo.name,
                email: basicInfo.email,
                birthday: basicInfo.birthday,
                phone: basicInfo.phone,
                collage: basicInfo.collage,
                speciality: basicInfo.speciality,
                highest: basicInfo.highest,
                gender: basicInfo.gender,
                introduction: basicInfo.introduction
            })
        }).then(res => res.json()).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const completeKeyInfo = ({ dispatch }, keyInfo) => {
    return new Promise((resolve, reject) => {
        fetch('/api/completebasicinfo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

            })
        }).then(res => res.json()).then(res => {

        }).catch(err => {

        })
    })
}

