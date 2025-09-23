import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchHardwareRepair = createAsyncThunk(
  "HardwareRepair/fetchHardwareRepair",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/refs/heads/main/experience/techExpertise/hardware_repair.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch thesis");
    }
    const data = await response.json();
    return data;
  }
);
const HardwareRepairSlice = createSlice({
  name: "HardwareRepair",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    addHardwareRepair: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHardwareRepair.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHardwareRepair.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchHardwareRepair.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { addHardwareRepair } = HardwareRepairSlice.actions;
export default HardwareRepairSlice.reducer;
