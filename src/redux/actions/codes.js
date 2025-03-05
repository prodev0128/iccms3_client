import apiAction from '../apiAction';
import codesSlice from '../slices/codes';

const codesUrl = `http://localhost:${process.env.REACT_APP_ADMIN_PORT}/codes`;

export const fetchIndividualCodes = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `${codesUrl}`,
  };
  return apiAction(codesSlice.actions.fetchIndividualCodes, apiInfo);
};

export const fetchCodes = (type, params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `${codesUrl}/${type}`,
  };
  return apiAction(codesSlice.actions.fetchCodes, apiInfo);
};

export const createCode = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `${codesUrl}`,
  };
  return apiAction(codesSlice.actions.createCode, apiInfo);
};

export const updateCode = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `${codesUrl}/${id}`,
  };
  return apiAction(codesSlice.actions.updateCode, apiInfo);
};

export const deleteCode = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `${codesUrl}/${id}`,
  };
  return apiAction(codesSlice.actions.deleteCode, apiInfo);
};
