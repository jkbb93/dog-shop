const APIURL = import.meta.env.VITE_API_URL;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSessionInitialised } from "../store/auth-slice";
import { handleAuthentication } from "../store/auth-slice-thunks";
import { cartActions } from "../store/cart-slice";
import sendFetchRequest from "../utils/fetch-request";

function useSession() {
    const dispatch = useDispatch();

    const resumeOrInitialiseSession = async () => {
        const url = `${APIURL}/user/resume-session`;
        const fetchData = await sendFetchRequest(url);
        const userIsLoggedIn = (fetchData.status === 200);

        if (userIsLoggedIn) {
            const userAccount = fetchData.body;
            dispatch(handleAuthentication(userAccount));
        } else {
            const guestCart = JSON.parse(localStorage.getItem("cart"));
            dispatch(cartActions.setCart(guestCart));
        }

        dispatch(setSessionInitialised());
    };

    useEffect(() => {
        resumeOrInitialiseSession();
    }, []);
};

export default useSession;