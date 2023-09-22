import { Link } from "react-router-dom";
import CartItemProductDetails from "./CartItemProductDetails";
import QuantityUpdateControl from "./QuantityUpdateControl";
import RemoveItemControl from "./RemoveItemControl";
import classes from "./CartItem.module.css";

function CartItem(props) {
    const {
        id: itemID,
        name: itemName,
        unitPrice,
        quantity: itemQuantity,
        image: itemImage
    } = props.item;

    const { src: imgSrc, alt: imgAlt } = itemImage;

    return (
        <li className={classes["cart-item"]}>
            <Link to={`/shop/product/${itemID}`}>
                <img src={imgSrc} alt={imgAlt} className={classes.image} />
            </Link>
            <div className={classes["cart-item-details"]}>
                <CartItemProductDetails name={itemName} unitPrice={unitPrice} />
                <QuantityUpdateControl
                    itemID={itemID}
                    value={itemQuantity}
                />
                <RemoveItemControl
                    itemID={itemID}
                />
            </div>
        </li>
    );
}

export default CartItem;