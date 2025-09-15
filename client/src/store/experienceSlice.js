import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExperience = createAsyncThunk(
  "experience/fetchExperience",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/experience/experience.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();
    return data;
  }
);

const experienceSlice = createSlice({
  name: "experiences",
  initialState: {
    ExperienceContent: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addExperience: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperience.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
