import classes from "./NavMenuHamburger.module.css";

function NavMenuHamburger({ onClick: clickHandler }) {
    return (
        <div className={classes["hamburger-wrapper"]}>
            <button onClick={clickHandler} className={classes.hamburger}>
            <i className="fa-solid fa-bars"></i>
            {/* <i className="fa-solid fa-paw"></i>
            <span>Menu</span> */}
            </button>
        </div>
    );
}

export default NavMenuHamburger;