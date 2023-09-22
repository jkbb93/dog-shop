import { Link } from "react-router-dom";
import classes from "./ProductListing.module.css";
import formatCurrency from "../../../../../utils/format-currency";

function ProductListing(props) {
    const { src: imageSource, alt: imageAlt } = props.image;

    return (
        <article className={classes["product-listing"]}>
            <Link to={`product/${props.id}`}>
                <div>
                    <img
                        src={imageSource}
                        alt={imageAlt}
                        className={classes["product-image"]}
                    />
                    <div className={classes["product-info"]}>
                        <span className={classes["product-name"]}>{props.name}</span>
                        <span className={classes["product-price"]}>{formatCurrency(props.price)}</span>
                    </div>
                </div>
            </Link>
        </article >
    );
}

export default ProductListing;