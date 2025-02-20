import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { codeOptionsReducer } from './codeOptions';
import { codesReducer } from './codes';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  auth: authReducer,
  codeOptions: codeOptionsReducer,
  codes: codesReducer,
  users: usersReducer,
});

export default rootReducer;
