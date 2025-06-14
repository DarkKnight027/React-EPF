// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const storedUser = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  uan: storedUser.uan || '123',
  password: storedUser.password || '123',
  username: storedUser.username || 'King',
  isLoggedIn: storedUser.isLoggedIn || false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { uan, username, password } = action.payload;
      state.isLoggedIn = true;
      state.uan = uan;
      state.username = username;
      state.password = password;

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify({
        uan,
        username,
        password,
        isLoggedIn: true
      }));
    },
    logout: (state) => {
      state.isLoggedIn = false;
     
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { login, logout, updatePassword } = userSlice.actions;
export default userSlice.reducer;
