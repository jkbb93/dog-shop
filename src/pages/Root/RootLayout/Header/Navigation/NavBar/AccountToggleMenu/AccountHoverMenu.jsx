import NavBarHoverMenu from "../NavBarHoverMenu";
import AccountMenuContent from "./AccountMenuContent";

function AccountHoverMenu(props) {
    const { onClose: closeHandler } = props;
    return (
        <NavBarHoverMenu onClose={closeHandler}>
            <AccountMenuContent />
        </NavBarHoverMenu>
    );
}

export default AccountHoverMenu;