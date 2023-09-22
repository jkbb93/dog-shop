import { useState, useEffect, } from "react";
import classes from "./CartButtonBadge.module.css";

function CartButtonBadge({ numberOfItems }) {
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
        setAnimationActive(true);

        const timer = setTimeout(() => {
            setAnimationActive(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [numberOfItems]);

    const animationClass = animationActive
        ? classes["bounce-animation"]
        : "";

    return (
        <div className={`${classes.badge} ${animationClass}`}>
            {numberOfItems}
        </div>
    );
}

export default CartButtonBadge;