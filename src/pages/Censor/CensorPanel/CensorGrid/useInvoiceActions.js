import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { debounceTime, findCategory, invoiceActions } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import { fetchInvoices, selectInvoices, updateInvoice, updateInvoicesStatus } from '../../../../redux/actions/invoices';
import { fetchUsers } from '../../../../redux/actions/users';
import { useInvoices } from '../../../../redux/selectors';
import AssignDialog from '../Dialogs/AssignDialog';
import TransferDialog from '../Dialogs/TransferDialog';

const useInvoiceActions = (paginationModel, filterModel, sortModel) => {
  const { selectedTab } = useInvoices();
  const dispatch = useDispatch();
  const dialogs = useDialogs();

  const debouncedFetchInvoices = useDebounceCallback(
    useCallback(async () => {
      await dispatch(
        fetchInvoices({
          category: selectedTab.status.category || findCategory.ALL,
          minStatus: selectedTab.status.min || selectedTab.status.value,
          maxStatus: selectedTab.status.max || selectedTab.status.value,
          dataType: selectedTab.dataType.value,
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
      await debouncedFetchInvoices();
    },
    [dispatch, debouncedFetchInvoices],
  );

  const handleUpdateInvoicesStatus = useCallback(
    async (data) => {
      let moreData = data;
      switch (data.action) {
        case invoiceActions.TRANSFER: {
          const res = await dialogs.open(TransferDialog);
          if (!res) {
            return;
          }
          moreData = { ...data, ...res };
          break;
        }
        case invoiceActions.ASSIGN: {
          const res = await dialogs.open(AssignDialog);
          if (!res) {
            return;
          }
          moreData = { ...data, ...res };
          break;
        }
        default:
          break;
      }
      await dispatch(updateInvoicesStatus(moreData));
      await debouncedFetchInvoices();
    },
    [dispatch, dialogs, debouncedFetchInvoices],
  );

  const debouncedFetchIndividualCodes = useDebounceCallback(
    useCallback(async () => {
      await dispatch(fetchIndividualCodes({ types: 'dep,status,action,cenFlag,dataType,org' }));
    }, [dispatch]),
    debounceTime,
  );

  const handleSelectInvoices = useCallback(
    (ids) => {
      dispatch(selectInvoices(ids));
    },
    [dispatch],
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
    selectInvoices: handleSelectInvoices,
    fetchIndividualCodes: debouncedFetchIndividualCodes,
    fetchUsers: debouncedFetchAllUsers,
  };
};

export default useInvoiceActions;
