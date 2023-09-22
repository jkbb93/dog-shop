import { productActions } from "./product-slice";

const updateProducts = function updateProducts(newProducts) {
    return (dispatch) => {
        dispatch(productActions.setProducts(newProducts));
        dispatch(productActions.updateDisplayedProducts());
    };
};

const updateFilters = function updateFilters(newFilters) {
    return (dispatch) => {
        dispatch(productActions.addFilters(newFilters));
        dispatch(productActions.updateDisplayedProducts());
    };
};

const updateSorting = function updateSorting(newSorting) {
    return (dispatch) => {
        dispatch(productActions.setSorting(newSorting));
        dispatch(productActions.updateDisplayedProducts());
    };
};

const clearFiltersAndSorting = function clearFiltersAndSorting() {
    return (dispatch) => {
        dispatch(productActions.clearFiltersAndSorting());
        dispatch(productActions.updateDisplayedProducts());
    };
}


export {
    updateProducts,
    updateFilters,
    updateSorting,
    clearFiltersAndSorting,
};