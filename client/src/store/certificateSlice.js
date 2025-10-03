import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCertification = createAsyncThunk(
  "certification/fetchCertifications",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/certificates/certificates.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch certifications");
    }
    const data = await response.json();
    return data;
  }
);

const certificationSlice = createSlice({
  name: "certifications",
  initialState: {
    items: { contentCertification: [] },
    isLoading: false,
    error: null,
  },
  reducers: {
    addCertification: (state, action) => {
      state.items.contentCertification.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertification.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCertification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCertification.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addCertification } = certificationSlice.actions;
export default certificationSlice.reducer;
