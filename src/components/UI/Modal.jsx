import WindowOverlay from "./WindowOverlay";
import Card from "./Card";
import classes from "./Modal.module.css";

function Modal(props) {
    const { onBackgroundClick: backgroundClickHandler } = props;

    return (
        <WindowOverlay onBackgroundClick={backgroundClickHandler}>
            <Card classes={classes.card}>
                {props.children}
            </Card>
        </WindowOverlay>
    );
}

export default Modal;