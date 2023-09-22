import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";
import classes from "./EmptyCartFallback.module.css";

function EmptyCartFallback() {
    return (
        <div className={classes.wrapper}>
            <p className={classes.message}>Your cart is empty.</p>
            <Link to="/shop">
                <Button classes={classes.button}>Return to shop</Button>
            </Link>
        </div>
    );
}

export default EmptyCartFallback;