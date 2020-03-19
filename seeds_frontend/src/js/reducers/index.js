const initialState = {
    bitbucketProjects: ["None"]
};

function rootReducer(state = initialState, action) {
    if (action.type === "BITBUCKET_PROJECTS_LOADED") {
        let defaultOptions = ["None"];
        return Object.assign({}, state, {
            bitbucketProjects: defaultOptions.concat(action.payload)
          });
    }
    return state;
}

export default rootReducer;