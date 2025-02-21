import { configureStore } from '@reduxjs/toolkit';

import notificationMiddleware from './middleware/notification';
import rootReducer from './slices';

const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notificationMiddleware),
  reducer: rootReducer,
});

export default store;
