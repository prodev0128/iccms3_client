import axios from '../../utils/axios';
import apiAction from '../apiAction';
import accountSlice from '../slices/auth';

export const initialize = () => (dispatch) => {
  dispatch(accountSlice.actions.initialize());
};

export const loginUser = (data) => async (dispatch) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: 'http://localhost:3128/auth/login',
  };
  await apiAction(dispatch, accountSlice.actions.loginUser, apiInfo);
};

export const registerUser = async (data) => {
  try {
    const apiInfo = {
      data,
      method: 'POST',
      url: 'http://localhost:3128/auth/register',
    };
    return await axios(apiInfo);
  } catch (err) {
    console.error(err);
  }
};

export const fetchProfile = () => async (dispatch) => {
  try {
    const apiInfo = {
      method: 'GET',
      url: 'http://localhost:3128/auth/profile',
    };
    await apiAction(dispatch, accountSlice.actions.fetchProfile, apiInfo);
  } catch (err) {
    console.error(err);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(accountSlice.actions.logoutUser());
};
