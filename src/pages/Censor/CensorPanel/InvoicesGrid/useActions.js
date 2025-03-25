import { useDialogs } from '@toolpad/core';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { findCategory, invoiceActions } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import {
  fetchInvoices,
  setSearchModel,
  setSelectedInvoices,
  setSelectedTab,
  updateInvoice,
  updateInvoicesStatus,
} from '../../../../redux/actions/invoices';
import { fetchUsers } from '../../../../redux/actions/users';
import { useInvoices } from '../../../../redux/selectors';
import AssignDialog from '../Dialogs/AssignDialog';
import CensorDialog from '../Dialogs/CensorDialog';
import TransferDialog from '../Dialogs/TransferDialog';

const useActions = () => {
  const {
    searchModel: { filterModel, paginationModel, sortModel },
    selectedTab,
  } = useInvoices();
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
    }, [dispatch, selectedTab, paginationModel, filterModel, sortModel]),
  );

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
  );

  const debouncedFetchAllUsers = useDebounceCallback(
    useCallback(async () => {
      await dispatch(fetchUsers());
    }, [dispatch]),
  );

  const handleSetSelectedInvoices = useCallback((ids) => dispatch(setSelectedInvoices(ids)), [dispatch]);

  const handleSetSearchModel = useCallback((data) => dispatch(setSearchModel(data)), [dispatch]);

  const handleSetSelectedTab = useCallback((data) => dispatch(setSelectedTab(data)), [dispatch]);

  const handleCensorInvoices = useCallback((data) => dialogs.open(CensorDialog, { data }), [dialogs]);

  const handleViewInvoices = useCallback(() => {}, []);

  const handleDownloadInvoices = useCallback(() => {}, []);

  return {
    fetchInvoices: debouncedFetchInvoices,
    updateInvoice: handleUpdateInvoice,
    updateInvoicesStatus: handleUpdateInvoicesStatus,
    fetchIndividualCodes: debouncedFetchIndividualCodes,
    fetchUsers: debouncedFetchAllUsers,
    setSelectedInvoices: handleSetSelectedInvoices,
    setSearchModel: handleSetSearchModel,
    setSelectedTab: handleSetSelectedTab,
    censorInvoices: handleCensorInvoices,
    viewInvoices: handleViewInvoices,
    downloadInvoices: handleDownloadInvoices,
  };
};

export default useActions;
