import { FETCH_ALL_PINS, LIKE_PIN } from '../actions';

const allPinsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_ALL_PINS:
      return action.payload.data;
    case LIKE_PIN:
      //TODO
      return state;
    default:
      return state;
  }
};

export default allPinsReducer;
