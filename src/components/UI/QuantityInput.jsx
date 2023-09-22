import Button from "./Button";
import classes from "./QuantityInput.module.css";

function QuantityInput(props) {
    const { value, onChange: passedChangeHandler, label: passedLabelText, } = props;

    const inputChangeHandler = (event) => {
        const enteredValue = event.target.value;
        let valueToSet;

        const isEmptyString = enteredValue === "";
        const isNumber = !isNaN(enteredValue);
        const isNumberAndNotEmptyString = isNumber && !isEmptyString;
        const isNeither = !isEmptyString && !isNumber;

        if (isNeither) return;
        if (isNumberAndNotEmptyString) valueToSet = +enteredValue;
        if (valueToSet > 99) return;
        if (isEmptyString) valueToSet = enteredValue;

        passedChangeHandler(valueToSet);
    };

    const buttonClickHandler = (event) => {
        const buttonName = event.target.closest("button").name;
        const currentValue = +value;

        let newValue;

        if (buttonName === "increment" && currentValue < 99) {
            newValue = currentValue + 1;
        }

        if (buttonName === "decrement" && currentValue > 1) {
            newValue = currentValue - 1;
        }

        if (!newValue) return;
        passedChangeHandler(newValue);
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
                    value={value}
                    id="quantity-input"
                    type="number"
                    onChange={inputChangeHandler}
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
};

export default QuantityInput;