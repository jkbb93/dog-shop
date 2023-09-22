import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../../../../../store/auth-slice-thunks";
import Button from "../../../../../../../components/UI/Button";


function AccountMenuContent() {
    const userIsAuthenticated = useSelector(state => state.auth.userIsAuthenticated);
    const firstName = useSelector(state => state.userProfile.firstName);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <>
            {userIsAuthenticated &&
                <>
                    <h3 style={{ marginTop: 0 }}>Welcome, {firstName}!</h3>
                    <Button onClick={logoutHandler}>Logout</Button>
                </>
            }
            {!userIsAuthenticated &&
                <>
                    <h3 style={{ marginTop: 0 }}>Log in or sign up to view your account</h3>
                    <Link to="/auth">
                        <Button>Go To Login Page</Button>
                    </Link>
                </>
            }
        </>
    );
}

export default AccountMenuContent;