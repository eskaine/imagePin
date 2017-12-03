import { FETCH_USER } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.data;
    default:
      return state;
  }
}
