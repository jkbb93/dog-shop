function addItemToCart(itemToAdd, currentCart) {
    const {
        items: currentCartItems,
        totalQuantity: currentTotalQuantity,
        totalPrice: currentTotalPrice
    } = currentCart;

    const itemsCopiedFromCurrentCart = currentCartItems.map(currentCartItem => ({ ...currentCartItem }));

    let updatedItems;

    const matchingItemIndex = itemsCopiedFromCurrentCart.findIndex(cartItem => cartItem.id === itemToAdd.id);
    const itemExistsInCart = (matchingItemIndex !== -1);

    if (itemExistsInCart) {
        itemsCopiedFromCurrentCart[matchingItemIndex].quantity += itemToAdd.quantity;
        updatedItems = itemsCopiedFromCurrentCart;
    } else {
        updatedItems = [...itemsCopiedFromCurrentCart, itemToAdd];
    }

    const updatedTotalQuantity = currentTotalQuantity + itemToAdd.quantity;
    const updatedTotalPrice = currentTotalPrice + (itemToAdd.unitPrice * itemToAdd.quantity);

    const updatedCart = {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
    };

    return updatedCart;
}

function removeItemFromCart(itemToRemoveID, currentCart) {
    const {
        items: currentCartItems,
        totalQuantity: currentTotalQuantity,
        totalPrice: currentTotalPrice
    } = currentCart;

    const itemsCopiedFromCurrentCart = currentCartItems.map(currentCartItem => ({ ...currentCartItem }));

    const itemToRemove = itemsCopiedFromCurrentCart.find(cartItem => cartItem.id === itemToRemoveID);
    if (!itemToRemove) return null;

    const updatedItems = itemsCopiedFromCurrentCart.filter(cartItem => cartItem.id !== itemToRemoveID);
    const updatedTotalQuantity = currentTotalQuantity - itemToRemove.quantity;
    const updatedTotalPrice = currentTotalPrice - (itemToRemove.unitPrice * itemToRemove.quantity);

    const updatedCart = {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice
    };

    return updatedCart;
}

function updateCartItemQuantity(itemToUpdate, currentCart) {
    if (itemToUpdate.newQuantity === 0) return null;
    const {
        items: currentCartItems,
        totalQuantity: currentTotalQuantity,
        totalPrice: currentTotalPrice
    } = currentCart;

    const itemsCopiedFromCurrentCart = currentCartItems.map(currentCartItem => ({ ...currentCartItem }));

    const matchingItemIndex = itemsCopiedFromCurrentCart.findIndex(cartItem => cartItem.id === itemToUpdate.id);
    const matchingCurrentCartItem = itemsCopiedFromCurrentCart[matchingItemIndex];
    if (!matchingCurrentCartItem) return itemsCopiedFromCurrentCart;

    const { quantity: currentItemQuantity, unitPrice: itemPrice } = matchingCurrentCartItem;
    const { newQuantity: newItemQuantity } = itemToUpdate;
    if (newItemQuantity === currentItemQuantity) return null;

    const quantityDifference = newItemQuantity - currentItemQuantity;
    const priceDifference = (newItemQuantity * itemPrice) - (currentItemQuantity * itemPrice);
    const updatedTotalQuantity = currentTotalQuantity + quantityDifference;
    const updatedTotalPrice = currentTotalPrice + priceDifference;

    itemsCopiedFromCurrentCart[matchingItemIndex].quantity = newItemQuantity;
    const updatedItems = itemsCopiedFromCurrentCart;

    const updatedCart = {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
    };

    return updatedCart;
}

export default {
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    updateItemQuantity: updateCartItemQuantity,
}