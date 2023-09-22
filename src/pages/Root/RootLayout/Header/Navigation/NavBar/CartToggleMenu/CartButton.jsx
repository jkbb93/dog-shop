import NavBarButton from "../NavBarButton";
import CartButtonIcon from "./CartButtonIcon";

function CartButton(props) {
    const { onClick: clickHandler } = props;

    return (
        <NavBarButton onClick={clickHandler}>
            <CartButtonIcon />
        </NavBarButton>
    );
}

export default CartButton;