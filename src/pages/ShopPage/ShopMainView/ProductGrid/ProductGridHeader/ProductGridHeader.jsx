import FilterMenuButton from "./FilterMenuButton";
import SortByPriceDropdown from "./SortByPriceDropdown";
import classes from "./ProductGridHeader.module.css";

function ProductGridHeader(props) {
    const {
        numberOfProducts,
        showFilterMenuButton,
        onOpenFilterMenu: openFilterMenuHandler
    } = props;
    const numberOfProductsMessage = `Showing ${numberOfProducts} Products`;

    return (
        <header className={classes.header}>
            {showFilterMenuButton &&
                <FilterMenuButton onClick={openFilterMenuHandler} />
            }
            <span className={classes["number-of-products-message"]}>
                {numberOfProductsMessage}
            </span>
            <SortByPriceDropdown />
        </header>
    );
}

export default ProductGridHeader;