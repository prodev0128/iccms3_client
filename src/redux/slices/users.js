import { createSlice } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';

const initialState = {
  error: '',
  status: 'idle',
  totalCount: 0,
  users: [],
};

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    fetchUsers: (state, { payload }) => {
      const { data, error, status } = payload;
      state.status = status;
      if (status === 'succeeded') {
        state.users = data.users;
        state.totalCount = data.totalCount;
      } else if (status === 'failed') {
        state.error = error;
      }
    },
    removeUser: (state, { payload }) => {
      const { error, status } = payload;
      state.status = status;
      if (status === 'failed') {
        state.error = error;
      }
    },
    updateUser: (state, { payload }) => {
      const { error, status } = payload;
      state.status = status;
      if (status === 'failed') {
        state.error = error;
      }
    },
  },
});

export const usersReducer = usersSlice.reducer;

export default usersSlice;
