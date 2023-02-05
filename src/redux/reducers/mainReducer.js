import {combineReducers} from 'redux';
import {otherReducer} from './otherReducer';
import {movieReducer} from './movieReducer';

const rootReducer = combineReducers({
    otherReducer,
    movieReducer
})

export default rootReducer;