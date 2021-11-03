import request from "./request";

export function activityHistory(params) {
    return request({
        url: "/v1/activity/activityHistory",
        method: "get",
        params: params,
    });
}
