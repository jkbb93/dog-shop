import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import userProfileSlice from "./user-profile-slice";
import cartSlice from "./cart-slice";
import cartPersistenceSlice from "./cart-persistence-slice";
import productSlice from "./product-slice";
import listenerMiddleware from "./listener-middleware";

export default configureStore({
    reducer: {
        auth: authSlice,
        userProfile: userProfileSlice,
        cart: cartSlice,
        cartPersistence: cartPersistenceSlice,
        products: productSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().prepend(listenerMiddleware);
    }
});

