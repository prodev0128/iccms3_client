import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { codeOptionsReducer } from './codeOptions';
import { codesReducer } from './codes';
import { invoicesReducer } from './invoices';
import { newsReducer } from './news';
import { notificationReducer } from './notification';
import { settingsReducer } from './settings';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  auth: authReducer,

  users: usersReducer,
  codeOptions: codeOptionsReducer,
  codes: codesReducer,
  news: newsReducer,
  settings: settingsReducer,

  invoices: invoicesReducer,

  notification: notificationReducer,
});

export default rootReducer;
