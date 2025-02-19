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
    login: (state, { payload }) => {
      state.status = payload.status;
      if (payload.status === 'succeeded') {
        state.users = payload.users;
      } else if (payload.status === 'failed') {
        // state.error = payload.error;
      }
      return state;
    },
  },
});

export const usersReducer = usersSlice.reducer;

export default usersSlice;
