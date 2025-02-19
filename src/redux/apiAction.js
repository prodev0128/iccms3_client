import axios from 'axios';

const apiAction = (sliceAction, params) => async (dispatch) => {
  dispatch(sliceAction({ status: 'loading' }));
  try {
    const result = await axios(params);
    dispatch(sliceAction({ data: result.data, status: 'succeeded' }));
  } catch {
    dispatch(sliceAction({ status: 'failed' }));
  }
};

export default apiAction;
