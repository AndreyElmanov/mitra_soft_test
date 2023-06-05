import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import sortReducer from './sortReducer';
import loadReducer from './loadReducer';
import userReducer from './userReducer';
import commentsReducer from './commentsReducer';

const allReducers = combineReducers({
    postsReducer,
    sortReducer,
    loadReducer,
    userReducer,
    commentsReducer,
});

export default allReducers;