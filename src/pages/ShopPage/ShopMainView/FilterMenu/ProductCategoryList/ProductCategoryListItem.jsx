import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../../../store/product-slice-thunks";
import classes from "./ProductCategoryListItem.module.css";

function ProductCategoryListItem(props) {
    const currentCategoryFilter = useSelector(state => state.products.filters.category);
    const dispatch = useDispatch();
    const category = props.category;

    const categoryButtonClickHandler = () => {
        dispatch(updateFilters({ category: category }));
    };

    const categoryIsCurrentFilter = (category === currentCategoryFilter);
    const activeButtonClass = categoryIsCurrentFilter
        ? classes.active
        : "";

    const buttonClassList = `${classes.button} ${activeButtonClass}`;

    return (
        <li className={classes["category-list-item"]}>
            <button className={buttonClassList} onClick={categoryButtonClickHandler}>
                {category}
            </button>
        </li>
    );
}

export default ProductCategoryListItem;