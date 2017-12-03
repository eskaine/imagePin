export const ADD_NEW_PIN = 'add_new_pin';
export const addNewPin = (newPin) => async(dispatch, getState, axiosInstance) => {
  const res =  await axiosInstance.post('/myPins/add', newPin);

  dispatch({
    type: ADD_NEW_PIN,
    payload: newPin
  });
};

export const FETCH_MY_PINS = 'fetch_my_pins';
export const fetchMyPins = () => async(dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/myPins');

  dispatch({
    type: FETCH_MY_PINS,
    payload: res
  });
};

export const FETCH_USER = 'fetch__user';
export const fetchUser = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/user');

  dispatch({
    type: FETCH_USER,
    payload: res
  });
};


export const FETCH_DATA = 'fetch_data';
export const fetchData = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/data');

  dispatch({
    type: FETCH_DATA,
    payload: res
  });
};
