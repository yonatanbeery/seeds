export function addArticle(payload) {
    return { type: "ADD_ARTICLE", payload}
};

export function delArticle(payload) {
    return { type: "DEL_ARTICLE", payload}
};

export function getData(url) {
    return {type: "DATA_REQUESTED", payload: {url}}
}