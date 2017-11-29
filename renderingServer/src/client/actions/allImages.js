export const FETCH_DATA = 'fetch_data';
export const fetchData = () => async (dispatch, getState, axiosInstance) => {
  console.log('fetchingdata');
  const res = await axiosInstance.get('/data');

  dispatch({
    type: FETCH_DATA,
    payload: res
  });
};
