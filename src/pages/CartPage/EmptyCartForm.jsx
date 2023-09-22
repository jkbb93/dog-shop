import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Button from "../../components/UI/Button"
import classes from "./EmptyCartForm.module.css";

function EmptyCartForm() {
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(cartActions.emptyCart());
    };

    return (
        <form
            className={classes.form}
            onSubmit={submitHandler}
        >
            <Button
                type="submit"
                classes={classes.button}
            >
                <i className="fa-regular fa-trash-can"></i>
                Empty Cart
            </Button>
        </form>
    );
}

export default EmptyCartForm;