import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { censorFiles, fetchFiles, setSelectedFiles, updateFile } from '../../../../redux/actions/files';
import { fetchMedia } from '../../../../redux/actions/media';

const useActions = () => {
  const dispatch = useDispatch();

  const debouncedFetchFiles = useDebounceCallback(
    useCallback((invoiceIds) => dispatch(fetchFiles({ invoiceIds: invoiceIds.join(',') })), [dispatch]),
  );

  const handleSetSelectedFiles = useCallback((data) => dispatch(setSelectedFiles(data)), [dispatch]);

  const handleUpdateFile = useCallback((data) => dispatch(updateFile(data.id, data)), [dispatch]);

  const handleCensorFiles = useCallback((data) => dispatch(censorFiles(data)), [dispatch]);

  const handleFetchMedia = useCallback((data) => dispatch(fetchMedia(data)), [dispatch]);

  return {
    fetchFiles: debouncedFetchFiles,
    updateFile: handleUpdateFile,
    censorFiles: handleCensorFiles,
    setSelectedFiles: handleSetSelectedFiles,
    fetchMedia: handleFetchMedia,
  };
};

export default useActions;
