import { NavLink } from "react-router-dom";
import classes from "./NavigationLink.module.css";

function NavigationLink(props) {
    const { to: path, text: linkText } = props;
    const navLinkActive = ({ isActive }) => isActive ? classes.active : "";

    return (
        <li className={classes["navigation-link"]}>
            <NavLink
                to={path}
                className={navLinkActive}
            >
                {linkText}
            </NavLink>
        </li>
    );
}

export default NavigationLink;