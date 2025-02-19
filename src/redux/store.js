import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './slices';

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export default store;
