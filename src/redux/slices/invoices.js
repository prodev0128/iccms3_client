import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [],
  selectedInvoices: [],
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
    updateInvoicesStatus: (state, { payload }) => {
      state.status = payload.status;
    },
    // deleteInvoice: (state, { payload }) => {
    //   const { data, status } = payload;
    //   state.status = status;
    //   if (status === 'success') {
    //     state.invoices = state.invoices.filter((invoice) => invoice.id !== data.id);
    //     state.totalCount--;
    //   }
    // },
    setSelectedInvoices: (state, { payload }) => {
      state.status = 'success';
      state.selectedInvoices = payload;
    },
  },
});

export const invoicesReducer = invoicesSlice.reducer;

export default invoicesSlice;
