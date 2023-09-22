import { Link } from "react-router-dom";
import EmptyCartForm from "./EmptyCartForm";
import Button from "../../components/UI/Button";
import classes from "./CartActions.module.css";

function CartActions() {
    return (
        <div className={classes["cart-actions"]}>
            <Link to="/checkout" className={classes["checkout-link"]}>
                <Button classes={classes["checkout-button"]}>
                    Go To Checkout
                </Button>
            </Link>
            <EmptyCartForm />
        </div>
    );
}

export default CartActions;