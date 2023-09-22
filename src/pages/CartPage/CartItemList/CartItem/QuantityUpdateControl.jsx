import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import QuantityInput from "../../../../components/UI/QuantityInput";
import classes from "./QuantityUpdateControl.module.css";

function QuantityUpdateControl(props) {
    const { itemID, value: quantity } = props;
    const dispatch = useDispatch();

    const quantityChangeHandler = (enteredValue) => {
        if (!enteredValue) return;

        const update = {
            id: itemID,
            newQuantity: enteredValue,
        };

        dispatch(cartActions.updateItemQuantity(update))
    };

    return (
        <div className={classes["quantity-update-control"]}>
            <QuantityInput
                value={quantity}
                onChange={quantityChangeHandler}
            />
        </div>
    );
}

export default QuantityUpdateControl;