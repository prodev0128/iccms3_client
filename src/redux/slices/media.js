import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blobUrl: null,
  filePath: null,
  loading: false,
};

const mediaSlice = createSlice({
  initialState,
  name: 'media',
  reducers: {
    fetchMedia: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.blobUrl = data.blobUrl;
        state.filePath = data.filePath;
      } else if (status === 'failed') {
        state.blobUrl = null;
      }
    },
  },
});

export const mediaReducer = mediaSlice.reducer;

export default mediaSlice;
