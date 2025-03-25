import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
  selectedFiles: [],
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
        state.selectedFile = {};
      }
    },
    updateFile: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.files = state.files.map((file) => (file.id === data.id ? data : file));
      }
    },
    censorFiles: (state, { payload }) => {
      state.status = payload.status;
    },
    checkFiles: (state, { payload }) => {
      state.status = payload.status;
    },
    setSelectedFiles: (state, { payload }) => {
      state.status = 'success';
      state.selectedFiles = payload;
    },
  },
});

export const filesReducer = filesSlice.reducer;

export default filesSlice;
