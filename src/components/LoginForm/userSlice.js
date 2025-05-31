import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< Updated upstream
  uan: "123",
  password: "123",
  username: "King",
=======
  uan: '123456789012',
  password: '123123     ',
    username: "King",
>>>>>>> Stashed changes
  isLoggedIn: false, // <-- Add isLoggedIn field
};

const userSlice = createSlice({
  name: "user",
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
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
