import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

import { useNotification } from '../redux/selectors';

const SnackbarManager = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { notification, status } = useNotification();

  useEffect(() => {
    if (status === 'idle') {
      return;
    }
    enqueueSnackbar(notification.message || '', {
      autoHideDuration: notification.duration || 3000,
      variant: notification.type || 'success',
    });
  }, [notification, status, enqueueSnackbar]);
};

export default SnackbarManager;
