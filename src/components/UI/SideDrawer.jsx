import useLocationChangeEffect from "../../hooks/use-location-change-effect";
import WindowOverlay from "./WindowOverlay";
import classes from "./SideDrawer.module.css";


function CloseButton(props) {
    const { onClick: clickHandler } = props;

    return (
        <div className={classes["close-button-wrapper"]}>
            <button onClick={clickHandler} className={classes["close-button"]}>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
}


function Drawer(props) {
    const { onClose: closeHandler } = props;

    return (
        <div className={classes["side-drawer"]}>
            <CloseButton onClick={closeHandler} />
            {props.children}
        </div>
    );
}


function SideDrawer(props) {
    const { onClose: closeHandler } = props;
    useLocationChangeEffect(closeHandler);

    return (
        <WindowOverlay onBackgroundClick={closeHandler} >
            <Drawer {...props} />
        </WindowOverlay>
    );
}


export default SideDrawer;