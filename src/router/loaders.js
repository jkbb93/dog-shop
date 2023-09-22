import store from "../store";

const productViewPage = function productViewPageLoader({ params }) {
    const { productID: paramsProductID } = params;
    const { allProducts } = store.getState().products;

    const matchingProduct = allProducts.find(product => product.id === paramsProductID);

    return matchingProduct;
};

export default {
    productViewPage,
};