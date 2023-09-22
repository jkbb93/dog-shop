import { useDispatch } from "react-redux";
import { clearFiltersAndSorting } from "../../../../../store/product-slice-thunks";
import FilterMenuSection from "../FilterMenuSection";
import Button from "../../../../../components/UI/Button";
import classes from "./ClearFiltersButton.module.css";

function ClearFiltersButton() {
    const dispatch = useDispatch();

    const buttonClickHandler = () => {
        dispatch(clearFiltersAndSorting());
    };

    return (
        <FilterMenuSection>
            <Button classes={classes.button} onClick={buttonClickHandler}>
                Clear Filters
            </Button>
        </FilterMenuSection>
    );
}

export default ClearFiltersButton;