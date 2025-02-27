import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [],
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
    // createInvoice: (state, { payload }) => {
    //   const { data, status } = payload;
    //   state.status = status;
    //   if (status === 'success') {
    //     state.invoices.push(data);
    //     state.totalCount++;
    //   }
    // },
    updateInvoice: (state, { payload }) => {
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.invoices = state.invoices.map((invoice) => (invoice.id === data.id ? data : invoice));
      }
    },
    // deleteInvoice: (state, { payload }) => {
    //   const { data, status } = payload;
    //   state.status = status;
    //   if (status === 'success') {
    //     state.invoices = state.invoices.filter((invoice) => invoice.id !== data.id);
    //     state.totalCount--;
    //   }
    // },
  },
});

export const invoicesReducer = invoicesSlice.reducer;

export default invoicesSlice;
