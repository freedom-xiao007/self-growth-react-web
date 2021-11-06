import request from "./request";

export function heroes(params) {
    return request({
        url: "/v1/hero/list",
        method: "get",
        params: params,
    });
}

export function gameUserInfo(params) {
    return request({
        url: "/v1/hero/gameUserInfo",
        method: "get",
        params: params,
    });
}

export function gameHeroRound() {
    return request({
        url: "/v1/hero/heroRound",
        method: "post",
    });
}

export function gameOwnHeroes() {
    return request({
        url: "/v1/hero/ownHeroes",
        method: "get",
    });
}

export function modifyOwnHeroProperty(params) {
    return request({
        url: "/v1/hero/modifyOwnHeroProperty",
        method: "post",
        params: params,
    });
}
