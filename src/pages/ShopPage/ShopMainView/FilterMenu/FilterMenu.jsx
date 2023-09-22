import SideDrawer from "../../../../components/UI/SideDrawer";
import ProductSearchField from "./ProductSearchField/ProductSearchField";
import ProductCategoryList from "./ProductCategoryList/ProductCategoryList";
import BrandList from "./BrandList/BrandList";
import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";
import ClearFiltersButton from "./ClearFiltersButton/ClearFiltersButton";
import classes from "./FilterMenu.module.css";

function FilterMenuContent() {
    return (
        <>
            <ProductSearchField />
            <ProductCategoryList />
            <BrandList />
            <PriceRangeSlider />
            <ClearFiltersButton />
        </>
    );
}

function FilterMenu(props) {
    const {
        displayAsSideDrawer,
        sideDrawerOpen,
        onSideDrawerClose: sideDrawerCloseHandler
    } = props;

    return (
        <>
            {displayAsSideDrawer && sideDrawerOpen &&
                <SideDrawer onClose={sideDrawerCloseHandler}>
                    <FilterMenuContent />
                </SideDrawer>
            }
            {!displayAsSideDrawer &&
                <div className={classes["filter-menu-within-page"]}>
                    <FilterMenuContent />
                </div>
            }
        </>
    );
}

export default FilterMenu;