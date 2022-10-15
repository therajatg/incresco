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
  return state.gender === null
    ? data
    : data.filter((product) => state.gender === product.gender);
};

const getSortedData = (state, data) => {
  switch (state.sortBy) {
    case "lowToHigh":
      return data.sort((a, b) => a.price - b.price);
    case "highToLow":
      return data.sort((a, b) => b.price - a.price);
    case "year":
      return data.sort((a, b) => a.year - b.year);
    case "rating":
      return data.sort((a, b) => a.rating - b.rating);
    default:
      return data;
  }
};

export const allFilterFunctions = [
  getSearchData,
  getCategoryData,
  getBrandData,
  getGenderData,
  getSortedData,
];

export const compose = (allFilterFunctions, state) =>
  allFilterFunctions.reduce((acc, current) => {
    return current(state, acc);
  }, state.products);
