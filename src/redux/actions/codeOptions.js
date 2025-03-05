import apiAction from '../apiAction';
import codeOptionsSlice from '../slices/codeOptions';

const codeOptionsUrl = `http://localhost:${process.env.REACT_APP_ADMIN_PORT}/codeOptions`;

export const fetchCodeOptions = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `${codeOptionsUrl}`,
  };
  return apiAction(codeOptionsSlice.actions.fetchCodeOptions, apiInfo);
};

export const createCodeOption = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `${codeOptionsUrl}`,
  };
  return apiAction(codeOptionsSlice.actions.createCodeOption, apiInfo);
};

export const updateCodeOption = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `${codeOptionsUrl}/${id}`,
  };
  return apiAction(codeOptionsSlice.actions.updateCodeOption, apiInfo);
};

export const deleteCodeOption = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `${codeOptionsUrl}/${id}`,
  };
  return apiAction(codeOptionsSlice.actions.deleteCodeOption, apiInfo);
};

export const setCurrentCodeOption = (codeOption) => (dispatch) => {
  dispatch(codeOptionsSlice.actions.setCurrentCodeOption(codeOption));
};
