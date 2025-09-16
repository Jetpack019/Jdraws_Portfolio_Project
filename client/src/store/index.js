import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import userReducer from "./userSlice";
import designsReducer from "./designSlice";
import experienceReducer from "./experienceSlice";
import internshipReducer from "./internshipSlice";
import annotationReducer from "./annotationSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
    designs: designsReducer,
    experience: experienceReducer,
    internship: internshipReducer,
    annotation: annotationReducer,
  },
});

export default store;
