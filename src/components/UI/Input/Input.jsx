import { useState } from "react";
import InputIcon from "./InputIcon";
import PasswordVisibilityToggler from "./PasswordVisibilityToggler";
import classes from "./Input.module.css";

function Input(props) {
    const {
        name,
        placeholder,
        type,
        icon,
        value,
        classes: customClasses,
        onChange: changeHandler,
        onBlur: blurHandler
    } = props;

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    // General type/width settings
    let inputTypeSetting = type || "text";
    let inputWidthSetting = classes["width-regular"];

    // Conditional config for if password input
    let passwordVisibilityToggler;

    if (type === "password") {
        inputWidthSetting = classes["width-password"];
        inputTypeSetting = passwordIsVisible ? "text" : "password";

        const passwordVisibilityToggleHandler = () => {
            setPasswordIsVisible(prev => !prev);
        };

        passwordVisibilityToggler = (
            <PasswordVisibilityToggler
                passwordIsVisible={passwordIsVisible}
                onClick={passwordVisibilityToggleHandler}
            />
        );
    }

    return (
        <div className={`${classes["input-field-wrapper"]} ${customClasses || ""}`}>
            <InputIcon
                iconType={icon}
            />
            <input
                name={name}
                placeholder={placeholder}
                type={inputTypeSetting}
                className={`${classes.input} ${inputWidthSetting}`}
                spellCheck="false"
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
            {passwordVisibilityToggler}
        </div>
    );
}

export default Input;