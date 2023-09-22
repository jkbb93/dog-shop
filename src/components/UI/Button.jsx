import classes from "./Button.module.css";

function Button(props) {
    const { name, type, onClick: clickHandler, fullWidth, textButton, disabled } = props;

    const widthSetting = fullWidth
        ? classes["width-full"]
        : classes["width-auto"];

    const colorSetting = textButton
        ? classes["color-transparent"]
        : classes["color-main"];

    const cursorSetting = textButton
        ? classes["cursor-pointer"]
        : "";

    const propClasses = props.classes || "";

    const classListArray = [
        classes.button,
        colorSetting,
        widthSetting,
        cursorSetting,
        propClasses,
    ];

    const classList = classListArray.join(" ");

    return (
        <button
            name={name}
            className={classList}
            type={type || "button"}
            onClick={clickHandler}
            disabled={disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;