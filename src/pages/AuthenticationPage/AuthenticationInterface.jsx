const APIURL = import.meta.env.VITE_API_URL;
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";
import LoadingMessage from "./LoadingMessage";
import ErrorFeedback from "./ErrorFeedback";
import useFetch from "../../hooks/use-fetch";

import { handleAuthentication } from "../../store/auth-slice-thunks";

function AuthenticationInterface() {
    const cart = useSelector(state => state.cart);
    const [formType, setFormType] = useState("login");
    const fetchRequest = useFetch();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const authCredentials = Object.fromEntries(formData);
        const fetchUrl = `${APIURL}/user/${formType}`;

        const responseData = await fetchRequest.send(fetchUrl, {
            method: "POST",
            body: {
                ...authCredentials,
                cart,
            },
        });

        if (responseData) {
            dispatch(handleAuthentication(responseData.body));
            navigate("/shop");
        }
    };

    let content = (
        <AuthForm
            onSubmit={formSubmitHandler}
            formType={formType}
            setFormType={setFormType}
        />
    );

    if (fetchRequest.inProgress) {
        content = (
            <LoadingMessage formType={formType} />
        );
    }

    if (fetchRequest.error) {
        const message = fetchRequest.error.body.message;
        content = (
            <ErrorFeedback
                formType={formType}
                message={message}
                onClose={fetchRequest.clearError}
            />
        );
    }

    return (
        <>
            {content}
        </>
    );
}

export default AuthenticationInterface;