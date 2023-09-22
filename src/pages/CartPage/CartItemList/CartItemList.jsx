import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import Button from "../../../components/UI/Button";
import classes from "./CartItemList.module.css";

function CartItemList({ cartItems }) {
    const cartHasItems = cartItems.length !== 0;
    let listContent;

    if (cartHasItems) {
        listContent = (
            <ul className={classes.list}>
                {cartItems.map(cartItem => (
                    <CartItem
                        key={cartItem.id}
                        item={cartItem}
                    />
                ))}
            </ul>);
    } else {
        listContent = (
            <>
                <h3>Your cart is empty</h3>
                <Link to="/shop">
                    <Button>Go To Shop</Button>
                </Link>
            </>
        );
    }

    return (
        <>
            {listContent}
        </>
    );
}

export default CartItemList;