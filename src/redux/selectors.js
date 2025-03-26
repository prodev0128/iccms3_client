import { useSelector } from 'react-redux';

export const useAuth = () => useSelector((state) => state.auth);

export const useUsers = () => useSelector((state) => state.users);
export const useCodeOptions = () => useSelector((state) => state.codeOptions);
export const useCodes = () => useSelector((state) => state.codes);
export const useNews = () => useSelector((state) => state.news);
export const useSettings = () => useSelector((state) => state.settings);

export const useInvoices = () => useSelector((state) => state.invoices);
export const useFiles = () => useSelector((state) => state.files);

export const useMedia = () => useSelector((state) => state.media);

export const useNotification = () => useSelector((state) => state.notification);
