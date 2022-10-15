import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
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
  error: null,
};

const getProductData = createAsyncThunk("posts/getAllProducts", async () => {
  const response = await axios.get("https://demo7303877.mockable.io/");
  return response.data.products;
});

const filterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    genderAction: (state, action) => {
      state.gender = action.payload;
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
export const { genderAction, categoryAction, brandAction, resetAction } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
