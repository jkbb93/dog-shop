import useFormValidation, { getFormValidationConfig } from "../../../hooks/use-form-validation";
import AuthFormInputs from "./AuthFormInputs";
import AuthFormActions from "./AuthFormActions";
import classes from "./AuthForm.module.css";


const validate = (val) => (val.length > 16);

const loginInputs = [
    { name: "email", placeholder: "Email Address", type: "text", icon: "email", validationFunction: validate },
    { name: "password", placeholder: "Password", type: "password", icon: "password", validationFunction: validate },
];

const signupInputs = [
    loginInputs[0],
    { name: "firstName", placeholder: "First Name", type: "text", icon: "user", validationFunction: validate },
    { name: "lastName", placeholder: "Last Name", type: "text", icon: "user", validationFunction: validate },
    loginInputs[1],
];


function AuthForm(props) {
    const { onSubmit: formSubmitHandler, formType, setFormType } = props;

    let inputsToDisplay;
    if (formType === "login") inputsToDisplay = loginInputs;
    if (formType === "signup") inputsToDisplay = signupInputs;

    const formValidation = useFormValidation(getFormValidationConfig(inputsToDisplay));

    const switchFormTypeHandler = () => {
        const newFormType = (formType === "login")
            ? "signup"
            : "login";

        const newInputs = (newFormType === "login")
            ? loginInputs
            : signupInputs;

        setFormType(newFormType);

        formValidation.updateInputs({
            newInputs: getFormValidationConfig(newInputs),
            keepExistingInputs: true,
        });
    };

    const formHeadingText = (formType === "login" ? "Log In" : "Sign Up");

    return (
        <form
            method="post"
            onSubmit={formSubmitHandler}
            data-form-type={formType}
        >
            <h1 className={classes["form-heading"]}>{formHeadingText}</h1>
            <AuthFormInputs
                inputsToDisplay={inputsToDisplay}
                formValidation={formValidation}
            />
            <AuthFormActions
                formType={formType}
                formIsValid={formValidation.formIsValid}
                switchFormTypeHandler={switchFormTypeHandler}
            />
        </form>
    );
}

export default AuthForm;