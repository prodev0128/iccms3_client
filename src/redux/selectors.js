import { useSelector } from 'react-redux';

export const useAuth = () => useSelector((state) => state.auth);

export const useUsers = () => useSelector((state) => state.users);

export const useCodeOptions = () => useSelector((state) => state.codeOptions);

export const useCodes = () => useSelector((state) => state.codes);
