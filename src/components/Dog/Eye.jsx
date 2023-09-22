import { useEffect, useRef, } from "react";
import {getPointerPosition, getEyePosition, calculateNewPupilPosition} from "./eye-utils";
import classes from './Eye.module.css';


function Eye(props) {
    const eyeRef = useRef();
    const pupilRef = useRef();

    useEffect(() => {
        const movePupil = (event) => {
            pupilRef.current.style.transition = "left 0ms linear, top 0ms linear";
            const { width, height, left, top } = eyeRef.current.getBoundingClientRect();
            const eyeProperties = { width, height, left, top };

            const pointerPosition = getPointerPosition(event);
            const eyePosition = getEyePosition(eyeProperties);
            const newPupilPosition = calculateNewPupilPosition(pointerPosition, eyePosition);

            pupilRef.current.style.left = newPupilPosition.x + "%";
            pupilRef.current.style.top = newPupilPosition.y + "%";
        };

        const resetPupilPosition = () => {
            pupilRef.current.style.transition = "left 100ms linear, top 100ms linear";
            pupilRef.current.style.left = "50%";
            pupilRef.current.style.top = "50%";
        };

        window.addEventListener('pointermove', movePupil);
        window.addEventListener('pointerout', resetPupilPosition);

        return () => {
            window.removeEventListener('pointermove', movePupil);
            window.removeEventListener('pointerout', resetPupilPosition);
        };
    }, []);


    return (
        <div
            ref={eyeRef}
            className={classes.eyeball}
        >
            <div
                ref={pupilRef}
                className={classes.pupil}
            >
            </div>
        </div>
    );
}

export default Eye;