import { createSlice } from '@reduxjs/toolkit';

import { removeAccessToken, setAccessToken } from '../../globals/axios';
import { verify } from '../../globals/jwt';

const initialUser = {
  avatar: '',
  jobTitle: '',
  name: '',
};

const initialState = {
  authenticated: false,
  initialized: false,
  status: 'idle',
  user: initialUser,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
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
    login: (state, action) => {
      const payload = action.payload;
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        setAccessToken(data.accessToken);
        state.authenticated = true;
      }
    },
    logout: (state) => {
      removeAccessToken();
      state.authenticated = false;
      state.status = 'success';
      state.user = initialUser;
    },
    register: (state, { payload }) => {
      const { status } = payload;
      state.status = status;
    },
    fetchProfile: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.user = data;
      } else if (status === 'failed') {
        state.authenticated = false;
        state.user = initialUser;
      }
    },
  },
});

export const authReducer = authSlice.reducer;

export default authSlice;
