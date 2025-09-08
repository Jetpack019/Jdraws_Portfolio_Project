import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/projects.json?token=GHSAT0AAAAAADHW5VWJJACB4RFVUIAMT5Y42F7D5FQ"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();

    // Combine website + mobile into one array
    return data;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    items: { website: [], mobile: [] },
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload; // keep structure
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
