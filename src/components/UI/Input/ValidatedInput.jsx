import ValidationFeedbackWrapper from "./ValidationFeedbackWrapper";
import Input from "./Input";

function ValidatedInput(props) {
    const {
        name,
        placeholder,
        type,
        icon,
        value,
        onChange: changeHandler,
        onBlur: blurHandler,
        hasError
    } = props;

    return (
        <ValidationFeedbackWrapper
            message={placeholder}
            hasError={hasError}
        >
            <Input
                name={name}
                placeholder={placeholder}
                type={type}
                icon={icon}
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
        </ValidationFeedbackWrapper>
    );
}

export default ValidatedInput;