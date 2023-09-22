import classes from "./ValidationFeedbackWrapper.module.css";

function ValidationFeedbackWrapper(props) {
    const hasError = props.hasError;

    return (
        <div className={classes["validation-feedback-input-wrapper"]}>
            {props.children}
            <div className={classes["validation-feedback"]}>
                {hasError && <p>Please enter a valid {props.message}</p>}
            </div>
        </div>
    );
}

export default ValidationFeedbackWrapper;