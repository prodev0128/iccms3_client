import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  status: 'idle',
  totalCount: 0,
};

const newsSlice = createSlice({
  initialState,
  name: 'news',
  reducers: {
    fetchNews: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.news = data.news;
        state.totalCount = data.totalCount;
      }
    },
    createNews: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.news.push(data);
      }
    },
    updateNews: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.news = state.news.map((code) => (code.id === data.id ? data : code));
      }
    },
    deleteNews: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.news = state.news.filter((code) => code.id !== data.id);
      }
    },
  },
});

export const newsReducer = newsSlice.reducer;

export default newsSlice;
