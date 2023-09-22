import { useState } from "react";


function getFormValidationConfig(inputs) {
  const formValidationConfig = inputs.map(input => {
    return {
      name: input.name,
      validationFunction: input.validationFunction,
    };
  });

  return formValidationConfig;
}


function prepareInitialFormState(inputs) {
  const initialFormState = {};

  inputs.forEach(input => {
    initialFormState[input.name] = {
      value: "",
      touched: false,
      error: false,
      validationFunction: input.validationFunction,
    };
  });

  return initialFormState;
}


function checkFormIsValid(formState) {
  const inputs = Object.values(formState);

  const allInputsValid = inputs.every(input => (input.touched && !input.error));

  return allInputsValid;
}


function useFormValidation(inputs) {
  const [formState, setFormState] = useState(() => prepareInitialFormState(inputs));

  const inputChangeHandler = (event) => {
    const { name: inputName, value: enteredValue } = event.target;
    const { touched: isTouched, validationFunction } = formState[inputName];

    const isValidationError = isTouched && validationFunction(enteredValue);

    setFormState(prev => {
      const { touched: prevInputTouched, validationFunction: prevInputValidationFunction } = prev[inputName];

      const newFormState = {
        ...prev,
        [inputName]: {
          value: enteredValue,
          touched: prevInputTouched,
          error: isValidationError,
          validationFunction: prevInputValidationFunction,
        }
      };
      return newFormState;
    });
  };

  const inputBlurHandler = (event) => {
    const inputName = event.target.name;
    const previouslyTouched = formState[inputName].touched;

    if (previouslyTouched) {
      return;
    }

    setFormState(prev => {
      const { value: prevInputValue, validationFunction: prevInputValidationFunction } = prev[inputName];
      const isValidationError = prevInputValidationFunction(prevInputValue);

      const newFormState = {
        ...prev,
        [inputName]: {
          value: prevInputValue,
          touched: true,
          error: isValidationError,
          validationFunction: prevInputValidationFunction,
        }
      };
      return newFormState;
    });
  };

  const updateInputs = ({ newInputs, keepExistingInputs }) => {
    setFormState(prev => {
      if (!keepExistingInputs) {
        return prepareInitialFormState(newInputs);
      }

      const inputsToAdd = [];
      const existingInputs = {};

      newInputs.forEach(input => {
        const { name: inputName } = input;

        if (prev[inputName]) {
          existingInputs[inputName] = { ...prev[inputName] };
          return;
        }

        inputsToAdd.push(input);
      });

      const preparedInputsToAdd = prepareInitialFormState(inputsToAdd);

      const updatedInputs = { ...existingInputs, ...preparedInputsToAdd };

      return updatedInputs;
    });
  };

  const formIsValid = checkFormIsValid(formState);

  return { ...formState, formIsValid, inputChangeHandler, inputBlurHandler, updateInputs };
}

export default useFormValidation;
export { getFormValidationConfig };