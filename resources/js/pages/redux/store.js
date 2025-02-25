
import {productsReducer, reducer} from './reducer.js';
import { legacy_createStore , combineReducers} from 'redux';
const Reducers = combineReducers({
    reducer : reducer,
    Products : productsReducer,
});
const store = legacy_createStore(Reducers);
export default store;