import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  codes: [],
  status: 'idle',
  totalCount: 0,
};

const codesSlice = createSlice({
  initialState,
  name: 'codes',
  reducers: {
    fetchCodes: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.codes = data.codes;
        state.totalCount = data.totalCount;
      }
    },
  },
});

export const codesReducer = codesSlice.reducer;

export default codesSlice;
