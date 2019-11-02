
// over combine reducers are here

import CounterReducer from './counterreducer';
import Login from './loginreducer';
import {combineReducers} from 'redux';


const AllReducers = combineReducers({
    Counter:CounterReducer,
    loger :Login
});
export default AllReducers;