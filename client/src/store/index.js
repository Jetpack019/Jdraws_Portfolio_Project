import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import userReducer from "./userSlice";
import designsReducer from "./designSlice";
import experienceReducer from "./experienceSlice";
import internshipReducer from "./internshipSlice";
import annotationReducer from "./annotationSlice";
import thesisReducer from "./thesisSlice";
import techExpertiseReducer from "./techExpertiseSlice";
import pcBuildReducer from "././techexpertisepages/pcBuildSlice";
import HardwareRepairReducer from "././techexpertisepages/hardwareRepairSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
    designs: designsReducer,
    experience: experienceReducer,
    internship: internshipReducer,
    annotation: annotationReducer,
    thesis: thesisReducer,
    techExpertise: techExpertiseReducer,
    pcBuild: pcBuildReducer,
    hardwareRepair: HardwareRepairReducer,
  },
});

export default store;
