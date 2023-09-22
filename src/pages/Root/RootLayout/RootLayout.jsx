import { useState } from "react";
import Background from "./Background";
import Header from "./Header/Header";
import Footer from "./Footer";
import classes from "./RootLayout.module.css";

function RootLayout(props) {
    const [animationPaused, setAnimationPaused] = useState(false);

    const pauseAnimationHandler = () => {
        setAnimationPaused(prev => !prev);
    };

    return (
        <>
            <Background paused={animationPaused}>
                <div className={classes["window-center"]}>
                    <div className={classes["main-content-container"]}>
                        <Header />
                        {props.children}
                    </div>
                </div>
            </Background>
            <Footer />
        </>
    );
}

export default RootLayout;