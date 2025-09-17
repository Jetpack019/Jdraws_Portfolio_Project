import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchThesis = createAsyncThunk("thesis/fetchThesis", async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/experience/thesis/thesis_experience.json"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch thesis");
  }
  const data = await response.json();
  return data;
});

const thesisSlice = createSlice({
  name: "thesis",
  initialState: { thesisContent: [], isLoading: false, error: null },
  reducers: {
    addThesis: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThesis.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchThesis.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchThesis.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { addThesis } = thesisSlice.actions;
export default thesisSlice.reducer;
