// import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import { fetchInvoices /*updateInvoice*/ } from '../../../../redux/actions/invoices';
import { useCodes } from '../../../../redux/selectors';
// import InvoiceDialog from '../Dialogs/InvoiceDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const [searchParams] = useSearchParams();
  // const { individualCodes } = useCodes();
  const dispatch = useDispatch();
  // const dialogs = useDialogs();

  const debouncedFetchInvoices = useDebounceCallback(
    useCallback(async () => {
      const status = searchParams.get('status');
      const fileType = searchParams.get('file_type');
      await dispatch(
        fetchInvoices({
          status,
          fileType,
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel, searchParams]),
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
