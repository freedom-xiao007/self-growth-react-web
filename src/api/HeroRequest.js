import request from "./request";

export function heroes(params) {
    return request({
        url: "/v1/hero/list",
        method: "get",
        params: params,
    });
}
