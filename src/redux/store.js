import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/LoginForm/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
