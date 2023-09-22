import classes from "./Card.module.css";

function Card(props) {
    const defaultClass = classes.card;
    const customClasses = props.classes || "";

    return(
        <div className={`${defaultClass} ${customClasses}`}>
            {props.children}
        </div>
    );
}

export default Card;