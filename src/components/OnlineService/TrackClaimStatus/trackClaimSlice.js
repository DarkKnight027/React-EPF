// src/components/OnlineService/TrackClaim/trackClaimSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  claimStatus: [],
  personalInfo: {},
};

const trackClaimSlice = createSlice({
  name: "trackClaim",
  initialState,
  reducers: {
    setClaimStatus: (state, action) => {
      state.claimStatus = action.payload;
    },
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
  },
});

export const { setClaimStatus, setPersonalInfo } = trackClaimSlice.actions;
export default trackClaimSlice.reducer;
