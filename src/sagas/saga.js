import {all, call, put, select, takeLeading} from "redux-saga/effects";
import { SELECT_POST, SELECT_USER, START } from "../reducers/constans";
import { reducerAction } from "../reducers/reducerAction";
import api from "../utils/api";

const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

export function* commentsSaga() {
  const setComments = yield select(store => store?.commentsReducer?.function);
  try {
    const post_id = yield select(store => store?.postsReducer?.selected_post);
    const comments = yield call(api.getCommentsOfPost, post_id);
    yield delay();
    yield call(setComments, comments);
  } catch (e) {
    yield delay();
    yield call(setComments, []);
    yield call(reducerAction.setCommentsError, e.message);
  }
}

export function* watchPostsSaga() {
  yield put({type: START, isLoad: true});
  try {
    const posts = yield call(api.getPosts);
    yield call(reducerAction.setPosts, posts);
  } catch (e) {
    yield call(reducerAction.setPostsError, e.message);
  }
  yield delay();
  yield reducerAction.loadStop();
}

export function* watchUsersSaga() {
  yield put({type: START, isLoad: true});
  try {
    const user = yield select(store => store?.userReducer?.selected_user);
    const data = yield call(api.getOneUser, user);
    yield call(reducerAction.setUser, data);
  } catch (e) {
    yield call(reducerAction.setUserError, e.message);
  }
  yield delay();
  yield reducerAction.loadStop();
}

export default function* rootSaga() {
  yield all([
    watchPostsSaga(),
    takeLeading(SELECT_USER, watchUsersSaga),
    takeLeading(SELECT_POST, commentsSaga),
  ]);
}