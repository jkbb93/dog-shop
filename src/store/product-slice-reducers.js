import helpers from "./product-slice-reducer-helpers";
import { filtersInitState } from "./product-slice";

const setProducts = function (state, action) {
    state.allProducts = action.payload;
};


const addFilters = function addFilters(state, action) {
    state.filters = {
        ...state.filters,
        ...action.payload,
    };
};


const setSorting = function setSorting(state, action) {
    state.sorting = action.payload;
};


const clearFiltersAndSorting = function clearFiltersAndSorting(state) {
    state.filters = filtersInitState;
    state.sorting = "NONE";
};


const updateDisplayedProducts = function updateDisplayedProducts(state) {
    const { allProducts, sorting, filters } = state;

    const filteredProducts = helpers.applyFilters(allProducts, filters);
    const filteredAndSortedProducts = helpers.sortProducts(filteredProducts, sorting);

    state.displayedProducts = filteredAndSortedProducts;
};


export default {
    setProducts,
    addFilters,
    setSorting,
    clearFiltersAndSorting,
    updateDisplayedProducts,
};