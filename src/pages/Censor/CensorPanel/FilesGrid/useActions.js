import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { censorFiles, fetchFiles, selectFile, updateFile } from '../../../../redux/actions/files';

const useActions = () => {
  const dispatch = useDispatch();

  const debouncedFetchFiles = useDebounceCallback(
    useCallback(
      async (ids) => {
        await dispatch(fetchFiles({ ids: ids.join(',') }));
      },
      [dispatch],
    ),
  );

  const handleSelectFile = useCallback(
    (data) => {
      dispatch(selectFile(data));
    },
    [dispatch],
  );

  const handleUpdateFile = useCallback(
    (data) => {
      dispatch(updateFile(data.id, data));
    },
    [dispatch],
  );

  const handleCensorFiles = useCallback(
    (data) => {
      dispatch(censorFiles(data));
    },
    [dispatch],
  );

  return {
    fetchFiles: debouncedFetchFiles,
    selectFile: handleSelectFile,
    updateFile: handleUpdateFile,
    censorFiles: handleCensorFiles,
  };
};

export default useActions;
