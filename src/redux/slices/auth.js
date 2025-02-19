import { createSlice } from '@reduxjs/toolkit';

import { removeAccessToken, setAccessToken } from '../../utils/axios';
import { JWT_SECRET, verify } from '../../utils/jwt';

const initialUser = { avatar: '', jobTitle: '', name: '' };

const initialState = {
  authenticated: false,
  error: '',
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
      return state;
    },
    initialize: (state) => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');
        if (accessToken && verify(accessToken, JWT_SECRET)) {
          setAccessToken(accessToken);
          state.authenticated = true;
        } else {
          removeAccessToken(accessToken);
          state.authenticated = false;
        }
      } catch {
        state.authenticated = false;
      }
    },
    loginUser: (state, { payload }) => {
      const { data, error, status } = payload;
      state.status = status;
      if (status === 'succeeded') {
        setAccessToken(data.accessToken);
        state.authenticated = true;
      } else if (status === 'failed') {
        state.error = error;
      }
      return state;
    },
    logoutUser: (state) => {
      removeAccessToken();
      state.authenticated = false;
      state.status = 'succeeded';
      state.user = initialUser;
    },
  },
});

export const authReducer = authSlice.reducer;

export default authSlice;
