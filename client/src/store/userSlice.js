import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Jetpack019/My_Custom_APIs/main/user.json"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();

  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    item: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.item.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload; // keep structure
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
