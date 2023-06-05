import { SET_USER, SET_USER_ERROR, SELECT_USER } from "./constans";

const initialState = {
    user: {},
    selected_user: 0,
    error: '',
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
                error: '',
            };
        case SELECT_USER:
            return {
                ...state,
                selected_user: action.selected_user,
            };
        case SET_USER_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}