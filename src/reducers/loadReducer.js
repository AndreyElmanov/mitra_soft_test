import { START, STOP } from "./constans";


const initialState = {
    isLoad: false,
}

export default function loadReducer(state = initialState, action) {
    switch (action.type) {
        case START:
            return {
                ...state,
                isLoad: true
            };
        case STOP:
            return {
                ...state,
                isLoad: false
            };
        default:
            return state;
    }
}