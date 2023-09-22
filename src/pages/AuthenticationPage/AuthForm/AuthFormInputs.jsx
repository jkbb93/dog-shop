import Input from "../../../components/UI/Input/ValidatedInput";

function AuthFormInputs(props) {
    const { inputsToDisplay, formValidation } = props;

    const displayedInputs = inputsToDisplay.map(input => {
        const { name: inputName, placeholder, type, icon } = input;
        return (
            <Input
                key={inputName}
                name={inputName}
                placeholder={placeholder}
                type={type}
                icon={icon}
                value={formValidation[inputName].value}
                onChange={formValidation.inputChangeHandler}
                onBlur={formValidation.inputBlurHandler}
                hasError={formValidation[inputName].error}
            />
        );
    });

    return (
        <>
            {displayedInputs}
        </>
    );
}

export default AuthFormInputs;