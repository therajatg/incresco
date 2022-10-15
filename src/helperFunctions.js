const getSearchData = (state, data) => {
  return state.searchedTerm === null
    ? data
    : data.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(state.searchedTerm.toLowerCase())
      );
};

const getCategoryData = (state, data) => {
  return state.category.length === 0
    ? data
    : data.filter((product) => state.category.includes(product.category));
};

const getBrandData = (state, data) => {
  return state.brand.length === 0
    ? data
    : data.filter((product) => state.brand.includes(product.brand));
};

const getGenderData = (state, data) => {
  //   console.log(state);
  return state.gender === null
    ? data
    : data.filter((product) => state.gender === product.gender);
};

export const allFilterFunctions = [
  getSearchData,
  getCategoryData,
  getBrandData,
  getGenderData,
];

export const compose = (allFilterFunctions, state) =>
  allFilterFunctions.reduce((acc, current) => {
    return current(state, acc);
  }, state.products);
