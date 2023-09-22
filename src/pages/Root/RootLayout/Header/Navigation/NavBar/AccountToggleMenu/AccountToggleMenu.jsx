import { useSelector } from "react-redux";
import NavBarToggleMenu from "../NavBarToggleMenu";
import AccountButton from "./AccountButton";
import AccountHoverMenu from "./AccountHoverMenu";
import AccountSideDrawer from "./AccountSideDrawer";

function AccountToggleMenu({ isSmallScreen }) {
    const userIsAuthenticated = useSelector(state => state.auth.userIsAuthenticated);

    const getAccountMenuComponent = (closeHandler) => {
        return isSmallScreen
            ? <AccountSideDrawer onClose={closeHandler} />
            : <AccountHoverMenu onClose={closeHandler} />;
    };

    return (
        <NavBarToggleMenu
            renderButton={(clickHandler) => <AccountButton onClick={clickHandler} />}
            renderMenu={(closeHandler) => getAccountMenuComponent(closeHandler)}
            linkTo={"/auth"}
            linkDisabled={isSmallScreen || userIsAuthenticated}
            hoverDisabled={isSmallScreen}
        />
    );
}

export default AccountToggleMenu;