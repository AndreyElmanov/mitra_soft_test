import { SET_POSTS, SET_POSTS_ERROR, SELECT_POST } from "./constans";


const initialState = {
    posts: [],
    selected_post: 0,
    error: '',
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts,
                error: '',
            };
        case SELECT_POST:
            return {
                ...state,
                selected_post: action.selected_post,
            };
        case SET_POSTS_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}