import { useRef, useLayoutEffect } from "react";
import useWindowDimensions from "../../hooks/use-window-dimensions";
import classes from "./HeroSection.module.css";

function HeroSection(props) {
    const windowDimensions = useWindowDimensions();
    const heroSectionRef = useRef();

    useLayoutEffect(() => {
        const startingPointFromTop = heroSectionRef.current.getBoundingClientRect().y;
        const availableHeight = windowDimensions.height - startingPointFromTop;
        heroSectionRef.current.style.height = availableHeight + "px";
    }, [windowDimensions]);

    return (
        <section
            ref={heroSectionRef}
            className={classes["hero-section"]}
        >
            {props.children}
        </section>
    );
}

export default HeroSection;