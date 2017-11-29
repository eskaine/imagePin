export const ADD_NEW_PIN = 'add_new_pin';
export const addNewPin = (newPin) => async(dispatch, getState, axiosInstance) => {

  const res =  await axiosInstance.post('/myPins/add', newPin);
  console.log(res);
  
};

export const FETCH_MY_PINS = 'fetch_my_pins';
export const fetchMyPins = () => async(dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/myPins');

  dispatch({
    type: FETCH_DATA,
    payload: res
  });
};
