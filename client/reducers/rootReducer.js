import {CLEAR_STORE} from '../constants';
import {combineReducers} from 'redux';
// import userReducer from './userReducer';
import navbarReducer from './navbarReducer';
import eventReducer from './eventReducer';


export const combinedReducer = combineReducers({
  // userReducer,
  nav: navbarReducer,
  event: eventReducer,


});

export default function rootReducer(store, action) {
  if (action.type === CLEAR_STORE) return combinedReducer();

  return combinedReducer(store, action);
}
