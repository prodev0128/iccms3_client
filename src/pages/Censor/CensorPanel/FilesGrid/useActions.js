import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { censorFiles, fetchFiles, setSelectedFiles, updateFile } from '../../../../redux/actions/files';
import { useInvoices } from '../../../../redux/selectors';

const useActions = () => {
  const dispatch = useDispatch();
  const { selectedInvoices } = useInvoices();
  const selectedInvoiceIds = useMemo(() => selectedInvoices?.map((invoice) => invoice.id), [selectedInvoices]);

  const debouncedFetchFiles = useDebounceCallback(
    useCallback(() => dispatch(fetchFiles({ ids: selectedInvoiceIds.join(',') })), [dispatch, selectedInvoiceIds]),
  );

  const handleSetSelectedFiles = useCallback((data) => dispatch(setSelectedFiles(data)), [dispatch]);

  const handleUpdateFile = useCallback((data) => dispatch(updateFile(data.id, data)), [dispatch]);

  const handleCensorFiles = useCallback((data) => dispatch(censorFiles(data)), [dispatch]);

  return {
    fetchFiles: debouncedFetchFiles,
    updateFile: handleUpdateFile,
    censorFiles: handleCensorFiles,
    setSelectedFiles: handleSetSelectedFiles,
  };
};

export default useActions;
