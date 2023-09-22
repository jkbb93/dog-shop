import { useSelector, useDispatch } from "react-redux";
import { updateSorting } from "../../../../../store/product-slice-thunks";
import classes from "./SortByPriceDropdown.module.css";

function SortByPriceDropdown() {
    const currentSorting = useSelector(state => state.products.sorting);
    const dispatch = useDispatch();

    const dropdownChangeHandler = (event) => {
        const chosenOption = event.target.value;
        dispatch(updateSorting(chosenOption));
    };

    return (
        <div className={classes.dropdown}>
            <label htmlFor="sortby-dropdown">
                Sort By
            </label>
            <select id="sortby-dropdown" value={currentSorting} onChange={dropdownChangeHandler}>
                <option value="NONE">None</option>
                <option value="PRICE_LOW_TO_HIGH">Lowest Price</option>
                <option value="PRICE_HIGH_TO_LOW">Highest Price</option>
            </select>
        </div>
    );
}

export default SortByPriceDropdown;