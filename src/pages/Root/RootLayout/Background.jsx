import { useState } from "react";
import classes from "./Background.module.css";

function Background(props) {
    const animationPausedClass = props.paused ? classes["animation-paused"] : "";

    return(
        <div className={`${classes.background} ${animationPausedClass}`}>
            {props.children}
        </div>
    );
}

export default Background;