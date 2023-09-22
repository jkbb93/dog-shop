import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function useLocationChangeEffect(effect) {
    const location = useLocation();
    const isFirstRenderRef = useRef(true);
    const isFirstRender = isFirstRenderRef.current;

    useEffect(() => {
        if (isFirstRender) {
            isFirstRenderRef.current = false;
            return;
        }

        effect();
    }, [location])
}

export default useLocationChangeEffect;