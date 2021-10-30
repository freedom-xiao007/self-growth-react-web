function updateUserToken(token) {
    window.sessionStorage.setItem('token', token);
}

function getLoginUserToken() {
    return sessionStorage.getItem('token');
}

export {updateUserToken, getLoginUserToken};
