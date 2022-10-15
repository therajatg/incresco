import { createSlice } from "@reduxjs/toolkit";
import { allFilterFunctions, compose } from "../helperFunctions";
import { store } from "../store";

const initialState = {
  filteredProducts: [],
  sortBy: null,
  price: null,
  rating: null,
  year: null,
};

console.log(store.getState());

const sortSlice = createSlice({
  name: "Sort",
  initialState,
  reducers: {
    sortAction: (state, action) => {
      state.sortBy = action.payload;
      state.filteredProducts = compose(allFilterFunctions, state);
    },

    ratingAction: (state, action) => {
      state.category = action.payload;
      state.filteredProducts = compose(allFilterFunctions, state);
    },

    yearAction: (state, action) => {
      state.brand = action.payload;
      state.filteredProducts = compose(allFilterFunctions, state);
    },
  },
});

export const { priceAction, ratingAction, yearAction } = sortSlice.action;
export const sortReducer = sortSlice.reducer;
