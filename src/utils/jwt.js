import { jwtDecode } from 'jwt-decode';

export const verify = (token) => {
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};
