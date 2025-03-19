import { useDialogs } from '@toolpad/core';
import { useCallback } from 'react';

import CensorDialog from '../Dialogs/CensorDialog';

const useCensorActions = () => {
  const dialogs = useDialogs();

  const handleCensorInvoices = useCallback(
    (data) => {
      dialogs.open(CensorDialog, { data });
    },
    [dialogs],
  );

  const handleViewInvoices = useCallback(() => {}, []);

  const handleDownloadInvoices = useCallback(() => {}, []);

  return {
    censorInvoices: handleCensorInvoices,
    viewInvoices: handleViewInvoices,
    downloadInvoices: handleDownloadInvoices,
  };
};

export default useCensorActions;
