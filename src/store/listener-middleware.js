import { createListenerMiddleware, isAnyOf, createAction } from "@reduxjs/toolkit";
import { cartActions } from "./cart-slice";
import { saveCart, retrySaveCart } from "./cart-persistence-slice";

const cartUpdateListener = createListenerMiddleware();
const onSaveCompleteListener = createListenerMiddleware();
const savesComplete = createAction("cartPersistence/savesComplete");

let queuedSave = null;

cartUpdateListener.startListening({
    matcher: isAnyOf(
        cartActions.addItem,
        cartActions.removeItem,
        cartActions.updateItemQuantity,
        cartActions.emptyCart,
        retrySaveCart,
    ),
    effect: (action, listenerAPI) => {
        let cartToSave;
        const previousSaveFailed = action.type === "cartPersistence/retry";

        /* 
        If it's a retry, check for a queued save and use it if there is one.
         If none are queued, use the unsaved cart from when the error occurred.
         */
        if (previousSaveFailed) {
            const cartFromQueue = queuedSave && { ...queuedSave };
            const unsavedCart = listenerAPI.getState().cartPersistence.unsavedCart;

            cartToSave = cartFromQueue || unsavedCart;

            // Clear queue - either it was empty or we have just copied it to cartToSave
            queuedSave = null;
        } else {
            const currentCartState = listenerAPI.getState().cart;
            cartToSave = currentCartState;
        }

        const otherSaveInProgress = listenerAPI.getState().cartPersistence.isSaving;

        // If currently saving, queue this update and return
        if (otherSaveInProgress) {
            console.log("queued");
            queuedSave = cartToSave;
            return;
        }

        listenerAPI.dispatch(saveCart(cartToSave));
    }
});

// When a save completes, check if there are any further updates queued and save if so
onSaveCompleteListener.startListening({
    actionCreator: saveCart.fulfilled,
    effect: (action, listenerAPI) => {
        if (queuedSave) {
            console.log("dispatching queued");
            listenerAPI.dispatch(saveCart(queuedSave));
            queuedSave = null;
            return;
        }

        console.log("finished all saves");
        const lastSavedCart = listenerAPI.getState().cartPersistence.lastSavedCart;
        listenerAPI.dispatch(savesComplete(lastSavedCart));
    }
});


export default [
    cartUpdateListener.middleware,
    onSaveCompleteListener.middleware,
];

