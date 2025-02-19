import axios from 'axios';

const axiosInt = axios.create();

axiosInt.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'There is an error!'),
);

export const setAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken);
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
  delete axios.defaults.headers.common.Authorization;
};

export default axiosInt;
