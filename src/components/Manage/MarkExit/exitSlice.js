import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Adjust the file name to match your JSON
export const fetchExitData = createAsyncThunk("exit/fetchExitData", async () => {
  const response = await fetch("/personalInfo.json"); // ✅ updated path
  const data = await response.json();
  return data;
});

const exitSlice = createSlice({
  name: "exit",
  initialState: {
    employment: [],
    history: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExitData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExitData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employment = action.payload.employment ?? []; // safe fallback
        state.history = action.payload.history ?? [];
      })
      .addCase(fetchExitData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default exitSlice.reducer;
