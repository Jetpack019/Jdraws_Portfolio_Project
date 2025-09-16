import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAnnotation = createAsyncThunk(
  "annotation/fetchAnnotations",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/experience/annotation.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();
    return data;
  }
);

const annotationSlice = createSlice({
  name: "annotations",
  initialState: {
    items: { contentAnnotation: [] },
    isLoading: false,
    error: null,
  },
  reducers: {
    addAnnotation: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnotation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAnnotation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload; // keep structure
      })
      .addCase(fetchAnnotation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addAnnotation } = annotationSlice.actions;
export default annotationSlice.reducer;
