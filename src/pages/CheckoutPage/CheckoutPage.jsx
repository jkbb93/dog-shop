const APIURL = import.meta.env.VITE_API_URL;
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import MainContentWrapper from "../../components/UI/MainContentWrapper";
import Button from "../../components/UI/Button";
import classes from "./CheckoutPage.module.css";

function CheckoutPage() {
    const { auth, userProfile, cart } = useSelector(state => state);
    const fetchRequest = useFetch();
    const navigate = useNavigate();
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const placeOrderHandler = async () => {
        if (!auth.isAuthenticated) return;

        // const order = {
        //     ...userProfile,
        //     ...cart,
        // };

        // const response = fetchRequest.send(`${APIURL}/order`, {
        //     method: "POST",
        //     body: order,
        // });

        // setOrderConfirmed(true);
        navigate("/");
    };

    return (
        <MainContentWrapper>
            {!orderConfirmed &&
                <Button onClick={placeOrderHandler}>Place Order</Button>
            }
            {orderConfirmed &&
                <>
                    <h1>Thank you for your order!</h1>
                    <Link to="/"><Button>Go Home</Button></Link>
                </>
            }
        </MainContentWrapper>
    );
}

export default CheckoutPage;