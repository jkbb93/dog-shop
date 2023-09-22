const addItemToCart = (state, action) => {
    const cart = state;
    const itemToAdd = action.payload;
    if (itemToAdd.quantity === 0) return cart;

    const matchingItemIndex = cart.items.findIndex(item => item.id === itemToAdd.id);
    const itemExistsInCart = (matchingItemIndex !== -1);

    if (itemExistsInCart) {
        cart.items[matchingItemIndex].quantity += itemToAdd.quantity;
    } else {
        cart.items.push(itemToAdd);
    }

    cart.totalQuantity += itemToAdd.quantity;
    cart.totalPrice += (itemToAdd.unitPrice * itemToAdd.quantity);
};


const removeItemFromCart = (state, action) => {
    const cart = state;
    const itemToRemoveID = action.payload;

    const itemToRemove = cart.items.find(item => item.id === itemToRemoveID);
    if (!itemToRemove) return cart;

    cart.items = cart.items.filter(item => item.id !== itemToRemoveID);
    cart.totalQuantity -= itemToRemove.quantity;
    cart.totalPrice -= (itemToRemove.unitPrice * itemToRemove.quantity);
};


const updateCartItemQuantity = (state, action) => {
    const cart = state;
    const itemToUpdate = action.payload;
    if (itemToUpdate.newQuantity === 0) return cart;    // Not allowed to set item quantity to 0

    const matchingItemIndex = cart.items.findIndex(item => item.id === itemToUpdate.id);
    const matchingCurrentCartItem = cart.items[matchingItemIndex];
    if (!matchingCurrentCartItem) return cart;

    const { quantity: currentItemQuantity, unitPrice: itemPrice } = matchingCurrentCartItem;
    const { newQuantity: newItemQuantity } = itemToUpdate;
    if (newItemQuantity === currentItemQuantity) return cart;

    const quantityDifference = newItemQuantity - currentItemQuantity;
    const priceDifference = (newItemQuantity * itemPrice) - (currentItemQuantity * itemPrice);
    cart.totalQuantity += quantityDifference;
    cart.totalPrice += priceDifference;

    cart.items[matchingItemIndex].quantity = newItemQuantity;
};


export default {
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
};