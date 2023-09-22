import NavBarHoverMenu from "../NavBarHoverMenu";
import CartMenuContent from "./CartMenuContent";

function CartHoverMenu({onClose: closeHandler}) {
    return(
        <NavBarHoverMenu onClose={closeHandler}>
            <CartMenuContent />
        </NavBarHoverMenu>
    );
}

export default CartHoverMenu;