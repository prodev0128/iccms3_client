import apiAction from '../apiAction';
import codesSlice from '../slices/codes';

export const fetchIndividualCodes = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `http://localhost:3128/codes`,
  };
  return apiAction(codesSlice.actions.fetchIndividualCodes, apiInfo);
};

export const fetchCodes = (type, params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `http://localhost:3128/codes/${type}`,
  };
  return apiAction(codesSlice.actions.fetchCodes, apiInfo);
};

export const createCode = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `http://localhost:3128/codes`,
  };
  return apiAction(codesSlice.actions.createCode, apiInfo);
};

export const updateCode = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `http://localhost:3128/codes/${id}`,
  };
  return apiAction(codesSlice.actions.updateCode, apiInfo);
};

export const deleteCode = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `http://localhost:3128/codes/${id}`,
  };
  return apiAction(codesSlice.actions.deleteCode, apiInfo);
};
