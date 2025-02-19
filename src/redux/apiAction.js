import axios from 'axios';

const apiAction = async (dispatch, sliceAction, params) => {
  dispatch(sliceAction({ status: 'loading' }));
  try {
    const result = await axios(params);
    dispatch(sliceAction({ data: result.data, status: 'succeeded' }));
  } catch (error) {
    dispatch(sliceAction({ error, status: 'failed' }));
  }
};

export default apiAction;
