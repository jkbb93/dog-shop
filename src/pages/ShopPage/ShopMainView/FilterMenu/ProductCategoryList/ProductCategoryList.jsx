import { useSelector } from "react-redux";
import FilterMenuSection from "../FilterMenuSection";
import ProductCategoryListItem from "./ProductCategoryListItem";

function ProductCategoryList() {
    const allProducts = useSelector(state => state.products.allProducts);
    const categories = [];

    allProducts.forEach(product => {
        const notInCategoriesArray = !categories.includes(product.category);
        if (notInCategoriesArray) categories.push(product.category);
    });

    categories.sort();
    categories.unshift("All");

    const categoryListItems = categories.map(category => (
        <ProductCategoryListItem
            key={category}
            category={category}
        />
    ));

    return (
        <FilterMenuSection heading="Category">
            <ul>
                {categoryListItems}
            </ul>
        </FilterMenuSection>
    );
}

export default ProductCategoryList;