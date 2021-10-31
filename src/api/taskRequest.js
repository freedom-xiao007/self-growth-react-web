import request from "./request";

export function getTaskListByGroup() {
    return request({
        url: "/v1/task/listByGroup",
        method: "get"
    });
}

export function addTaskGroup(groupName) {
    return request({
        url: "/v1/task/addTaskGroup",
        method: "post",
        data: groupName,
    })
}

export function addNewTask(newTask) {
    return request({
        url: "/v1/task/add",
        method: "post",
        data: newTask,
    })
}

export function completeTaskById(id) {
    return request({
        url: "/v1/task/complete/" + id,
        method: "post",
    })
}

export function deleteTaskGroupByName(name) {
    return request({
        url: "/v1/task/deleteGroup/" + name,
        method: "post",
    })
}

export function deleteTaskById(id) {
    return request({
        url: "/v1/task/deleteTask/" + id,
        method: "post",
    })
}

export function modifyGroupById(group) {
    return request({
        url: "/v1/task/modifyGroup",
        method: "post",
        data: group,
    })
}

export function dayTaskStatistics(timestamp) {
    return request({
        url: "/v1/task/dayStatistics?timestamp=" + timestamp,
        method: "get",
    })
}
