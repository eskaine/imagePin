import axios from 'axios';

export const FETCH_DATA = 'fetch_data';
export const fetchData = () => async dispatch => {
  const res = await axios.get('http://localhost:8080/data');
  
  dispatch({
    type: FETCH_DATA,
    payload: res
  });
};
