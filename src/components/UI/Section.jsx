import classes from "./Section.module.css";

function Section(props) {
    const defaultClass = classes.section;
    const colorClass = props.color ? classes.color : "";
    const customClasses = props.classes || "";

    return (
        <section className={`${defaultClass} ${colorClass} ${customClasses}`}>
            {props.children}
        </section>
    );
}

export default Section;