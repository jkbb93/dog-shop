import PadlockIcon from "../../../assets/icons/PadlockIcon";
import classes from "./InputIcon.module.css";

function InputIcon(props) {
    const iconType = props.iconType;

    let iconElement;
    switch (iconType) {
        case "email":
            iconElement = <i className="fa-regular fa-envelope" style={{ transform: "translateY(1px)" }}></i>;
            break;
        case "password":
            iconElement = <PadlockIcon />
            break;
        case "user":
            iconElement = <i className="fa-regular fa-user"></i>;
            break;
        case "search":
            iconElement = <i className="fa-solid fa-magnifying-glass"></i>;
            break;
        default:
            iconElement = <i className="fa-regular fa-keyboard"></i>;
    }

    return (
        <span className={classes.icon}>
            {iconElement}
        </span>
    );
};

export default InputIcon;