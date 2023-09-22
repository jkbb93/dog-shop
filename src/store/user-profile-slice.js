import { createSlice } from "@reduxjs/toolkit";
import { handleAuthentication, logout } from "./auth-slice-thunks";

const userProfileInitState = {
    email: "",
    firstName: "",
    lastName: "",
};

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: userProfileInitState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleAuthentication.fulfilled, (state, action) => {
                return action.payload.userProfile;
            })
            .addCase(logout.fulfilled, () => {
                return userProfileInitState;
            });
    },
});

export default userProfileSlice.reducer;
export const userProfileActions = userProfileSlice.actions;