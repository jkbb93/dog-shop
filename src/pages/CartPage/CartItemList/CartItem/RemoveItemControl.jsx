import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import classes from "./RemoveItemControl.module.css";

function RemoveItemControl(props) {
    const dispatch = useDispatch();
    const { itemID } = props;

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(cartActions.removeItem(itemID));
    };

    return (
        <form
            onSubmit={submitHandler}
            className={classes["remove-item-control"]}
        >
            <button type="submit">
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </form>
    );
}

export default RemoveItemControl;