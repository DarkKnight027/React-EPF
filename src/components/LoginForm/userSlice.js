import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uan: '123456789012',
  password: 'password123',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export default userSlice.reducer;
