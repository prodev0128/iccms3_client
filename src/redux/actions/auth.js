import apiAction from '../apiAction';
import authSlice from '../slices/auth';

export const initialize = () => (dispatch) => {
  console.log('initialize');
  dispatch(authSlice.actions.initialize());
};

export const loginUser = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: 'http://localhost:3128/auth/login',
  };
  return apiAction(authSlice.actions.loginUser, apiInfo);
};

export const registerUser = async (data) => {
  console.log('registerUser', data);
  const apiInfo = {
    data,
    method: 'POST',
    url: 'http://localhost:3128/auth/register',
  };
  return apiAction(authSlice.actions.registerUser, apiInfo);
};

export const fetchProfile = () => {
  console.log('fetchProfile');
  const apiInfo = {
    method: 'GET',
    url: 'http://localhost:3128/auth/profile',
  };
  return apiAction(authSlice.actions.fetchProfile, apiInfo);
};

export const logoutUser = () => (dispatch) => {
  console.log('logoutUser');
  dispatch(authSlice.actions.logoutUser());
};
