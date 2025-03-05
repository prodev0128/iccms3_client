import apiAction from '../apiAction';
import usersSlice from '../slices/users';

const usersUrl = `http://localhost:${process.env.REACT_APP_ADMIN_PORT}/users`;

export const fetchUsers = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `${usersUrl}`,
  };
  return apiAction(usersSlice.actions.fetchUsers, apiInfo);
};

export const createUser = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `${usersUrl}`,
  };
  return apiAction(usersSlice.actions.createUser, apiInfo);
};

export const updateUser = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `${usersUrl}/${id}`,
  };
  return apiAction(usersSlice.actions.updateUser, apiInfo);
};

export const updateUserRoles = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `${usersUrl}/roles/${id}`,
  };
  return apiAction(usersSlice.actions.updateUserRoles, apiInfo);
};

export const deleteUser = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `${usersUrl}/${id}`,
  };
  return apiAction(usersSlice.actions.deleteUser, apiInfo);
};

export const resetPassword = (id) => {
  const apiInfo = {
    method: 'POST',
    url: `${usersUrl}/reset-password/${id}`,
  };
  return apiAction(usersSlice.actions.resetPassword, apiInfo);
};
