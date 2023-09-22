import Card from "../../components/UI/Card";
import AuthenticationInterface from "./AuthenticationInterface";
import classes from "./AuthenticationPage.module.css";

function AuthenticationPage() {
    return (
        <div className={classes["animation-wrapper"]}>
            <Card classes={classes.card}>
                <AuthenticationInterface />
            </Card>
        </div>
    );
}

export default AuthenticationPage;