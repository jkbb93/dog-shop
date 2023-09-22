const APIURL = import.meta.env.VITE_API_URL;
import { createAsyncThunk } from "@reduxjs/toolkit";

const handleAuthentication = createAsyncThunk(
    "auth/authenticate",
    async (userAccount) => {
        const { cart: storedCart, ...storedUserProfile } = userAccount;
        localStorage.clear();

        //login logic
        /*
        
        */

        return {
            userProfile: storedUserProfile,
            cart: storedCart
        };
    }
);

const login = createAsyncThunk(
    "auth/login",
    async (userAccount) => {
        const { cart: storedCart, ...storedUserProfile } = userAccount;

        //login fetch logic

        return {
            userProfile: storedUserProfile,
            cart: storedCart
        };
    }
);

const signup = createAsyncThunk(
    "auth/signup",
    async (userAccount) => {
        const { cart: storedCart, ...storedUserProfile } = userAccount;

        //signin fetch logic

        return {
            userProfile: storedUserProfile,
            cart: storedCart
        };
    }
);


const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            const response = await fetch(`${APIURL}/user/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            return;

        } catch (error) {
            return error;
        }
    }
);


export {
    handleAuthentication,
    logout,
    login,
    signup,
};