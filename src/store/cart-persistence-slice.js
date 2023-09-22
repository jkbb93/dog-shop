const APIURL = import.meta.env.VITE_API_URL;
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { handleAuthentication, logout } from "./auth-slice-thunks";

let failTester = true;

const saveCart = createAsyncThunk(
    "cartPersistence/save",
    async (cartToSave, { getState, rejectWithValue }) => {
        try {
            const { userIsAuthenticated } = getState().auth;
            if (!userIsAuthenticated) {
                localStorage.setItem("cart", JSON.stringify(cartToSave));
                return cartToSave;
            }

            if (failTester) {
                failTester = false;
                await new Promise(resolve => setTimeout(resolve, 500));
                throw new Error("fuck");
            }

            const response = await fetch(`${APIURL}/user/cart/save-cart`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartToSave),
            });

            const parsedResponse = await response.json();

            if (!response.ok) {
                throw new Error(parsedResponse.message || "Something went wrong");
            }

            return parsedResponse;

        } catch (error) {
            const { lastSavedCart } = getState().cartPersistence;

            return rejectWithValue({
                unsavedCart: cartToSave,
                errorData: error.message,
                lastSavedCart,
            });
        }
    }
);

const retrySaveCart = createAction("cartPersistence/retry");

const cartPersistenceInitState = {
    isSaving: false,
    lastSavedCart: null,
    isError: false,
    errorData: null,
    unsavedCart: null,
};

const cartPersistenceSlice = createSlice(
    {
        name: "cartPersistence",
        initialState: cartPersistenceInitState,
        reducers: {
            incrementSaveID: (state) => state.pendingSaveID++,
            clearError: (state) => {
                return {
                    ...cartPersistenceInitState,
                    lastSavedCart: state.lastSavedCart,
                };
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(handleAuthentication.fulfilled, (state, action) => {
                    return {
                        ...cartPersistenceInitState,
                        lastSavedCart: action.payload.cart,
                    };
                })
                .addCase(logout.fulfilled, () => {
                    return cartPersistenceInitState;
                })
                .addCase(saveCart.pending, (state) => {
                    console.log("Saving cart...");
                    state.isSaving = true;
                })
                .addCase(saveCart.fulfilled, (state, action) => {
                    console.log("Cart saved.");
                    return {
                        ...cartPersistenceInitState,
                        lastSavedCart: action.payload,
                    };
                })
                .addCase(saveCart.rejected, (state, action) => {
                    console.error("Failed to save cart.");
                    state.isSaving = false;
                    state.isError = true;
                    state.errorData = action.payload.errorData;
                    state.unsavedCart = action.payload.unsavedCart;
                })
        }
    }
);

const { clearError } = cartPersistenceSlice.actions;

export default cartPersistenceSlice.reducer;
export { saveCart, retrySaveCart, clearError };

