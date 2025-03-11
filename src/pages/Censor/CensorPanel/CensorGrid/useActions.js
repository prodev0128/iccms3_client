import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { debounceTime, findCategory } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import { fetchInvoices, updateInvoice, updateInvoicesStatus } from '../../../../redux/actions/invoices';
import { useInvoices } from '../../../../redux/selectors';

const useActions = (paginationModel, filterModel, sortModel) => {
  const { selectedTab } = useInvoices();
  const dispatch = useDispatch();

  const debouncedFetchInvoices = useDebounceCallback(
    useCallback(async () => {
      await dispatch(
        fetchInvoices({
          category: selectedTab.status.category || findCategory.ALL,
          minStatus: selectedTab.status.min || selectedTab.status.value,
          maxStatus: selectedTab.status.max || selectedTab.status.value,
          fileType: selectedTab.fileType.value,
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel, selectedTab]),
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
      await dispatch(fetchIndividualCodes({ types: 'job,dep,status,action,cenFlag,fileType' }));
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
