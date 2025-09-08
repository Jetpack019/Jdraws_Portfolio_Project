import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import userReducer from "./userSlice";
import designsReducer from "./designSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
    designs: designsReducer,
  },
});

export default store;
