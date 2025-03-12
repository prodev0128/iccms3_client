import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  codes: [],
  individualCodes: {},
  status: 'idle',
  totalCount: 0,
};

const codesSlice = createSlice({
  initialState,
  name: 'codes',
  reducers: {
    fetchIndividualCodes: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.individualCodes = data;
      }
    },
    fetchCodes: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.codes = data.codes;
        state.totalCount = data.totalCount;
      }
    },
    createCode: (state, { payload }) => {
      state.status = payload.status;
    },
    updateCode: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.codes = state.codes.map((code) => (code.id === data.id ? data : code));
      }
    },
    deleteCode: (state, { payload }) => {
      state.status = payload.status;
    },
  },
});

export const codesReducer = codesSlice.reducer;

export default codesSlice;
