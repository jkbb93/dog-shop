import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../../../../../store/product-slice-thunks";
import FilterMenuSection from "../FilterMenuSection";
import Input from "../../../../../components/UI/Input/Input";
import classes from "./ProductSearchField.module.css";

function ProductSearchField() {
    const searchValue = useSelector(state => state.products.filters.search);
    const dispatch = useDispatch();

    const searchValueChangeHandler = (event) => {
        const enteredValue = event.target.value;
        dispatch(updateFilters({ search: enteredValue }));
    };

    return (
        <FilterMenuSection>
            <Input
                name="search-products"
                placeholder="Search"
                type="text"
                icon="search"
                classes={classes.input}
                value={searchValue}
                onChange={searchValueChangeHandler}
            />
        </FilterMenuSection>
    );
}

export default ProductSearchField;

