import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
  selectedFile: {},
  status: 'idle',
  totalCount: 0,
};

const filesSlice = createSlice({
  initialState,
  name: 'files',
  reducers: {
    fetchFiles: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.files = data.files;
        state.totalCount = data.totalCount;
      }
    },
    updateFile: (state, { payload }) => {
      state.status = payload.status;
    },
    updateFilesStatus: (state, { payload }) => {
      state.status = payload.status;
    },
    selectFile: (state, { payload }) => {
      state.status = 'success';
      state.selectedFile = payload;
    },
  },
});

export const filesReducer = filesSlice.reducer;

export default filesSlice;
