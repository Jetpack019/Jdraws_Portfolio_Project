import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import userReducer from "./userSlice";
import designsReducer from "./designSlice";
import experienceReducer from "./experienceSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
    designs: designsReducer,
    experience: experienceReducer,
  },
});

export default store;
