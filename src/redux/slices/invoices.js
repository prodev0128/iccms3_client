import { createSlice } from '@reduxjs/toolkit';

import { initialFilterModel, initialPaginationModel, initialSortModel } from '../../globals/constants';

const initialState = {
  invoices: [],
  selectedInvoices: [],
  selectedTab: {},
  searchModel: {
    paginationModel: initialPaginationModel,
    filterModel: initialFilterModel,
    sortModel: initialSortModel,
  },
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
      const { data, status } = payload;
      state.status = status;
      if (status === 'success') {
        state.invoices = state.invoices.map((invoice) => (invoice.id === data.id ? data : invoice));
      }
    },
    updateInvoicesStatus: (state, { payload }) => {
      state.status = payload.status;
    },
    setSelectedInvoices: (state, { payload }) => {
      state.status = 'success';
      state.selectedInvoices = payload;
    },
    setSearchModel: (state, { payload }) => {
      state.status = 'success';
      state.searchModel = { ...state.searchModel, ...payload };
    },
    setSelectedTab: (state, { payload }) => {
      state.status = 'success';
      state.selectedTab = { ...state.selectedTab, ...payload };
    },
  },
});

export const invoicesReducer = invoicesSlice.reducer;

export default invoicesSlice;
