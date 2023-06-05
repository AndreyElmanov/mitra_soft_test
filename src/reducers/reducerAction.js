import {
    SET_POSTS,
    SET_USER,
    SET_COMMENTS,
    SORT,
    START,
    STOP,
    SET_POSTS_ERROR,
    SET_USER_ERROR,
    SET_COMMENTS_ERROR,
    SELECT_USER,
    SELECT_POST
 } from "./constans";
import store from "./store";

export class reducerAction {
    static setPosts = (data) => store.dispatch({type: SET_POSTS, posts: data});
    static selectPost = (number) => store.dispatch({type: SELECT_POST, selected_post: number});
    static setPostsError = (string) => store.dispatch({type: SET_POSTS_ERROR, error: string});
    static setUser = (data) => store.dispatch({type: SET_USER, user: data});
    static selectUser = (number) => store.dispatch({type: SELECT_USER, selected_user: number});
    static setUserError = (string) => store.dispatch({type: SET_USER_ERROR, error: string});
    static setComments = (fn) => store.dispatch({type: SET_COMMENTS, function: fn});
    static setCommentsError = (string) => store.dispatch({type: SET_COMMENTS_ERROR, error: string});
    static loadStart = () => store.dispatch({type: START});
    static loadStop = () => store.dispatch({type: STOP});
    static setSort = (string) => store.dispatch({type: SORT, sort: string});
}