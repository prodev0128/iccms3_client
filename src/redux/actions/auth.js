import apiAction from '../apiAction';
import authSlice from '../slices/auth';

const authUrl = `http://localhost:${process.env.REACT_APP_AUTH_PORT}/auth`;

export const initialize = () => (dispatch) => {
  dispatch(authSlice.actions.initialize());
};

export const login = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `${authUrl}/login`,
  };
  return apiAction(authSlice.actions.login, apiInfo);
};

export const logout = () => (dispatch) => {
  dispatch(authSlice.actions.logout());
};

export const register = async (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `${authUrl}/register`,
  };
  return apiAction(authSlice.actions.register, apiInfo);
};

export const fetchProfile = () => {
  const apiInfo = {
    method: 'GET',
    url: `${authUrl}/profile`,
  };
  return apiAction(authSlice.actions.fetchProfile, apiInfo);
};
