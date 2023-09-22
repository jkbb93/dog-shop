import Dog from "./Dog";
import classes from "./DogContainer.module.css";
import jackRussellImage from "../../assets/images/jackrussell2.png";
import catImage from "../../assets/images/cat.jpg";

function DogContainer() {

    return (
        <div 
        className={classes["dog-container"]}
        >
            <Dog
                image={jackRussellImage}
            />
            {/* <Dog
                image={jackRussellImage}
            />
            <Dog
                image={jackRussellImage}
            />
            <Dog
                image={jackRussellImage}
            /> */}
            {/* <Dog
                image={catImage}
            /> */}
        </div>
    );
}

export default DogContainer;