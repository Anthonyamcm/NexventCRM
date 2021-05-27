import { combineReducers } from 'redux';
import userReducer from './User/User.Reducer';


const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;