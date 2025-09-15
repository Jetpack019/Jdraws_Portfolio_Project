import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import userReducer from "./userSlice";
import designsReducer from "./designSlice";
import experienceReducer from "./experienceSlice";
import internshipReducer from "./internshipSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
    designs: designsReducer,
    experience: experienceReducer,
    internship: internshipReducer,
  },
});

export default store;
