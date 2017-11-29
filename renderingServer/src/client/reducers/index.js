import { combineReducers } from 'redux';
import images from './images';
import auth from './auth';
import myPinsReducer from './myPinsReducer';

export default combineReducers({
  auth: auth,
  myPins: myPinsReducer,
  images: images
});
