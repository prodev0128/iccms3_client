import axios from 'axios';

const apiAction = (sliceAction, params) => async (dispatch) => {
  dispatch(sliceAction({ status: 'loading' }));
  try {
    const result = await axios(params);
    dispatch(sliceAction({ data: result.data, status: 'success' }));
  } catch (error) {
    dispatch(sliceAction({ error: error.message || 'Unknown Error Occurred!!!', status: 'failed' }));
  }
};

export default apiAction;
