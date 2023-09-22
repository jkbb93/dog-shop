import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cart-slice";
import Button from "../../../../../components/UI/Button";
import classes from "./AddToCartForm.module.css";
import QuantityInput from "../../../../../components/UI/QuantityInput"

function AddToCartForm(props) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { id, name, price, mainImage } = props.productData;

    const inputChangeHandler = (newValue) => {
        setQuantity(newValue);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredQuantity = quantity;
        if (!enteredQuantity) return;
        // Returns if current value is "" or 0

        const itemToAdd = {
            id,
            name,
            unitPrice: price,
            image: mainImage,
            quantity: enteredQuantity,
        };

        dispatch(cartActions.addItem(itemToAdd));
    };

    return (
        <form
            method="post"
            onSubmit={submitHandler}
            className={classes.form}
        >
            <div className={classes["quantity-input-wrapper"]}>
            <QuantityInput
                label="Quantity"
                value={quantity}
                onChange={inputChangeHandler}
            />
            </div>
            {/* <div className={classes["button-wrapper"]}> */}
            <Button
                type="submit"
                disabled={!quantity}
                classes={classes.button}
            >
                Add To Cart
            </Button>
            {/* </div> */}
        </form>
    );
}

export default AddToCartForm;