import Button from "./Button";
import classes from "./ModalDialog.module.css";

function ModalDialog(props) {
    const {
        message,
        proceedButtonText,
        cancelButtonText,
        onProceed: proceedHandler,
        onCancel: cancelHandler,
    } = props;

    return (
        <div className={classes.dialog}>
            <h2 className={classes.message}>{message}</h2>
            <div className={classes.actions}>
                <Button onClick={cancelHandler} classes={classes.button}>
                    {cancelButtonText}
                </Button>
                <Button onClick={proceedHandler} classes={classes.button}>
                    {proceedButtonText}
                </Button>
            </div>
        </div>
    );
}

export default ModalDialog;