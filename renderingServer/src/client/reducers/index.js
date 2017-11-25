import { combineReducers } from 'redux';
import images from './images';
import auth from './auth';

export default combineReducers({
  auth: auth,
  images: images
});
