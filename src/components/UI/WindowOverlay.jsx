import { useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./WindowOverlay.module.css";

function OverlayBackground({ onClick: clickHandler }) {
    return (
        <div
            className={classes.background}
            onClick={clickHandler}
        ></div>
    );
}

const portalDestination = document.getElementById("overlay-container");

function WindowOverlay({ children, onBackgroundClick: backgroundClickHandler }) {

    useEffect(() => {
        document.body.classList.add(classes["disable-scroll"]);

        return () => {
            document.body.classList.remove(classes["disable-scroll"]);
        };
    }, []);

    return createPortal(
        <div className={classes.overlay}>
            <OverlayBackground onClick={backgroundClickHandler} />
            {children}
        </div>,
        portalDestination
    );
}

export default WindowOverlay;