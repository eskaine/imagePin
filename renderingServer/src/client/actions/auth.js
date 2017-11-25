export const FETCH_USER = 'fetch__user';
export const fetchUser = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/user');
  
  dispatch({
    type: FETCH_USER  ,
    payload: res
  });
};
