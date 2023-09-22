import classes from "./PasswordVisibilityToggler.module.css";

function PasswordVisibilityToggler(props) {
    const { passwordIsVisible, onClick: clickHandler } = props;

    const togglerIconSetting = passwordIsVisible
        ? "fa-regular fa-eye-slash"
        : "fa-regular fa-eye";

    return (
        <button
            className={classes["password-visibility-toggler"]}
            onClick={clickHandler}
            type="button"
        >
            <i className={togglerIconSetting}></i>
        </button>
    );
}

export default PasswordVisibilityToggler;