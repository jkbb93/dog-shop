import { useSelector } from "react-redux";
import CartButtonBadge from "./CartButtonBadge";
import classes from "./CartButtonIcon.module.css";

function CartButtonIcon(props) {
    const numberOfItems = useSelector(state => state.cart.totalQuantity);
    const cartHasItems = numberOfItems > 0;

    return (
        <div className={classes["icon-wrapper"]}>
            {cartHasItems && <CartButtonBadge numberOfItems={numberOfItems} />}
            <span className={`material-symbols-outlined ${classes.icon}`}>
                shopping_cart
            </span>
        </div>
    )
}

export default CartButtonIcon;