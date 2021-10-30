const loginUser = {}


function updateUserToken(token) {
    loginUser["token"] = token
}

function getLoginUserToken() {
    return loginUser["token"];
}

export {updateUserToken, getLoginUserToken};
