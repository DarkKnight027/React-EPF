// redux/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobile: '123457890',
  email: 'abc@gmai.com',
  isMobileEditable: false,
  isEmailEditable: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleMobileEdit: (state) => {
      state.isMobileEditable = !state.isMobileEditable;
    },
    toggleEmailEdit: (state) => {
      state.isEmailEditable = !state.isEmailEditable;
    },
    updateContact: (state, action) => {
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.isMobileEditable = false;
      state.isEmailEditable = false;
    },
  },
});

export const { toggleMobileEdit, toggleEmailEdit, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
