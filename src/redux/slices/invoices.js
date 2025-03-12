import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [],
  selectedInvoices: [],
  selectedTab: {},
  status: 'idle',
  totalCount: 0,
};

const invoicesSlice = createSlice({
  initialState,
  name: 'invoices',
  reducers: {
    fetchInvoices: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.invoices = data.invoices;
        state.totalCount = data.totalCount;
      }
    },
    updateInvoice: (state, { payload }) => {
      state.status = payload.status;
    },
    updateInvoicesStatus: (state, { payload }) => {
      state.status = payload.status;
    },
    setSelectedInvoices: (state, { payload }) => {
      state.status = 'success';
      state.selectedInvoices = payload;
    },
    setSelectedTab: (state, { payload }) => {
      state.status = 'success';
      state.selectedTab = { ...state.selectedTab, ...payload };
    },
  },
});

export const invoicesReducer = invoicesSlice.reducer;

export default invoicesSlice;
