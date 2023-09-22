import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../../../../../store/product-slice-thunks";
import FilterMenuSection from "../FilterMenuSection";
import classes from "./PriceRangeSlider.module.css";
import formatCurrency from "../../../../../utils/format-currency";

function PriceRangeSlider() {
    const allProducts = useSelector(state => state.products.allProducts);
    const priceFilterValue = useSelector(state => state.products.filters.price.max);
    const dispatch = useDispatch();

    const allPrices = allProducts.map(product => product.price);
    const highestProductPrice = Math.max(...allPrices);

    const priceValueToDisplay = (priceFilterValue || priceFilterValue === 0)
        ? priceFilterValue
        : highestProductPrice;
    const formattedPrice = formatCurrency(priceValueToDisplay);

    const sliderChangeHandler = (event) => {
        const sliderValue = +event.target.value;
        dispatch(updateFilters({ price: { max: sliderValue } }));
    };

    return (
        <FilterMenuSection heading="Price">
            <label htmlFor="price-slider" className={classes.label}>
                Under {formattedPrice}
            </label>
            <input
                id="price-slider"
                type="range"
                max={highestProductPrice}
                value={priceValueToDisplay}
                onChange={sliderChangeHandler}
                className={classes.slider}
            />
        </FilterMenuSection>
    );
}

export default PriceRangeSlider;



