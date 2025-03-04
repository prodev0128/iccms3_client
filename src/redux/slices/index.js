import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export default rootReducer;
