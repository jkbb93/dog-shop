import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import classes from "./CTA.module.css";

function CTA() {
    return (
        <div className={classes["cta"]}>
            <h1>Everything you need for your canine companion</h1>
            <Link to="shop">
                <Button>SHOP NOW</Button>
            </Link>
        </div>
    );
}

export default CTA;