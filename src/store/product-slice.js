import { createSlice } from "@reduxjs/toolkit";
import productSliceReducers from "./product-slice-reducers";
import productData from "../assets/data/product-data";

const productsInitState = {
    allProducts: [...productData],
    displayedProducts: [...productData],
    filters: {
        search: "",
        brands: [],
        category: "All",
        price: {
            min: null,
            max: null,
        },
    },
    sorting: "NONE",
};

const productSlice = createSlice({
    name: "products",
    initialState: productsInitState,
    reducers: {
        setProducts: productSliceReducers.setProducts,
        addFilters: productSliceReducers.addFilters,
        setSorting: productSliceReducers.setSorting,
        clearFiltersAndSorting: productSliceReducers.clearFiltersAndSorting,
        updateDisplayedProducts: productSliceReducers.updateDisplayedProducts,
    },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
export const filtersInitState = productsInitState.filters;
