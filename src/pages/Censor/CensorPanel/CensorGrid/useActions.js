import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { debounceTime, findCategory, invoiceActions } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import { fetchInvoices, updateInvoice, updateInvoicesStatus } from '../../../../redux/actions/invoices';
import { fetchUsers } from '../../../../redux/actions/users';
import { useCodes, useInvoices } from '../../../../redux/selectors';
import TransferDialog from '../Dialogs/TransferDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const { selectedTab } = useInvoices();
  const { individualCodes } = useCodes();
  const dispatch = useDispatch();
  const dialogs = useDialogs();

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

  useEffect(() => {
    debouncedFetchInvoices();
  }, [debouncedFetchInvoices]);

  const handleUpdateInvoice = useCallback(
    async (data) => {
      await dispatch(updateInvoice(data.id, data));
    },
    [dispatch],
  );

  const handleUpdateInvoicesStatus = useCallback(
    async (data) => {
      let moreData = data;
      switch (data.action) {
        case invoiceActions.TRANSFER: {
          const res = await dialogs.open(TransferDialog, { data, individualCodes });
          moreData = { ...data, ...res };
          break;
        }
        case invoiceActions.ASSIGN:
          // moreData = data.concat(await dialogs.open(TransferDialog));
          break;
        default:
          break;
      }
      console.log('handleUpdateInvoiceStatus', moreData);
      await dispatch(updateInvoicesStatus(moreData));
    },
    [dispatch, dialogs, individualCodes],
  );

  const debouncedFetchIndividualCodes = useDebounceCallback(
    useCallback(async () => {
      await dispatch(fetchIndividualCodes({ types: 'dep,status,action,cenFlag,fileType' }));
    }, [dispatch]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchIndividualCodes();
  }, [debouncedFetchIndividualCodes]);

  const debouncedFetchAllUsers = useDebounceCallback(
    useCallback(async () => {
      await dispatch(fetchUsers());
    }, [dispatch]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchAllUsers();
  }, [debouncedFetchAllUsers]);

  return {
    fetchInvoices: debouncedFetchInvoices,
    updateInvoice: handleUpdateInvoice,
    updateInvoicesStatus: handleUpdateInvoicesStatus,
    fetchIndividualCodes: debouncedFetchIndividualCodes,
    fetchUsers: debouncedFetchAllUsers,
  };
};

export default useActions;
