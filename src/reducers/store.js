import {createStore} from "redux";

const initialState = {
    posts: [],
    user: {},
    isLoad: false,
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
        default:
            return state;
    }
}

export class reduserAction {
    static setPosts = (data) => store.dispatch({type: 'SET_POSTS', posts: data});
    static setUser = (data) => store.dispatch({type: 'SET_USER', user: data});
    static loadStart = () => store.dispatch({type: 'START'});
    static loadStop = () => store.dispatch({type: 'STOP'});
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