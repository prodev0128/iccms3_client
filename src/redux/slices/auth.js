import { createSlice } from '@reduxjs/toolkit';

import { removeAccessToken, setAccessToken } from '../../utils/axios';
import { verify } from '../../utils/jwt';

const initialUser = { avatar: '', jobTitle: '', name: '' };

const initialState = {
  authenticated: false,
  error: '',
  initialized: false,
  status: 'idle',
  user: initialUser,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    fetchProfile: (state, { payload }) => {
      const { data, error, status } = payload;
      state.status = status;
      if (status === 'succeeded') {
        state.user = data;
      } else if (status === 'failed') {
        state.error = error;
      }
    },
    initialize: (state) => {
      const accessToken = window.localStorage.getItem('accessToken');
      if (accessToken && verify(accessToken)) {
        setAccessToken(accessToken);
        state.authenticated = true;
      } else {
        removeAccessToken(accessToken);
        state.authenticated = false;
      }
      state.initialized = true;
    },
    loginUser: (state, action) => {
      const payload = action.payload;
      const { data, error, status } = payload;
      state.status = status;
      if (status === 'succeeded') {
        setAccessToken(data.accessToken);
        state.authenticated = true;
      } else if (status === 'failed') {
        state.error = error;
      }
    },
    logoutUser: (state) => {
      removeAccessToken();
      state.authenticated = false;
      state.status = 'succeeded';
      state.user = initialUser;
    },
    registerUser: (state, { payload }) => {
      const { error, status } = payload;
      state.status = status;
      if (status === 'failed') {
        state.error = error;
      }
    },
  },
});

export const authReducer = authSlice.reducer;

export default authSlice;
