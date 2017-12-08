import { FETCH_ALL_PINS, LIKE_PIN } from '../actions';

const updateLike = (state, action) => {
    if(state.id === action.payload.data.id) {
      state.likes += 1;
    }
    return state;
};

const allPinsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_ALL_PINS:
      return action.payload.data;
    case LIKE_PIN:
      return state.map(i => updateLike(i, action));
    default:
      return state;
  }
};

export default allPinsReducer;
