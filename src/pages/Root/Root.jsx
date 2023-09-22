import { ScrollRestoration, Outlet, } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";

function Root() {
    return (
        <RootLayout>
            <ScrollRestoration />
            <Outlet />
        </RootLayout>
    );
}

export default Root;