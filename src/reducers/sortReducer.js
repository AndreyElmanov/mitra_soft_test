import { SORT } from "./constans";


const initialState = {
    sort: "not_sort",
}

export default function sortReducer(state = initialState, action) {
    switch (action.type) {
        case SORT:
            return {
                ...state,
                sort: action.sort
            };
        default:
            return state;
    }
}