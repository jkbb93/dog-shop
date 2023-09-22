import SideDrawer from "../../../../../../components/UI/SideDrawer";
import NavLinks from "../NavLinks";

function NavMenuSideDrawer(props) {
    const {onClose: closeHandler} = props;
    return (
        <SideDrawer onClose={closeHandler}>
            <nav>
                <ul>
                    <NavLinks isSideDrawer={true} />
                </ul>
            </nav>
        </SideDrawer>
    );
}

export default NavMenuSideDrawer;