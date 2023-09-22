import Button from "../../../components/UI/Button";
import classes from "./AuthFormActions.module.css";

function AuthFormActions(props) {
    const { formType, formIsValid, switchFormTypeHandler } = props;

    const submitButtonText = (formType === "login" ? "LOG IN" : "SIGN UP");
    const submitButtonType = formIsValid ? "submit" : "button";
    const switchFormButtonText = (formType === "login" ? "SIGN UP" : "LOG IN");

    const submitButtonClickHandler = () => {
        if (!formIsValid) {
            alert("Please enter your details or correct any errors");
        }
        return;
    };

    return (
        <div className={classes["form-actions"]}>
            <Button fullWidth type={submitButtonType} onClick={submitButtonClickHandler} >
                {submitButtonText}
            </Button>
            <Button fullWidth transparent textButton onClick={switchFormTypeHandler}>
                {switchFormButtonText}
            </Button>
        </div>
    );
}

export default AuthFormActions;