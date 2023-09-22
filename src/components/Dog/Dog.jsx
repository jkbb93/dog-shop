import Eye from "./Eye";
import classes from "./Dog.module.css";

function Dog(props) {

    const image = props.image;
    const properties = props.imageProperties;

    const eye = (
        <Eye
            // eyeStyles={{ width: "80px", height: "48px" }}
            // pupilStyles={{ width: "2rem", height: "2rem" }}
        />
    );

    return (
        <div className={classes.dog}>
            <div className={classes["eye-wrapper"]}>
                {eye}
                {eye}
            </div>
            <img
                src={props.image}
                style={properties}
            />
        </div>
    );
}

export default Dog;