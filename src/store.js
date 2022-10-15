import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./features/index";

export const store = configureStore({
  reducer: { filter: filterReducer },
});
