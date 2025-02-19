import apiAction from '../apiAction';
import authSlice from '../slices/users';

export const fetchUsers = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: 'http://localhost:3128/users',
  };
  return apiAction(authSlice.actions.fetchUsers, apiInfo);
};
