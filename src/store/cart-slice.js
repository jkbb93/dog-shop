import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import cartSliceReducers from "./cart-slice-reducers";
import { saveCart } from "./cart-persistence-slice";
import { handleAuthentication, logout, login, signup } from "./auth-slice-thunks";

const cartInitState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: cartInitState,
        reducers: {
            addItem: cartSliceReducers.addItemToCart,
            removeItem: cartSliceReducers.removeItemFromCart,
            updateItemQuantity: cartSliceReducers.updateCartItemQuantity,
            emptyCart: () => cartInitState,
            setCart: (state, action) => {
                return action.payload || cartInitState;
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase("cartPersistence/savesComplete", (state, action) => {
                    console.log("refetching");
                    return action.payload;
                })
                .addCase(saveCart.rejected, (state, action) => action.payload.lastSavedCart || cartInitState)
                .addCase(logout.fulfilled, () => cartInitState)
                .addMatcher(
                    isAnyOf(
                        handleAuthentication.fulfilled,
                        login.fulfilled,
                        signup.fulfilled
                    ),
                    (state, action) => {
                        return action.payload.cart;
                    }
                )
        }
    }
);

export default cartSlice.reducer;
const cartActions = cartSlice.actions;
export { cartInitState, cartActions };