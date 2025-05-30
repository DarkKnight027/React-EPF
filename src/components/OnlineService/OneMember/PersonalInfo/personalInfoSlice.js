// src/features/personalInfo/personalInfoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to load JSON data
export const fetchPersonalInfo = createAsyncThunk(
  "personalInfo/fetchPersonalInfo",
  async () => {
    const response = await fetch("/personalInfo.json");
    const data = await response.json();
    return data;
  }
);

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: { data: {}, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonalInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPersonalInfo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPersonalInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default personalInfoSlice.reducer;
