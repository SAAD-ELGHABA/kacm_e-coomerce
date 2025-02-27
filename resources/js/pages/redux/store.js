
import {productsReducer, reducer, Users} from './reducer.js';
import { legacy_createStore , combineReducers} from 'redux';
const Reducers = combineReducers({
    reducer : reducer,
    Products : productsReducer,
    Users:Users,
});
const store = legacy_createStore(Reducers);
export default store;