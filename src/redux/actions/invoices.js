import apiAction from '../apiAction';
import invoicesSlice from '../slices/invoices';

const invoicesUrl = `http://localhost:${process.env.REACT_APP_CENSOR_PORT}/invoices`;

export const fetchInvoices = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `${invoicesUrl}`,
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
    url: `${invoicesUrl}/${id}`,
  };
  return apiAction(invoicesSlice.actions.updateInvoice, apiInfo);
};

export const updateInvoicesStatus = (data) => {
  const apiInfo = {
    data,
    method: 'PATCH',
    url: `${invoicesUrl}/status`,
  };
  return apiAction(invoicesSlice.actions.updateInvoicesStatus, apiInfo);
};

export const selectInvoices = (data) => (dispatch) => {
  dispatch(invoicesSlice.actions.selectInvoices(data));
};

export const setSelectedTab = (data) => (dispatch) => {
  dispatch(invoicesSlice.actions.setSelectedTab(data));
};
