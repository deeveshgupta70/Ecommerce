import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
      };
    case SET_GRID_VIEW:
      return { ...state, gridView: true };
    case SET_LIST_VIEW:
      return { ...state, gridView: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return { ...state, filteredProducts: tempProducts };
    default:
      throw new Error(`"${action.type}" doesn't match action type`);
  }
};

export default filter_reducer;
