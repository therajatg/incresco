import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { allFilterFunctions, compose } from "../helperFunctions";

const initialState = {
  status: "idle",
  products: [],
  filteredProducts: [],
  gender: null,
  category: [],
  brand: [],
  searchedTerm: null,
  sortBy: null,
  error: null,
};

const getProductData = createAsyncThunk("posts/getAllProducts", async () => {
  console.log(1);
  const response = await axios.get("https://demo7303877.mockable.io/");
  return response.data.products;
});

const filterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    genderAction: (state, action) => {
      state.gender = action.payload;
      console.log(current(state));
      state.filteredProducts = compose(allFilterFunctions, state);
    },

    categoryAction: (state, action) => {
      state.category = action.payload;
      state.filteredProducts = compose(allFilterFunctions, state);
    },

    brandAction: (state, action) => {
      state.brand = action.payload;
      state.filteredProducts = compose(allFilterFunctions, state);
    },
    searchAction: (state, action) => {
      state.searchedTerm = action.payload;
      state.filteredProducts = compose(allFilterFunctions, state);
    },
    sortAction: (state, action) => {
      state.sortBy = action.payload;
      state.filteredProducts = compose(allFilterFunctions, state);
    },

    resetAction: (state) => {
      state.filteredProducts = state.products;
      state.gender = null;
      state.category = [];
      state.brand = [];
      state.searchedTerm = [];
    },
  },
  extraReducers: {
    [getProductData.pending]: (state) => {
      state.status = "loading";
    },
    [getProductData.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    [getProductData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export { getProductData };
export const {
  genderAction,
  categoryAction,
  brandAction,
  resetAction,
  searchAction,
  sortAction,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
