import request from "./request";

export function login(data) {
    return request({
        url: "http://127.0.0.1:8080/auth/user/login",
        method: "post",
        body : data,
    });
}
