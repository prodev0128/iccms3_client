import { useDialogs } from '@toolpad/core';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchUsers, removeUser, updateUser } from '../../../../redux/actions/users';
import { debounceTime } from '../../../../utils/utils';
import UserDialog from '../Dialogs/UserDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const dispatch = useDispatch();
  const dialogs = useDialogs();
  const { enqueueSnackbar } = useSnackbar();

  const debouncedFetchUsers = useDebounceCallback(
    useCallback(async () => {
      await dispatch(
        fetchUsers({
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel]),
    debounceTime,
  );

  const handleRemoveUser = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this user?', {
        cancelText: 'No',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(removeUser(data.id));
      await debouncedFetchUsers();
      enqueueSnackbar('Remove User Successfully.', { variant: 'success' });
    },
    [dispatch, debouncedFetchUsers, dialogs, enqueueSnackbar],
  );

  const handleEditUser = useCallback(
    async (data) => {
      const updatedUser = await dialogs.open(UserDialog, { data, type: 'Edit' });
      if (!updatedUser) {
        return;
      }
      await dispatch(updateUser(data.id, updatedUser));
      await debouncedFetchUsers();
      enqueueSnackbar('Edit User Successfully.', { variant: 'success' });
    },
    [dispatch, debouncedFetchUsers, dialogs, enqueueSnackbar],
  );

  const handleResetPassword = useCallback(
    async (data) => {
      const updatedUser = await dialogs.confirm('Are you sure you want to reset password for this user?', {
        cancelText: 'Cancel',
        okText: 'Yes',
      });
      if (!updatedUser) {
        return;
      }
      await dispatch(updateUser(data.id, updatedUser));
      await debouncedFetchUsers();
      enqueueSnackbar('Reset Password User Successfully.', { variant: 'success' });
    },
    [dispatch, debouncedFetchUsers, dialogs, enqueueSnackbar],
  );

  const handleAllowUser = useCallback(
    async (data) => {
      await dispatch(updateUser(data.id, { isActive: true }));
      await debouncedFetchUsers();
      enqueueSnackbar('Allow User Successfully.', { variant: 'success' });
    },
    [dispatch, debouncedFetchUsers, enqueueSnackbar],
  );

  const handleDisallowUser = useCallback(
    async (data) => {
      await dispatch(updateUser(data.id, { isActive: false }));
      await debouncedFetchUsers();
      enqueueSnackbar('Disallow User Successfully.', { variant: 'success' });
    },
    [dispatch, debouncedFetchUsers, enqueueSnackbar],
  );

  useEffect(() => {
    debouncedFetchUsers();
  }, [debouncedFetchUsers]);

  return {
    allowUser: handleAllowUser,
    disallowUser: handleDisallowUser,
    editUser: handleEditUser,
    fetchUsers: debouncedFetchUsers,
    removeUser: handleRemoveUser,
    resetPassword: handleResetPassword,
  };
};

export default useActions;
