import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";
import formatCurrency from "../../../utils/format-currency";
import classes from "./CartHeader.module.css";

function CartHeader(props) {
    const { totalQuantity, totalPrice, } = props;
    const subtotalPrice = formatCurrency(totalPrice);
    const cartHasItems = totalQuantity !== 0;

    return (
        <header className={classes.header}>
            <h1>Shopping Cart</h1>
            <div className={classes.content}>
                <div className={classes.totals}>
                    <div>
                        <p>Items: <span>{totalQuantity}</span></p>
                        <p>Subtotal: <span>{subtotalPrice}</span></p>
                    </div>
                </div>
                {cartHasItems &&
                    <Link to="/">
                        <Button classes={classes.button}>Checkout</Button>
                    </Link>
                }
            </div>
        </header>
    );
}

export default CartHeader;