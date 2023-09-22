import StarMeter from "./StarMeter";
import classes from "./Reviews.module.css";

const DUMMY_REVIEWS = [
    { stars: 1, count: 3 },
    { stars: 2, count: 6 },
    { stars: 3, count: 20 },
    { stars: 4, count: 40 },
    { stars: 5, count: 70 },
];

const calculateTotalReviews = function calculateTotalReviews(reviews) {
    const total = reviews.reduce((accumulator, current) => {
        return accumulator + current.count;
    }, 0);
    return total;
};

const calculateAverageRating = function calculateAverageRating(reviews, totalReviews) {
    const reviewsWithWeighting = reviews.map(review => {
        const weighting = (review.count / totalReviews).toFixed(2);
        return { stars: review.stars, weighting };
    });

    const averageRating = reviewsWithWeighting.reduce((accumulator, current) => {
        return accumulator + (current.stars * current.weighting);
    }, 0);

    // Rounded to nearest 0.2
    const roundedAverageRating = (Math.round(averageRating / 0.2) * 0.2);

    return roundedAverageRating;
};


function Reviews(props) {
    const reviewData = props.reviews || DUMMY_REVIEWS;
    const reviews = reviewData.map(review => review);
    const totalReviews = calculateTotalReviews(reviews);
    const averageRating = calculateAverageRating(reviews, totalReviews);

    return (
        <div className={classes.reviews}>
            <StarMeter id="star-meter" averageRating={averageRating} />
            <label htmlFor="star-meter">
                {totalReviews} Reviews
            </label>
        </div>
    )
}

export default Reviews;