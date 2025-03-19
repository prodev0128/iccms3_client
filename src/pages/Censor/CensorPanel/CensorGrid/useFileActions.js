import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchFiles, selectFile } from '../../../../redux/actions/files';

const useFileActions = () => {
  const dispatch = useDispatch();

  const debouncedFetchFiles = useDebounceCallback(
    useCallback(
      async (ids) => {
        await dispatch(fetchFiles({ ids: ids.join(',') }));
      },
      [dispatch],
    ),
    debounceTime,
  );

  const handleSelectFile = useCallback(
    (data) => {
      dispatch(selectFile(data));
    },
    [dispatch],
  );

  return {
    fetchFiles: debouncedFetchFiles,
    selectFile: handleSelectFile,
  };
};

export default useFileActions;
