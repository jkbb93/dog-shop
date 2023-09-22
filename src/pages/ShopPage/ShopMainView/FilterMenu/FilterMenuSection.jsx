import classes from "./FilterMenuSection.module.css";

function FilterMenuSection(props) {
    const {heading, children} = props;

    return (
        <section className={classes["filter-menu-section"]}>
            {heading && <h2>{heading}</h2>}
            {children}
        </section>
    );
}

export default FilterMenuSection;