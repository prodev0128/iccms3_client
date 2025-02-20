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
