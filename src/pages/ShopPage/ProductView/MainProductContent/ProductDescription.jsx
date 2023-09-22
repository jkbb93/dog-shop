import classes from "./ProductDescription.module.css";

function ProductDescription(props) {
    const {description} = props;

    return(
        <p className={classes.description}>{description}</p>
    );
}

export default ProductDescription;