import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
    return (
        <div className={classes["logo-container"]}>
            <Link to="/">
                <h1 className={classes.logo}>
                    DogShop
                </h1>
            </Link>
        </div>
    );
}

export default Logo;