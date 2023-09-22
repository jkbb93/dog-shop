import Reviews from "./Reviews/Reviews";
import formatCurrency from "../../../../../utils/format-currency";
import classes from "./ProductMainDetails.module.css";

function ProductDetails(props) {
    const { name, price, } = props.productData;
    const formattedPrice = formatCurrency(price);

    return (
        <div className={classes["product-main-details"]}>
            <h1 className={classes.name}>{name}</h1>
            <Reviews reviews={""} />
            <h2 className={classes.price}>{formattedPrice}</h2>
        </div>
    );
}

export default ProductDetails;