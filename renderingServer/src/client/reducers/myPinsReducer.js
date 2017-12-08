import { FETCH_MY_PINS, ADD_NEW_PIN, DELETE_PIN } from '../actions';

const pin = (state, action) => {
  switch(action.type) {
    case ADD_NEW_PIN:
      return {
        id: action.payload.data.id,
        title: action.payload.data.title,
        imageUrl: action.payload.data.imageUrl
      };
    default:
      return state;
  }
};

const deletePin = (state, action) => {
  for(let i in state) {
    if(state[i].id === action.payload.data.id) {
      return [
        ...state.slice(0, i),
        ...state.slice(Number(i) + 1)
      ];
    }
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
    case DELETE_PIN:
      return deletePin(state, action);
    default:
      return state;
  }
};

export default myPinsReducer;
