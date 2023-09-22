import NavigationLink from "./NavigationLink";

function NavLinks({ isSideDrawer }) {
    return (
        <>
            <NavigationLink to="/" text="HOME" />
            {/* <NavigationLink to="/about" text="ABOUT" /> */}
            <NavigationLink to="/shop" text="SHOP" />
            {isSideDrawer && <NavigationLink to="/auth" text="ACCOUNT" />}
            {isSideDrawer && <NavigationLink to="/cart" text="CART" />}
        </>
    );
}

export default NavLinks;