import notificationSlice from '../slices/notification';

const notificationMiddleware = (store) => (next) => (action) => {
  if (!action.payload || !action.payload.status) {
    return next(action);
  }
  const { error, status } = action.payload;
  const type = `${action.type}/${status}`;
  console.log('type', type);

  switch (type) {
    case 'auth/fetchProfile/success':
      store.dispatch(notificationSlice.actions.setNotification({ message: 'Login Successfully', type: 'success' }));
      break;
    case 'auth/login/failed':
      store.dispatch(notificationSlice.actions.setNotification({ message: error, type: 'error' }));
      break;
    default:
      break;
  }

  return next(action);
};

export default notificationMiddleware;
