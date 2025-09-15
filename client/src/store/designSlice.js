import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProject } from "./projectsSlice";

export const fetchDesigns = createAsyncThunk(
  "designs/fetchDesigns",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/design.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();
    return data;
  }
);

const designSlice = createSlice({
  name: "designs",
  initialState: {
    items: { Mockups: [], Infographics: [], IconsLogo: [], threeDModel: [] },
    isLoading: false,
    error: null,
  },
  reducers: {
    addDesign: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesigns.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDesigns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload; // keep structure
      })
      .addCase(fetchDesigns.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addDesign } = designSlice.actions;
export default designSlice.reducer;
