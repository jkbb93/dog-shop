import classes from "./Thumbnails.module.css";

function Thumbnails(props) {
    const { images, currentMainImage, onClick: clickHandler } = props;

    const thumbnails = images.map(image => {
        const { src: imageSource, alt: imageAlt } = image;
        const isMainImage = (imageSource === currentMainImage);
        const activeClassIfMainImage = isMainImage ? classes.active : "";

        return (
            <button
                type="button"
                key={imageSource}
                data-src={imageSource}
                onClick={clickHandler}
                className={activeClassIfMainImage}
            >
                <img
                    src={imageSource}
                    alt={imageAlt}
                />
            </button>
        );
    });

    return (
        <div className={classes["thumbnails"]}>
            {thumbnails}
        </div>
    );
}

export default Thumbnails;