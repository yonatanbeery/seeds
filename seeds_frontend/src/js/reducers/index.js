const initialState = {
    bitbucketProjects: ["None"]
};

function rootReducer(state = initialState, action) {
    if (action.type === "BITBUCKET_PROJECTS_LOADED") {
        return Object.assign({}, state, {
            bitbucketProjects: action.payload
          });
    }
    return state;
}

export default rootReducer;