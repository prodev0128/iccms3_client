import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchIndividualCodes } from '../../../../redux/actions/codes';
import {
  createUser,
  deleteUser,
  fetchUsers,
  resetPassword,
  updateUser,
  updateUserRoles,
} from '../../../../redux/actions/users';
import { useCodes } from '../../../../redux/selectors';
import RolesDialog from '../Dialogs/RolesDialog';
import UserDialog from '../Dialogs/UserDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const { individualCodes } = useCodes();
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

  const handleCreateUser = useCallback(async () => {
    const createdUser = await dialogs.open(UserDialog, { type: 'Create', individualCodes });
    if (!createdUser) {
      return;
    }
    await dispatch(createUser(createdUser));
  }, [dispatch, dialogs, individualCodes]);

  const handleUpdateUser = useCallback(
    async (data) => {
      const updatedUser = await dialogs.open(UserDialog, { type: 'Edit', data, individualCodes });
      if (!updatedUser) {
        return;
      }
      await dispatch(updateUser(data.id, updatedUser));
    },
    [dispatch, dialogs, individualCodes],
  );

  const handleUpdateUserRoles = useCallback(
    async (data) => {
      const roles = await dialogs.open(RolesDialog, { type: 'Edit', data: data.roles });
      if (!roles) {
        return;
      }
      await dispatch(updateUserRoles(data.id, { roles }));
    },
    [dispatch, dialogs],
  );

  const handleDeleteUser = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this user?', {
        title: 'Confirm',
        cancelText: 'No',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(deleteUser(data.id));
    },
    [dispatch, dialogs],
  );

  const handleResetPassword = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to reset password for this user?', {
        title: 'Confirm',
        cancelText: 'Cancel',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(resetPassword(data.id));
    },
    [dispatch, dialogs],
  );

  const handleAllowUser = useCallback(
    async (data) => {
      await dispatch(updateUser(data.id, { isActive: true }));
    },
    [dispatch],
  );

  const handleDisallowUser = useCallback(
    async (data) => {
      await dispatch(updateUser(data.id, { isActive: false }));
    },
    [dispatch],
  );

  const debouncedFetchIndividualCodes = useDebounceCallback(
    useCallback(async () => {
      await dispatch(fetchIndividualCodes({ types: 'gender,job,dep' }));
    }, [dispatch]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchUsers();
  }, [debouncedFetchUsers]);

  useEffect(() => {
    debouncedFetchIndividualCodes();
  }, [debouncedFetchIndividualCodes]);

  return {
    fetchUsers: debouncedFetchUsers,
    createUser: handleCreateUser,
    updateUser: handleUpdateUser,
    updateUserRoles: handleUpdateUserRoles,
    deleteUser: handleDeleteUser,
    resetPassword: handleResetPassword,
    allowUser: handleAllowUser,
    disallowUser: handleDisallowUser,
    fetchIndividualCodes: debouncedFetchIndividualCodes,
  };
};

export default useActions;
