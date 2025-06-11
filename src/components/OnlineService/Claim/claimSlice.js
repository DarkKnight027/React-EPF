import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  claimFormData: null,
};
 
const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {
    setClaimData: (state, action) => {
      state.claimFormData = action.payload;
    },
    updateClaimField: (state, action) => {
      const { name, value } = action.payload;
      if (state.claimFormData) {
        state.claimFormData[name] = value;
      }
    },
  },
});
 
export const { setClaimData, updateClaimField } = claimSlice.actions;
export default claimSlice.reducer;