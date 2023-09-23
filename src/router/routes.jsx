import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ShopMainView from "../pages/ShopPage/ShopMainView/ShopMainView";
import ProductView from "../pages/ShopPage/ProductView/ProductView";
import AuthenticationPage from "../pages/AuthenticationPage/AuthenticationPage";
import CartPage from "../pages/CartPage/CartPage";
import loaders from "./loaders";

const routerTree = [{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <HomePage />,
        },
        {
            path: "shop",
            element: <ShopPage />,
            children: [
                {
                    index: true,
                    element: <ShopMainView />
                },
                {
                    path: "product/:productID",
                    element: <ProductView />,
                    loader: loaders.productViewPage,
                },
            ],
        },
        {
            path: "about",
            element: <AboutPage />,
        },
        {
            path: "user",
            element: null,
        },
        {
            path: "cart",
            element: <CartPage />,
        },
        {
            path: "auth",
            element: <AuthenticationPage />,
        },
    ]
}];


export default routerTree;