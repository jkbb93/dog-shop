import { Outlet } from "react-router-dom";
import MainContentWrapper from "../../components/UI/MainContentWrapper";

function ShopPage() {

    return (
        <MainContentWrapper>
            <Outlet />
        </MainContentWrapper>
    );
}

export default ShopPage;