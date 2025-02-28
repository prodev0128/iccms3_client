// import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import { fetchInvoices /*updateInvoice*/ } from '../../../../redux/actions/invoices';
import { debounceTime } from '../../../../utils/utils';
// import InvoiceDialog from '../Dialogs/InvoiceDialog';

const useActions = (paginationModel, filterModel, sortModel, individualCodes) => {
  const dispatch = useDispatch();
  // const dialogs = useDialogs();

  const debouncedFetchInvoices = useDebounceCallback(
    useCallback(async () => {
      await dispatch(
        fetchInvoices({
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel]),
    debounceTime,
  );

  // const handleUpdateInvoice = useCallback(
  //   async (data) => {
  //     // const updatedInvoice = await dialogs.open(InvoiceDialog, { type: 'Edit', data, individualCodes });
  //     // if (!updatedInvoice) {
  //     //   return;
  //     // }
  //     // await dispatch(updateInvoice(data.id, updatedInvoice));
  //   },
  //   [dispatch, dialogs, individualCodes],
  // );

  const debouncedFetchIndividualCodes = useDebounceCallback(
    useCallback(async () => {
      await dispatch(fetchIndividualCodes({ types: 'job,dep,status,cenFlag,fileType' }));
    }, [dispatch]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchInvoices();
  }, [debouncedFetchInvoices]);

  useEffect(() => {
    debouncedFetchIndividualCodes();
  }, [debouncedFetchIndividualCodes]);

  return {
    fetchInvoices: debouncedFetchInvoices,
    // updateInvoice: handleUpdateInvoice,
    fetchIndividualCodes: debouncedFetchIndividualCodes,
  };
};

export default useActions;
