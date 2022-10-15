import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, sortReducer } from "./features/index";

export const store = configureStore({
  reducer: { filter: filterReducer, sort: sortReducer },
});
