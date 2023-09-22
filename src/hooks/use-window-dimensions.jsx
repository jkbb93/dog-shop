import { useState, useEffect, } from "react";

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    return {
        width: windowDimensions.width,
        height: windowDimensions.height,
    };
}

export default useWindowDimensions;