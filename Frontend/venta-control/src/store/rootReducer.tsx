import { combineReducers } from '@reduxjs/toolkit';
import { AuthSlice } from './Auth/authSlice';


const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
});

export default rootReducer;