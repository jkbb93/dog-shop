import { Link } from "react-router-dom";
import EmptyCartForm from "./EmptyCartForm";
import Button from "../../components/UI/Button";
import classes from "./CartActions.module.css";

function CartActions() {
    return (
        <div className={classes["cart-actions"]}>
            <Link to="/" className={classes["checkout-link"]}>
                <Button classes={classes["checkout-button"]}>
                    Checkout
                </Button>
            </Link>
            <EmptyCartForm />
        </div>
    );
}

export default CartActions;