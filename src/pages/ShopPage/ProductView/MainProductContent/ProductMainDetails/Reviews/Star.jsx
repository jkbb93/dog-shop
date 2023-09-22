import classes from "./Star.module.css";

function Star(props) {
    const { starNumber, averageRating } = props;

    const starIsPartiallyFilled = Math.ceil(averageRating) === starNumber;
    const starIsFilled = averageRating >= starNumber;

    let fillPercentage = 0;

    if (starIsPartiallyFilled) {
        const decimalRemainder = Number((averageRating - starNumber).toFixed(1));
        fillPercentage = decimalRemainder * 100;
    }

    if (starIsFilled) fillPercentage = 100;

    const fillGradient = `linear-gradient(to right, gold ${fillPercentage}%, var(--color-light-grey) ${fillPercentage}%)`;

    return (
        <div
            className={classes.star}
            style={{
                background: fillGradient,
            }}
        >
        </div>
    );
}

export default Star;