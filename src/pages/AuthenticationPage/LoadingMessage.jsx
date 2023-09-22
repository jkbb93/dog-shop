import classes from "./LoadingMessage.module.css";

function LoadingMessage({ formType }) {
    const messageText = formType === "login"
        ? "Logging in..."
        : "Signing up..."

    return (
        <div className={classes["loading-message"]}>
            <h1>{messageText}</h1>
        </div>
    );
}

export default LoadingMessage;