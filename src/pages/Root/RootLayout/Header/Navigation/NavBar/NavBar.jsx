import NavLinks from "../NavLinks";
import AccountToggleMenu from "./AccountToggleMenu/AccountToggleMenu";
import CartToggleMenu from "./CartToggleMenu/CartToggleMenu";
import classes from "./NavBar.module.css";

function NavBar({ isSmallScreen }) {
    return (
        <nav className={classes.nav}>
            <ul className={classes["nav-item-list"]}>
                {!isSmallScreen &&
                    <NavLinks />
                }
                <li className={classes["toggle-menu"]}>
                    <AccountToggleMenu isSmallScreen={isSmallScreen} />
                </li>
                <li className={classes["toggle-menu"]}>
                    <CartToggleMenu isSmallScreen={isSmallScreen} />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;