import {combineReducers} from 'redux';
import auth from "./auth";
import message from "./message";
import cardItems from './reducers'
//import userItems from './reducers'
export default combineReducers({
    cardItems,
    auth,
    message,
    //userItems
});
