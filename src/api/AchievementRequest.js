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

export function achievementImport(params) {
    return request({
        url: "/v1/achievement/import",
        method: "post",
        params: params,
    });
}
