const initialState = {
    bitbucketProjects: ["None"],
    projectTypes: []
};

function rootReducer(state = initialState, action) {
    if (action.type === "BITBUCKET_PROJECTS_LOADED") {
        let defaultOptions = ["None"];
        return Object.assign({}, state, {
            bitbucketProjects: defaultOptions.concat(action.payload)
          });
    } else if (action.type === "BITBUCKET_PROJECTS_TYPES_LOADED") {
        return Object.assign({}, state, {
            projectTypes: action.payload
          });
    }
    return state;
}

export default rootReducer;