import NavMenuHamburger from "./NavMenuHamburger";
import NavMenuSideDrawer from "./NavMenuSideDrawer";

function SmallScreenNavigation(props) {
    const {
        onNavMenuOpen: navMenuOpenHandler,
        onNavMenuClose: navMenuCloseHandler,
        navMenuOpen,
    } = props;

    return (
        <>
            <NavMenuHamburger onClick={navMenuOpenHandler} />
            {navMenuOpen &&
                <NavMenuSideDrawer onClose={navMenuCloseHandler} />
            }
        </>
    );
}

export default SmallScreenNavigation;