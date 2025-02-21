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

export const updateUser = (id, data) => {
  const apiInfo = {
    data,
    method: 'PATCH',
    url: `http://localhost:3128/users/${id}`,
  };
  return apiAction(usersSlice.actions.updateUser, apiInfo);
};

export const removeUser = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `http://localhost:3128/users/${id}`,
  };
  return apiAction(usersSlice.actions.removeUser, apiInfo);
};
