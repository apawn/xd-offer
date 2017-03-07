export const routerGo = ({dispatch}, href) => {
    dispatch('ROUTE_GO', href);
}

export const signIn = ({dispatch}, username, password) => { 
    dispatch('SIGN_IN', username, password);
}

export const signOut = ({dispatch}, username, password) => { 
    dispatch('SIGN_OUT', username, password);
}

