import { FETCH_MY_PINS, ADD_NEW_PIN } from '../actions';

const pin = (state, action) => {
  switch(action.type) {
    case ADD_NEW_PIN:
      return {
        title: action.title,
        imageUrl: action.imageUrl
      };
    default:
      return state;
  }
};

const myPinsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_MY_PINS:
      return action.payload.data;
    case ADD_NEW_PIN :
      return [
        ...state,
        pin(undefined, action)
      ];
    default:
      return state;
  }
};

export default myPinsReducer;
