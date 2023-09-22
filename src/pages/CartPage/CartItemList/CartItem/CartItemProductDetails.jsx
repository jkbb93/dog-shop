import formatCurrency from "../../../../utils/format-currency";
import classes from "./CartItemProductDetails.module.css";

function CartItemProductDetails(props) {
    const {name: itemName, unitPrice, } = props;
    const displayedPrice = formatCurrency(unitPrice);

    return (
        <>
            <div className={classes["cart-item-product-details"]}>
                <h2>{itemName}</h2>
            </div>
            <div className={classes.price}>
                <span>{displayedPrice}</span>
            </div>
        </>
    );
}

export default CartItemProductDetails;