import apiAction from '../apiAction';
import settingsSlice from '../slices/settings';

const settingsUrl = `http://localhost:${process.env.REACT_APP_ADMIN_PORT}/settings`;

export const fetchSettings = () => {
  const apiInfo = {
    method: 'GET',
    url: `${settingsUrl}`,
  };
  return apiAction(settingsSlice.actions.fetchSettings, apiInfo);
};

export const createSetting = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `${settingsUrl}`,
  };
  return apiAction(settingsSlice.actions.createSetting, apiInfo);
};

export const updateSetting = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `${settingsUrl}/${id}`,
  };
  return apiAction(settingsSlice.actions.updateSetting, apiInfo);
};

export const deleteSetting = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `${settingsUrl}/${id}`,
  };
  return apiAction(settingsSlice.actions.deleteSetting, apiInfo);
};
