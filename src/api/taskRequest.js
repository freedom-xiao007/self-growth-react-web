import request from "./request";

export function getTaskListByGroup() {
    return request({
        url: "http://127.0.0.1:8080/v1/task/listByGroup",
        method: "get"
    });
}
