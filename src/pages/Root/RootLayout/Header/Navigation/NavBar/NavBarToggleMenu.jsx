import { useState } from "react";
import ToggleMenuHoverWrapper from "./ToggleMenuHoverWrapper";
import ToggleableLink from "../../../../../../components/UI/ToggleableLink";
import classes from "./NavBarToggleMenu.module.css";

function NavBarToggleMenu(props) {
    const { renderButton, renderMenu, linkTo, linkDisabled, hoverDisabled } = props;
    const [showMenu, setShowMenu] = useState(false);

    const menuOpenHandler = () => setShowMenu(true);
    const menuCloseHandler = () => setShowMenu(false);

    return (
        <ToggleMenuHoverWrapper
            disableHover={hoverDisabled}
            onMouseEnter={menuOpenHandler}
            onMouseLeave={menuCloseHandler}
        >
            <div className={classes["relative-position-wrapper"]}>
                <ToggleableLink to={linkTo} disabled={linkDisabled}>
                    {renderButton(menuOpenHandler)}
                </ToggleableLink>
                {showMenu && renderMenu(menuCloseHandler)}
            </div>
        </ToggleMenuHoverWrapper>
    );
}

export default NavBarToggleMenu;