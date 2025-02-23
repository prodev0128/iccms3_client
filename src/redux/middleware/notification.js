import notificationSlice from '../slices/notification';
import auth from './notifications/auth';
import users from './notifications/users';

const notificationMiddleware = (store) => (next) => (action) => {
  if (!action.payload || !action.payload.status) {
    return next(action);
  }

  let notification;
  const type = action.type.split('/')[0];

  switch (type) {
    case 'auth':
      notification = auth(action);
      break;
    case 'users':
      notification = users(action);
      break;
    default:
      notification = null;
  }

  if (notification) {
    store.dispatch(notificationSlice.actions.setNotification(notification));
  }

  return next(action);
};

export default notificationMiddleware;
