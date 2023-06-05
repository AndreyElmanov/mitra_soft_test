import { SET_COMMENTS, SET_COMMENTS_ERROR } from "./constans";

const initialState = {
    function: ()=>{},
    error: '',
}

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                function: action.function,
                error: '',
            };
        case SET_COMMENTS_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}