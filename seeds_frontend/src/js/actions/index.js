export function getBitbucketProjects() {
    return function(dispatch) {
        return fetch("http://localhost:8080/bitbucket/allProjects")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "BITBUCKET_PROJECTS_LOADED", payload: json });
        });
    }
}

export function getBitbucketProjectsTypes() {
    return function(dispatch) {
        return fetch("http://localhost:8080/frameworks/bitbucketTypes")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "BITBUCKET_PROJECTS_TYPES_LOADED", payload: json });
        });
    }
}