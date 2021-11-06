import request from "./request";

export function achievementGet(params) {
    return request({
        url: "/v1/achievement/get",
        method: "get",
        params: params,
    });
}
