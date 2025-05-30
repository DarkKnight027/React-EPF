import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uan: '123',
  password: '123',
  username: 'King',
  isLoggedIn: false,
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
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { login, logout, updatePassword } = userSlice.actions;
export default userSlice.reducer;
