import SideDrawer from "../../../../../../../components/UI/SideDrawer";
import AccountMenuContent from "./AccountMenuContent";

function AccountSideDrawer({ onClose: closeHandler }) {
    return (
        <SideDrawer onClose={closeHandler}>
            <AccountMenuContent />
        </SideDrawer>
    );
}

export default AccountSideDrawer;