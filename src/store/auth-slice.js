import { createSlice } from "@reduxjs/toolkit";
import { handleAuthentication, logout } from "./auth-slice-thunks";

const authInitState = {
    userIsAuthenticated: false,
    sessionInitialised: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: authInitState,
    reducers: {
        setSessionInitialised(state) {
            state.sessionInitialised = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleAuthentication.fulfilled, (state) => {
                state.userIsAuthenticated = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.userIsAuthenticated = false;
            });
    }
});


export default authSlice.reducer;

export const authActions = {
    setUserIsAuthenticated: authSlice.actions.setUserIsAuthenticated,
};

export const setSessionInitialised = authSlice.actions.setSessionInitialised;