import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../../../../../store/product-slice-thunks";
import classes from "./BrandCheckbox.module.css";

function BrandCheckbox(props) {
    const currentBrands = useSelector(state => state.products.filters.brands);
    const dispatch = useDispatch();
    const brand = props.brand;

    const brandIncludedInFilter = currentBrands.includes(brand);
    const brandIsAll = (brand === "All");
    const noFilteredBrands = (currentBrands.length === 0);
    const boxShouldBeChecked = brandIncludedInFilter || (brandIsAll && noFilteredBrands);

    const toggleHandler = () => {
        let newBrandsFilterValue;

        if (brandIsAll) {
            newBrandsFilterValue = [];
        }

        if (brandIncludedInFilter) {
            newBrandsFilterValue = currentBrands.filter(includedBrand => includedBrand !== brand);
        }

        if (!brandIsAll && !brandIncludedInFilter) {
            newBrandsFilterValue = [...currentBrands];
            newBrandsFilterValue.push(brand);
        }

        dispatch(updateFilters({ brands: newBrandsFilterValue }));
    };

    return (
        <li className={classes["brand-checkbox"]}>
            <input
                id={brand}
                type="checkbox"
                checked={boxShouldBeChecked}
                onChange={toggleHandler}
            />
            <label htmlFor={brand}>{brand}</label>
        </li>
    );
}

export default BrandCheckbox;