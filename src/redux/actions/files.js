import apiAction from '../apiAction';
import filesSlice from '../slices/files';

const filesUrl = `http://localhost:${process.env.REACT_APP_CENSOR_PORT}/files`;

export const fetchFiles = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `${filesUrl}`,
  };
  return apiAction(filesSlice.actions.fetchFiles, apiInfo);
};

export const updateFile = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `${filesUrl}/${id}`,
  };
  return apiAction(filesSlice.actions.updateFile, apiInfo);
};

export const censorFiles = (id, data) => {
  const apiInfo = {
    data,
    method: 'PATCH',
    url: `${filesUrl}/censor`,
  };
  return apiAction(filesSlice.actions.censorFiles, apiInfo);
};

export const selectFile = (data) => (dispatch) => {
  dispatch(filesSlice.actions.selectFile(data));
};
