import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import rootReducer from './rootReducer';

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;
