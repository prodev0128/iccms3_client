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
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.users.push(data);
        state.totalCount++;
      }
    },
    updateUser: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.users = state.users.map((user) => (user.id === data.id ? data : user));
      }
    },
    updateUserRoles: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.users = state.users.map((user) => (user.id === data.id ? data : user));
      }
    },
    deleteUser: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.users = state.users.filter((user) => user.id !== data.id);
        state.totalCount--;
      }
    },
    resetPassword: (state, { payload }) => {
      const { status } = payload;
      state.status = status;
    },
  },
});

export const usersReducer = usersSlice.reducer;

export default usersSlice;
