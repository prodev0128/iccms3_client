import apiAction from '../apiAction';
import codesSlice from '../slices/codes';

export const fetchCodes = (codeOptionID, params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `http://localhost:3128/codeOptions/${codeOptionID}/codes`,
  };
  return apiAction(codesSlice.actions.fetchCodes, apiInfo);
};
