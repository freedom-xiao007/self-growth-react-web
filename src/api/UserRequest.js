import request from "./request";

export function login(data) {
    return request({
        url: "/auth/user/login",
        method: "post",
        data: data,
    });
}
