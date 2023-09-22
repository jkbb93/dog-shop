import classes from "./NavBarButton.module.css";

function NavBarButton(props) {
    const { onClick: clickHandler } = props;

    return (
        <button
            className={classes.button}
            type="button"
            onClick={clickHandler || null}
        >
            {props.children}
        </button>
    );
}

export default NavBarButton;