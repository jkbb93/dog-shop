import { useLocation } from "react-router-dom";
import useLocationChangeEffect from "../../../../../../hooks/use-location-change-effect";

function NavBarHoverMenu(props) {
    const { onClose: closeHandler } = props;
    useLocationChangeEffect(closeHandler);

    return (
        <div style={{
            position: "absolute",
            top: "100%",
            right: "0%",
            // left: "-80%",
            zIndex: 100,
            transform: "translateX(20%)",
        }}>
            <div style={{
                marginTop: "16px",
                backgroundColor: "white",
                width: "400px",
                // border: "1px solid lightgrey",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
                padding: "32px 16px",
            }}>
                {props.children}
            </div>
        </div>
    );
}

export default NavBarHoverMenu;