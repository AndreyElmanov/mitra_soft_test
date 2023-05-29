import {createStore} from "redux";

const initialState = {
    posts: [],
    user: {},
    isLoad: false,
    sort: "not_sort",
}

function allRedusers(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'START':
            return {
                ...state,
                isLoad: true
            };
        case 'STOP':
            return {
                ...state,
                isLoad: false
            };
        case 'SORT':
            return {
                ...state,
                sort: action.sort
            };
        default:
            return state;
    }
}

export class reduserAction {
    static setPosts = (data) => store.dispatch({type: 'SET_POSTS', posts: data});
    static setUser = (data) => store.dispatch({type: 'SET_USER', user: data});
    static loadStart = () => store.dispatch({type: 'START'});
    static loadStop = () => store.dispatch({type: 'STOP'});
    static setSort = (string) => store.dispatch({type: 'SORT', sort: string});
}

const loadState = () => {
    try {
        const initialState = localStorage.getItem('mitra_soft_test');
        if (initialState === null) {
            return undefined;
        }
        return JSON.parse(initialState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        let initialState = JSON.stringify(state);
        localStorage.setItem('mitra_soft_test', initialState);
    } catch (err) {
        console.log(err);
    }
};

const preState = loadState();
const store = createStore(allRedusers, preState);
store.subscribe(() => saveState(store.getState()));

export default store;