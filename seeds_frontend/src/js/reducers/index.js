const initialState = {
    articals: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_ARTICLE") {
        return Object.assign({}, state, {
            articals: state.articals.concat(action.payload)
        });
    } else if (action.type === "DEL_ARTICLE") {
        for (let i=0;i<state.articals.length;i++) {
            if (state.articals[i].title === action.payload.title) {
                let oldArticals = state.articals.concat();
                oldArticals.splice(i,1);
                return Object.assign({}, state, {
                    articals: oldArticals
                });
            }
        }
    }

    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
          });
    }
    return state;
}

export default rootReducer;