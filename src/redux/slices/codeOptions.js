import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  codeOptions: [],
  error: '',
  status: 'idle',
  totalCount: 0,
};

const codeOptionsSlice = createSlice({
  initialState,
  name: 'codeOptions',
  reducers: {
    fetchCodeOptions: (state, { payload }) => {
      const { data, error, status } = payload;
      state.status = status;
      if (status === 'succeeded') {
        state.codeOptions = data.codeOptions;
        state.totalCount = data.totalCount;
      } else if (status === 'failed') {
        state.error = error;
      }
    },
  },
});

export const codeOptionsReducer = codeOptionsSlice.reducer;

export default codeOptionsSlice;
