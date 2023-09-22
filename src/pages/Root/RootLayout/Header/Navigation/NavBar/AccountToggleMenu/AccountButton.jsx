import NavBarButton from "../NavBarButton";
import classes from "./AccountButton.module.css";

function AccountButton({ onClick: clickHandler }) {
    return (
        <NavBarButton onClick={clickHandler}>
            <i className={`fa-regular fa-user ${classes.icon}`}></i>
        </NavBarButton>
    );
}

export default AccountButton;