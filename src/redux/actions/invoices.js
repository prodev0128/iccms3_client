import apiAction from '../apiAction';
import invoicesSlice from '../slices/invoices';

export const fetchInvoices = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `http://localhost:3129/invoices/`,
  };
  return apiAction(invoicesSlice.actions.fetchInvoices, apiInfo);
};

// export const createInvoice = (data) => {
//   const apiInfo = {
//     data,
//     method: 'POST',
//     url: `http://localhost:3128/codes`,
//   };
//   return apiAction(codesSlice.actions.createInvoice, apiInfo);
// };

export const updateInvoice = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `http://localhost:3129/invoices/${id}`,
  };
  return apiAction(invoicesSlice.actions.updateInvoice, apiInfo);
};

export const updateInvoicesStatus = (ids, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `http://localhost:3129/invoices/status`,
  };
  return apiAction(invoicesSlice.actions.updateInvoicesStatus, apiInfo);
};

export const setSelectedInvoices = (data) => (dispatch) => {
  dispatch(invoicesSlice.actions.setSelectedInvoices(data));
};
