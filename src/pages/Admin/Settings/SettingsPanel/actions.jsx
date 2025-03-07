import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { createSetting, deleteSetting, fetchSettings, updateSetting } from '../../../../redux/actions/settings';
import SettingDialog from '../Dialogs/SettingDialog';

const useActions = () => {
  const dispatch = useDispatch();
  const dialogs = useDialogs();

  const debouncedFetchSettings = useDebounceCallback(
    useCallback(async () => {
      await dispatch(fetchSettings());
    }, [dispatch]),
    debounceTime,
  );

  const handleCreateSetting = useCallback(async () => {
    const createdSetting = await dialogs.open(SettingDialog, { type: 'Create' });
    if (!createdSetting) {
      return;
    }
    await dispatch(createSetting(createdSetting));
  }, [dispatch, dialogs]);

  const handleUpdateSetting = useCallback(
    async (data) => {
      const updatedSetting = await dialogs.open(SettingDialog, { type: 'Edit', data });
      if (!updatedSetting) {
        return;
      }
      await dispatch(updateSetting(data.id, updatedSetting));
    },
    [dispatch, dialogs],
  );

  const handleDeleteSetting = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this setting?', {
        title: 'Confirm',
        cancelText: 'No',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(deleteSetting(data.id));
    },
    [dispatch, dialogs],
  );

  useEffect(() => {
    debouncedFetchSettings();
  }, [debouncedFetchSettings]);

  return {
    fetchSettings: debouncedFetchSettings,
    createSetting: handleCreateSetting,
    updateSetting: handleUpdateSetting,
    deleteSetting: handleDeleteSetting,
  };
};

export default useActions;
