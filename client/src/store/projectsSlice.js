import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/main/projects.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return await response.json();
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.items.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
