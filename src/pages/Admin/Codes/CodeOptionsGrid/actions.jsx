import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import {
  createCodeOption,
  deleteCodeOption,
  fetchCodeOptions,
  setCurrentCodeOption,
  updateCodeOption,
} from '../../../../redux/actions/codeOptions';
import { debounceTime } from '../../../../utils/utils';
import CodeOptionDialog from '../Dialogs/CodeOptionDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const dispatch = useDispatch();
  const dialogs = useDialogs();

  const debouncedFetchCodeOptions = useDebounceCallback(
    useCallback(async () => {
      await dispatch(
        fetchCodeOptions({
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel]),
    debounceTime,
  );

  const handleCreateCodeOption = useCallback(async () => {
    const createdCodeOption = await dialogs.open(CodeOptionDialog, { type: 'Create' });
    if (!createdCodeOption) {
      return;
    }
    await dispatch(createCodeOption(createdCodeOption));
  }, [dispatch, dialogs]);

  const handleUpdateCodeOption = useCallback(
    async (data) => {
      const updatedCodeOption = await dialogs.open(CodeOptionDialog, { type: 'Edit', data });
      if (!updatedCodeOption) {
        return;
      }
      await dispatch(updateCodeOption(data.id, updatedCodeOption));
    },
    [dispatch, dialogs],
  );

  const handleDeleteCodeOption = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this CodeOption?', {
        cancelText: 'No',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(deleteCodeOption(data.id));
    },
    [dispatch, dialogs],
  );

  const handleAllowCodeOption = useCallback(
    async (data) => {
      await dispatch(updateCodeOption(data.id, { isActive: true }));
    },
    [dispatch],
  );

  const handleDisallowCodeOption = useCallback(
    async (data) => {
      await dispatch(updateCodeOption(data.id, { isActive: false }));
    },
    [dispatch],
  );

  const handleSetCurrentCodeOption = useCallback(
    async (data) => {
      await dispatch(setCurrentCodeOption(data));
    },
    [dispatch],
  );

  useEffect(() => {
    debouncedFetchCodeOptions();
  }, [debouncedFetchCodeOptions]);

  return {
    fetchCodeOptions: debouncedFetchCodeOptions,
    createCodeOption: handleCreateCodeOption,
    updateCodeOption: handleUpdateCodeOption,
    deleteCodeOption: handleDeleteCodeOption,
    allowCodeOption: handleAllowCodeOption,
    disallowCodeOption: handleDisallowCodeOption,
    setCurrentCodeOption: handleSetCurrentCodeOption,
  };
};

export default useActions;
