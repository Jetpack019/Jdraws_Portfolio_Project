import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInternship = createAsyncThunk(
  "internship/fetchInternship",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/experience/internship/aghim_internship.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch internship");
    }
    const data = await response.json();
    return data;
  }
);

const internshipSlice = createSlice({
  name: "internships",
  initialState: {
    InternshipContent: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addInternship: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInternship.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchInternship.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchInternship.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addInternship } = internshipSlice.actions;
export default internshipSlice.reducer;
