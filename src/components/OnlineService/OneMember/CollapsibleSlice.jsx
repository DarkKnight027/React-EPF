// slices/collapsibleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Track each section by unique key
  sections: {
    instructions: false,
    personalInfo: false,
    presentAccountDetails: false,
  },
};

const collapsibleSlice = createSlice({
  name: "collapsible",
  initialState,
  reducers: {
    toggleSection: (state, action) => {
      const key = action.payload;
      state.sections[key] = !state.sections[key];
    },
  },
});

export const { toggleSection } = collapsibleSlice.actions;

export default collapsibleSlice.reducer;
