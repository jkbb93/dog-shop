import { useState } from "react";
import classes from "./ImageGallery.module.css";
import Thumbnails from "./Thumbnails";

function ImageGallery(props) {
    const { images } = props;
    const [mainImageSource, setMainImageSource] = useState(images[0].src);

    const thumbnailClickHandler = (event) => {
        const newMainImageSource = event.target.closest("button").dataset.src;
        setMainImageSource(newMainImageSource);
    };

    return (
        <div className={classes["image-gallery"]}>
            <img src={mainImageSource} className={classes["main-image"]} alt="Main Product Image" />
            <Thumbnails images={images} currentMainImage={mainImageSource} onClick={thumbnailClickHandler} />
        </div>
    );
}

export default ImageGallery;