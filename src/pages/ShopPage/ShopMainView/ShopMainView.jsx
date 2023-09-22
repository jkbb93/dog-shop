import { useState } from "react";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import ProductGridHeader from "./ProductGrid/ProductGridHeader/ProductGridHeader";
import ProductGrid from "./ProductGrid/ProductGrid";
import FilterMenu from "./FilterMenu/FilterMenu";
import classes from "./ShopMainView.module.css";

function ShopMainView() {
    const productsToDisplay = useSelector(state => state.products.displayedProducts);
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const { width: windowWidth } = useWindowDimensions();
    const numberOfProducts = productsToDisplay.length;
    const isSmallScreen = windowWidth < 992;

    const filterMenuOpenHandler = () => setFilterMenuOpen(true);
    const filterMenuCloseHandler = () => setFilterMenuOpen(false);

    return (
        <>
            <div className={classes.layout}>
                <FilterMenu
                    displayAsSideDrawer={isSmallScreen}
                    sideDrawerOpen={filterMenuOpen}
                    onSideDrawerClose={filterMenuCloseHandler}
                />
                <div>
                    <ProductGridHeader
                        numberOfProducts={numberOfProducts}
                        showFilterMenuButton={isSmallScreen}
                        onOpenFilterMenu={filterMenuOpenHandler}
                    />
                    <ProductGrid productsToDisplay={productsToDisplay} />
                </div>
            </div>
        </>
    );
}

export default ShopMainView;