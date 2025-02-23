import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { deleteUser, fetchUsers, resetPassword, updateUser } from '../../../../redux/actions/users';
import { debounceTime } from '../../../../utils/utils';
import UserDialog from '../Dialogs/UserDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const dispatch = useDispatch();
  const dialogs = useDialogs();

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

  const handleDeleteUser = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this user?', {
        cancelText: 'No',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(deleteUser(data.id));
    },
    [dispatch, debouncedFetchUsers, dialogs],
  );

  const handleEditUser = useCallback(
    async (data) => {
      const updatedUser = await dialogs.open(UserDialog, { data, type: 'Edit' });
      if (!updatedUser) {
        return;
      }
      await dispatch(updateUser(data.id, updatedUser));
    },
    [dispatch, debouncedFetchUsers, dialogs],
  );

  const handleResetPassword = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to reset password for this user?', {
        cancelText: 'Cancel',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(resetPassword(data.id));
    },
    [dispatch, debouncedFetchUsers, dialogs],
  );

  const handleAllowUser = useCallback(
    async (data) => {
      await dispatch(updateUser(data.id, { isActive: true }));
    },
    [dispatch, debouncedFetchUsers],
  );

  const handleDisallowUser = useCallback(
    async (data) => {
      await dispatch(updateUser(data.id, { isActive: false }));
    },
    [dispatch, debouncedFetchUsers],
  );

  useEffect(() => {
    debouncedFetchUsers();
  }, [debouncedFetchUsers]);

  return {
    allowUser: handleAllowUser,
    deleteUser: handleDeleteUser,
    disallowUser: handleDisallowUser,
    editUser: handleEditUser,
    fetchUsers: debouncedFetchUsers,
    resetPassword: handleResetPassword,
  };
};

export default useActions;
