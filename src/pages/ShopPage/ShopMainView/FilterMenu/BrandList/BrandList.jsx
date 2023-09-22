import { useSelector } from "react-redux";
import FilterMenuSection from "../FilterMenuSection";
import BrandCheckbox from "./BrandCheckbox";

function BrandList() {
    const allProducts = useSelector(state => state.products.allProducts);
    const brandsToDisplay = [];

    allProducts.forEach(product => {
        const notInBrandsArray = !brandsToDisplay.includes(product.brand);
        if (notInBrandsArray) brandsToDisplay.push(product.brand);
    });

    brandsToDisplay.sort();
    brandsToDisplay.unshift("All");

    const brandList = (
        <ul>
            {brandsToDisplay.map(brand => (
                <BrandCheckbox
                    key={brand}
                    brand={brand}
                />
            ))}
        </ul>
    );

    return (
        <FilterMenuSection heading="Brands">
            {brandList}
        </FilterMenuSection>
    );
}

export default BrandList;