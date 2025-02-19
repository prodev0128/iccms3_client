import apiAction from '../apiAction';
import authSlice from '../slices/users';

export const fetchUsers = (data) => {
  console.log('fetchUsers', data);
  const apiInfo = {
    data,
    method: 'GET',
    url: 'http://localhost:3128/users',
  };
  return apiAction(authSlice.actions.fetchUsers, apiInfo);
};
