import Dog from "./Dog";
import classes from "./DogContainer.module.css";
import jackRussellImage from "../../assets/images/jackrussell2.png";

function DogContainer() {

    return (
        <div 
        className={classes["dog-container"]}
        >
            <Dog
                image={jackRussellImage}
            />
        </div>
    );
}

export default DogContainer;