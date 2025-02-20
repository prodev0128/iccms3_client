import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  codes: [],
  error: '',
  status: 'idle',
  totalCount: 0,
};

const codesSlice = createSlice({
  initialState,
  name: 'codes',
  reducers: {
    fetchCodes: (state, { payload }) => {
      const { data, error, status } = payload;
      state.status = status;
      if (status === 'succeeded') {
        state.codes = data.codes;
        state.totalCount = data.totalCount;
      } else if (status === 'failed') {
        state.error = error;
      }
    },
  },
});

export const codesReducer = codesSlice.reducer;

export default codesSlice;
