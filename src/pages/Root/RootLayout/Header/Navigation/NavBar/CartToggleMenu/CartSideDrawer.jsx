import { Link } from "react-router-dom";
import SideDrawer from "../../../../../../../components/UI/SideDrawer";
import Button from "../../../../../../../components/UI/Button";
import CartMenuContent from "./CartMenuContent";

function CartSideDrawer({ onClose: closeHandler }) {
    return (
        <SideDrawer onClose={closeHandler}>
            <CartMenuContent />
        </SideDrawer>
    );
}

export default CartSideDrawer;