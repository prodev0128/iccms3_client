import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { censorFiles, fetchFiles, setSelectedFiles, updateFile } from '../../../../redux/actions/files';

const useActions = () => {
  const dispatch = useDispatch();

  const debouncedFetchFiles = useDebounceCallback(
    useCallback((invoiceIds) => dispatch(fetchFiles({ invoiceIds: invoiceIds.join(',') })), [dispatch]),
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
