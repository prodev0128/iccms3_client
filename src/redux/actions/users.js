import apiAction from '../apiAction';
import usersSlice from '../slices/users';

export const fetchUsers = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: 'http://localhost:3128/users',
  };
  return apiAction(usersSlice.actions.fetchUsers, apiInfo);
};

export const createUser = (id, data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `http://localhost:3128/users`,
  };
  return apiAction(usersSlice.actions.createUser, apiInfo);
};

export const updateUser = (id, data) => {
  const apiInfo = {
    data,
    method: 'PATCH',
    url: `http://localhost:3128/users/${id}`,
  };
  return apiAction(usersSlice.actions.updateUser, apiInfo);
};

export const deleteUser = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `http://localhost:3128/users/${id}`,
  };
  return apiAction(usersSlice.actions.deleteUser, apiInfo);
};

export const resetPassword = (id) => {
  const apiInfo = {
    method: 'POST',
    url: `http://localhost:3128/users/reset-password/${id}`,
  };
  return apiAction(usersSlice.actions.resetPassword, apiInfo);
};
