import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uan: '123456789012',
  password: 'password123',
    username: "King",
  isLoggedIn: false, // <-- Add isLoggedIn field
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const { login, logout } = userSlice.actions
export default userSlice.reducer;
