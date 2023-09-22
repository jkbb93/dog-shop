import Star from "./Star";
import classes from "./StarMeter.module.css";

function StarMeter(props) {
    const { id, averageRating } = props;

    const stars = [1, 2, 3, 4, 5].map(starNumber => (
        <Star
            key={starNumber}
            starNumber={starNumber}
            averageRating={averageRating}
        />
    ));

    return (
        <div id={id} className={classes["star-meter"]}>
            {stars}
        </div>
    );
}

export default StarMeter;