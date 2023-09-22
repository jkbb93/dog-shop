import { useState } from "react";
import Button from "./Button";
import classes from "./QuantityInput.module.css";

function QuantityInput(props) {
    const { defaultValue, label: passedLabelText, } = props;

    const buttonClickHandler = (event) => {
        const buttonName = event.target.closest("button").name;
        const refValue = +ref.current.value;

        const currentRefValueIsNaN = isNaN(refValue);
        if (currentRefValueIsNaN) return;

        if (buttonName === "increment" && refValue < 99) {
            const newValue = refValue + 1;
            ref.current.value = newValue;
            return;
        }

        if (buttonName === "decrement" && refValue > 1) {
            const newValue = refValue - 1;
            ref.current.value = newValue;
            return;
        }
    };

    const label = passedLabelText
        ? <label htmlFor="quantity-input">{passedLabelText}</label>
        : "";

    return (
        <div className={classes.wrapper}>
            {label}
            <div className={classes.controls}>
                <Button
                    name="decrement"
                    type="button"
                    onClick={buttonClickHandler}
                    classes={classes.button}
                >
                    <i className="fa-solid fa-minus"></i>
                </Button>
                <input
                    ref={ref}
                    defaultValue={defaultValue}
                    id="quantity-input"
                    type="number"
                    className={classes.input}
                />
                <Button
                    name="increment"
                    type="button"
                    onClick={buttonClickHandler}
                    classes={classes.button}
                >
                    <i className="fa-solid fa-plus"></i>
                </Button>
            </div>
        </div>
    );
});

export default QuantityInput;