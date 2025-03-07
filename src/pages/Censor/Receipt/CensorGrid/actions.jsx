import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import { fetchInvoices, updateInvoice, updateInvoicesStatus } from '../../../../redux/actions/invoices';

const useActions = (paginationModel, filterModel, sortModel) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

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

  const handleUpdateInvoice = useCallback(
    async (data) => {
      await dispatch(updateInvoice(data.id, data));
    },
    [dispatch],
  );

  const handleUpdateInvoicesStatus = useCallback(
    async (ids, event) => {
      await dispatch(updateInvoicesStatus(ids, event));
    },
    [dispatch],
  );

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
    updateInvoice: handleUpdateInvoice,
    updateInvoicesStatus: handleUpdateInvoicesStatus,
    fetchIndividualCodes: debouncedFetchIndividualCodes,
  };
};

export default useActions;
