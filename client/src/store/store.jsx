import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./slices/contactSlices";
import projectReducer from "./slices/projectSlice";
import technologiesReducer from "./slices/technologiesSlice";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    projects: projectReducer,
    technologies: technologiesReducer,
    admin: adminReducer,
  },
});
