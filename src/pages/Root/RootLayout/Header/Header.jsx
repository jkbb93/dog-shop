import { useState } from "react";
import useWindowDimensions from "../../../../hooks/use-window-dimensions";
import SmallScreenNavigation from "./Navigation/SmallScreenNavigation/SmallScreenNavigation";
import Logo from "./Logo";
import NavBar from "./Navigation/NavBar/NavBar";
import classes from "./Header.module.css";


function Header() {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const { width: windowWidth } = useWindowDimensions();
    const isSmallScreen = windowWidth < 992;

    const navMenuOpenHandler = () => setNavMenuOpen(true);
    const navMenuCloseHandler = () => setNavMenuOpen(false);

    return (
        <header className={classes.header}>
            {isSmallScreen &&
                <SmallScreenNavigation
                    onNavMenuOpen={navMenuOpenHandler}
                    onNavMenuClose={navMenuCloseHandler}
                    navMenuOpen={navMenuOpen}
                />
            }
            <Logo />
            <NavBar isSmallScreen={isSmallScreen} />
        </header >
    );
}

export default Header;