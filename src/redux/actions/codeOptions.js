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

export const createCodeOption = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `http://localhost:3128/codeOptions/`,
  };
  return apiAction(codeOptionsSlice.actions.createCodeOption, apiInfo);
};

export const updateCodeOption = (id, data) => {
  const apiInfo = {
    data,
    method: 'PATCH',
    url: `http://localhost:3128/codeOptions/${id}`,
  };
  return apiAction(codeOptionsSlice.actions.updateCodeOption, apiInfo);
};

export const deleteCodeOption = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `http://localhost:3128/codeOptions/${id}`,
  };
  return apiAction(codeOptionsSlice.actions.deleteCodeOption, apiInfo);
};
