import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
    yield takeEvery("GET_BITBUCKET_PROJECTS", workerSaga);
}

function* workerSaga(action) {
    console.log(action);
    try{
        const payload = yield call(getData, action.payload.url);
        yield put({type: "BITBUCKET_PROJECTS_LOADED", payload});
    } catch (e) {
        yield put({type: "API_ERRORED", payload: e});
    }
}

function getData(url) {
    return fetch(url).then(Response => Response.json());
}