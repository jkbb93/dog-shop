import { useNavigate } from "react-router-dom";
import RootLayout from "../Root/RootLayout/RootLayout";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import classes from "./ErrorPage.module.css";

function ErrorPage() {
    const navigate = useNavigate();

    const buttonClickHandler = () => {
        navigate("/");
    };

    return (
        <RootLayout>
            <Card classes={classes.card}>
                <h1>Woopsie!</h1>
                <p>There's nothing here.</p>
                <Button onClick={buttonClickHandler}>GO HOME</Button>
            </Card>
        </RootLayout>
    );
}

export default ErrorPage;