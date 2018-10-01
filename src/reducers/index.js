import { combineReducers } from 'redux';
import { showUsers } from '../actions';


const rootReducer = combineReducers({
  user:showUsers
 
});

export default rootReducer;
