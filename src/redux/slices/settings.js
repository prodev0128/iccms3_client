import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: [],
  status: 'idle',
};

const settingsSlice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    fetchSettings: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.settings = data.settings;
      }
    },
    createSetting: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.settings.push(data);
      }
    },
    updateSetting: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.settings = state.settings.map((code) => (code.id === data.id ? data : code));
      }
    },
    deleteSetting: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.settings = state.settings.filter((code) => code.id !== data.id);
      }
    },
  },
});

export const settingsReducer = settingsSlice.reducer;

export default settingsSlice;
