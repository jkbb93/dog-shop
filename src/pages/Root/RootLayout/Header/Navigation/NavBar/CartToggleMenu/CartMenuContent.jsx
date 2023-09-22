import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemList from "../../../../../../CartPage/CartItemList/CartItemList";
import Button from "../../../../../../../components/UI/Button";

function CartMenuContent() {
    const cartItems = useSelector(state => state.cart.items);
    const cartHasItems = cartItems.length > 0;

    return (
        <>
            <CartItemList cartItems={cartItems} />
            {cartHasItems &&
                <Link to="/cart">
                    <Button>View Cart</Button>
                </Link>
            }
        </>
    );
}

export default CartMenuContent;