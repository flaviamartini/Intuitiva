import { combineReducers } from 'redux';
import { listaUsuarios } from './usuarios';


const rootReducer = combineReducers({
  usuarios:listaUsuarios
 
});

export default rootReducer;
