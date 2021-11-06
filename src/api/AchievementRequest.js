import request from "./request";

export function achievementGet(params) {
    return request({
        url: "/v1/achievement/get",
        method: "get",
        params: params,
    });
}

export function achievementSync(params) {
    return request({
        url: "/v1/achievement/sync",
        method: "post",
        params: params,
    });
}
