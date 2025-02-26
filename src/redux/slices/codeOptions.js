import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  codeOptions: [],
  currentCodeOption: null,
  status: 'idle',
  totalCount: 0,
};

const codeOptionsSlice = createSlice({
  initialState,
  name: 'codeOptions',
  reducers: {
    fetchCodeOptions: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.codeOptions = data.codeOptions;
        state.totalCount = data.totalCount;
      }
    },
    createCodeOption: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.codeOptions.push(data);
        state.totalCount++;
      }
    },
    updateCodeOption: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.codeOptions = state.codeOptions.map((codeOption) => (codeOption.id === data.id ? data : codeOption));
      }
    },
    deleteCodeOption: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.codeOptions = state.codeOptions.filter((codeOption) => codeOption.id !== data.id);
        state.totalCount--;
      }
    },
    setCurrentCodeOption: (state, { payload }) => {
      state.status = 'success';
      state.currentCodeOption = payload;
    },
  },
});

export const codeOptionsReducer = codeOptionsSlice.reducer;

export default codeOptionsSlice;
