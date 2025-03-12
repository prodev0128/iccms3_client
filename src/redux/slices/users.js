import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  totalCount: 0,
  users: [],
};

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    fetchUsers: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.users = data.users;
        state.totalCount = data.totalCount;
      }
    },
    createUser: (state, { payload }) => {
      state.status = payload.status;
    },
    updateUser: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.users = state.users.map((user) => (user.id === data.id ? data : user));
      }
    },
    deleteUser: (state, { payload }) => {
      state.status = payload.status;
    },
    resetPassword: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.users = state.users.map((user) => (user.id === data.id ? data : user));
      }
    },
  },
});

export const usersReducer = usersSlice.reducer;

export default usersSlice;
