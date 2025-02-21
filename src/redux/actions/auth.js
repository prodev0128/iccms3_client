import apiAction from '../apiAction';
import authSlice from '../slices/auth';

export const initialize = () => (dispatch) => {
  dispatch(authSlice.actions.initialize());
};

export const login = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: 'http://localhost:3128/auth/login',
  };
  return apiAction(authSlice.actions.login, apiInfo);
};

export const register = async (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: 'http://localhost:3128/auth/register',
  };
  return apiAction(authSlice.actions.register, apiInfo);
};

export const fetchProfile = () => {
  const apiInfo = {
    method: 'GET',
    url: 'http://localhost:3128/auth/profile',
  };
  return apiAction(authSlice.actions.fetchProfile, apiInfo);
};

export const logout = () => (dispatch) => {
  dispatch(authSlice.actions.logout());
};
