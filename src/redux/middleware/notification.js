import notificationSlice from '../slices/notification';

const notificationMiddleware = (store) => (next) => (action) => {
  if (!action.payload || !action.payload.status) {
    return next(action);
  }
  const { data, error, status } = action.payload;
  const type = `${action.type}/${status}`;
  let notification = {};

  switch (type) {
    case 'auth/login/success':
      notification = { message: 'Login Successfully', type: 'success' };
      break;
    case 'auth/login/failed':
      notification = { message: error, type: 'error' };
      break;
    case 'auth/fetchProfile/success':
      notification = { message: `${data.name}, Congratulations!!!`, type: 'success' };
      break;
    default:
      return next(action);
  }
  store.dispatch(notificationSlice.actions.setNotification(notification));

  return next(action);
};

export default notificationMiddleware;
