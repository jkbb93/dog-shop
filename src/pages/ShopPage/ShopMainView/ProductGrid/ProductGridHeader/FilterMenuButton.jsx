import classes from "./FilterMenuButton.module.css";

function FilterMenuButton({ onClick: openFilterMenuHandler }) {
    return (
        <button
            onClick={openFilterMenuHandler}
            className={classes["filter-menu-button"]}
        >
            <i className="fa-solid fa-sliders"></i>
            <span>Filters</span>
        </button>
    );
}

export default FilterMenuButton;