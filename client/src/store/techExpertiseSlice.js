import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTechExpertise = createAsyncThunk(
  "techExpertise/fetchTechExpertise",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/experience/techExpertise/techExpertise.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch thesis");
    }
    const data = await response.json();
    return data;
  }
);

const techExpertiseSlice = createSlice({
  name: "techExpertise",
  initialState: { techExpertiseContent: [], isLoading: false, error: null },
  reducers: {
    addtechExpertise: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechExpertise.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTechExpertise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTechExpertise.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { addtechExpertise } = techExpertiseSlice.actions;
export default techExpertiseSlice.reducer;
