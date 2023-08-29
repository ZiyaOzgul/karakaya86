import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slicer";

export const store = configureStore({
  reducer: {
    slice: sliceReducer,
  },
});
