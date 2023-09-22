import { Link } from "react-router-dom";
import classes from "./BackToShopLink.module.css";

function BackToShopLink() {
    return (
        <nav className={classes["back-link"]}>
            <Link to="/shop">
                <i className="fa-solid fa-arrow-left"></i>
                <span>BACK TO SHOP</span>
            </Link>
        </nav>
    );
}

export default BackToShopLink;