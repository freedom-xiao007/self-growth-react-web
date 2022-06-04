import request from "./request";

export function login(data) {
    return request({
        url: "/sso/doLogin?name=" + data["email"] + "&pwd=" + data["password"],
        method: "get",
    });
}
