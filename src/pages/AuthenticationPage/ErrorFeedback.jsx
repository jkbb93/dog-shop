import Button from "../../components/UI/Button";
import classes from "./ErrorFeedback.module.css";

function ErrorFeedback(props) {
    const { formType, message, onClose: closeHandler } = props;

    const title = (formType === "login")
        ? "Login failed."
        : "Signup failed.";

    return (
        <div className={classes["error-feedback"]}>
            <div>
                <h1>{title}</h1>
                <p>{message}</p>
                <Button onClick={closeHandler}>TRY AGAIN</Button>
            </div>
        </div>
    );
}

export default ErrorFeedback;