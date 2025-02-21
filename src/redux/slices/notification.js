import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notification: { message: '', type: '' },
  status: 'idle',
};

const notificationSlice = createSlice({
  initialState,
  name: 'notification',
  reducers: {
    setNotification: (state, { payload }) => {
      state.notification = payload;
      state.status = 'success';
    },
  },
});

export const notificationReducer = notificationSlice.reducer;

export default notificationSlice;
