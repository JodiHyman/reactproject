import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from '../redux/reducers/mainReducer';

let store = createStore(reducer,applyMiddleware(promiseMiddleware));

export default store;