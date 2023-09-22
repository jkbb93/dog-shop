import { useSelector } from "react-redux";
import MainContentWrapper from "../../components/UI/MainContentWrapper";
import CartItemList from "./CartItemList/CartItemList";
import CartHeader from "./CartHeader/CartHeader";
import CartActions from "./CartActions";
import classes from "./CartPage.module.css";

function CartPage() {
    const cart = useSelector(state => state.cart);
    const { items: cartItems, totalQuantity, totalPrice, } = cart;
    const cartHasItems = totalQuantity > 0;

    return (
        <MainContentWrapper>
            <div className={classes.layout}>
                <CartHeader
                    totalQuantity={totalQuantity}
                    totalPrice={totalPrice}
                />
                <CartItemList cartItems={cartItems} />
                {cartHasItems && <CartActions />}
            </div>
        </MainContentWrapper>
    );
}

export default CartPage;