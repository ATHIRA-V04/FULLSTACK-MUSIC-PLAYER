import { configureStore } from "@reduxjs/toolkit";
// Remove "./slices/" because the files are in the same folder as this store.js
import authReducer from "./authSlice";
import uiReducer from "./uiSlices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

export default store;
