import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPCBuild = createAsyncThunk(
  "PCBuild/fetchPCBuild ",
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

const pcBuildSlice = createSlice({
  name: "PCBuid",
  initialState: {
    pc1Content: [],
    pc1UpgradeContent: [],
    pc2Content: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addPCBuild: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPCBuild.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPCBuild.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchPCBuild.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { addPCBuild } = pcBuildSlice.actions;
export default pcBuildSlice.reducer;
