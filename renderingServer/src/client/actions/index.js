export const FETCH_USER = 'fetch__user';
export const fetchUser = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/user');

  dispatch({
    type: FETCH_USER,
    payload: res
  });
};

export const FETCH_ALL_PINS = 'fetch_all_pins';
export const fetchAllPins = () => async(dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/allPins');

  dispatch({
    type: FETCH_ALL_PINS,
    payload: res
  });
};

export const LIKE_PIN = 'like_pin';
export const likePin = (pinId) => async (dispatch, getState, axiosInstance) => {
  const res =  await axiosInstance.post('/allPins/like', {id: pinId});

  res.data = {id: pinId};

  dispatch({
    type: LIKE_PIN,
    payload: res
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

export const ADD_NEW_PIN = 'add_new_pin';
export const addNewPin = (newPin) => async(dispatch, getState, axiosInstance) => {
  const res =  await axiosInstance.post('/myPins/add', newPin);

  dispatch({
    type: ADD_NEW_PIN,
    payload: res
  });
};

export const DELETE_PIN = 'delete_pin';
export const deletePin = (pinId) => async (dispatch, getState, axiosInstance) => {
  const res =  await axiosInstance.post('/myPins/delete', {id: pinId});

  res.data = {id: pinId};

  dispatch({
    type: DELETE_PIN,
    payload: res
  });
};
