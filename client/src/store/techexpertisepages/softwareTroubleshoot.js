import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSoftwareTroubleshoot = createAsyncThunk(
  "SoftwareTroubleshoot/fetchSoftwareTroubleshoot ",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/experience/techExpertise/pc_parts_upgrade.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch thesis");
    }
    const data = await response.json();
    return data;
  }
);

const SoftwareTroubleshootSlice = createSlice({
  name: "SoftwareTroubleshoot",
  initialState: {
    softwareTroubleshootContent: [],
  },
  reducers: {
    addSoftwareTroubleshoot: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoftwareTroubleshoot.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSoftwareTroubleshoot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchSoftwareTroubleshoot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { addSoftwareTroubleshoot } = SoftwareTroubleshootSlice.actions;
export default SoftwareTroubleshootSlice.reducer;
