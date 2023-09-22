import NavBarToggleMenu from "../NavBarToggleMenu";
import CartButton from "./CartButton";
import CartSideDrawer from "./CartSideDrawer";
import CartHoverMenu from "./CartHoverMenu";

function CartToggleMenu({ isSmallScreen }) {

    const getCartMenuComponent = (closeHandler) => {
        return isSmallScreen
            ? <CartSideDrawer onClose={closeHandler} />
            : <CartHoverMenu onClose={closeHandler} />;
    };

    return (
        <NavBarToggleMenu
            renderButton={(clickHandler) => <CartButton onClick={clickHandler} />}
            renderMenu={(closeHandler) => getCartMenuComponent(closeHandler)}
            linkTo={"/cart"}
            linkDisabled={isSmallScreen}
            hoverDisabled={isSmallScreen}
        />
    );
}

export default CartToggleMenu;