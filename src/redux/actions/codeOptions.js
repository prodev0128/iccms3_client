import apiAction from '../apiAction';
import codeOptionsSlice from '../slices/codeOptions';

export const fetchCodeOptions = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: 'http://localhost:3128/codeOptions',
  };
  return apiAction(codeOptionsSlice.actions.fetchCodeOptions, apiInfo);
};
