import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { codeOptionsReducer } from './codeOptions';
import { codesReducer } from './codes';
import { invoicesReducer } from './invoices';
import { notificationReducer } from './notification';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  auth: authReducer,
  codeOptions: codeOptionsReducer,
  codes: codesReducer,
  invoices: invoicesReducer,
  notification: notificationReducer,
  users: usersReducer,
});

export default rootReducer;
