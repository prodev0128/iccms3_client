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
    removeUser: (state, { payload }) => {
      const { status } = payload;
      state.status = status;
    },
    updateUser: (state, { payload }) => {
      const { status } = payload;
      state.status = status;
    },
  },
});

export const usersReducer = usersSlice.reducer;

export default usersSlice;
