import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to load JSON data
export const fetchPresentAccountDetails = createAsyncThunk(
  "presentAccountDetails/fetchPresentAccountDetails",
  async () => {
    const response = await fetch("/presentAccountDetails.json");
    const data = await response.json();
    return data;
  }
);

const presentAccountDetailsSlice = createSlice({
  name: "presentAccountDetails",
  initialState: { data: {}, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPresentAccountDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPresentAccountDetails.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPresentAccountDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default presentAccountDetailsSlice.reducer;
