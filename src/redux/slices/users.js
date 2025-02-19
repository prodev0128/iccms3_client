import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  status: 'idle',
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
        state.users = data;
      } else if (status === 'failed') {
        state.error = error;
      }
    },
  },
});

export const usersReducer = usersSlice.reducer;

export default usersSlice;
