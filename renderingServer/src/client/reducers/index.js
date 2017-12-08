import { combineReducers } from 'redux';
import auth from './auth';
import allPinsReducer from './allPinsReducer';
import myPinsReducer from './myPinsReducer';

export default combineReducers({
  auth: auth,
  allPins: allPinsReducer,
  myPins: myPinsReducer
});
