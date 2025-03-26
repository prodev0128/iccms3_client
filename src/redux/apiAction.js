import axios from '../globals/axios';

const apiAction =
  (sliceAction, params, options = {}) =>
  async (dispatch) => {
    dispatch(sliceAction({ status: 'loading', params }));
    try {
      const result = await axios(params);
      const transformedData = options.transformResponse ? options.transformResponse(result.data) : result.data;
      dispatch(sliceAction({ data: transformedData, status: 'success', params }));
    } catch (error) {
      dispatch(
        sliceAction({
          error: error.message || 'An unexpected error occurred during the operation.',
          status: 'failed',
          params,
        }),
      );
    }
  };

export default apiAction;
