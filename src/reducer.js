export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'display':
      return {
        ...state,
        initialItems: payload,
        items: payload,
        count: payload.length
      }
    case 'SIZE_FILTER':
      let selectedSizes = payload.filter((e) => e.active === true).map((e) => e.value)
      let newItems = state.initialItems.filter((item) => {
        let as = item.availableSizes.filter((size) => selectedSizes.includes(size))
        if (as.length) return true;
        return false;
      })
      if (selectedSizes.length === 0) newItems = state.initialItems
      return {
        ...state,
        initialItems: state.initialItems,
        items: newItems,
        count: newItems.length
      }
    case 'lowestPrice':
      return { ...state, items: state.items.sort((a, b) => a.price < b.price ? -1 : 1) }
    case 'highestPrice':
      return { ...state, items: state.items.sort((a, b) => a.price < b.price ? 1 : -1) }
    case 'ADD_TO_CART':
      let finalCartItems = handleCart(state.cart.cartItems, payload);
      let totalAmount = findAmount(finalCartItems);
      return { ...state, cart: { cartItems: finalCartItems, cartCount: state.cart.cartCount + 1, totalAmount: totalAmount } }
    case 'DELETE_FROM_CART':
      let updatedCart = deleteItem(state.cart, payload);
      return { ...state, cart: updatedCart };
    default:
      return state
  }
}
function findAmount(cart) {
  let amount = 0;
  cart.forEach((items) => {
    amount += items.item.price * items.quantity
  });
  return amount;
}
function handleCart(cartArray, newItem) {
  let found = false;
  cartArray.forEach((items) => {
    if (items.item.id === newItem.id) {
      items.quantity++;
      found = true;
    }
  })
  if (found) return cartArray;
  let newItemInCart = {
    item: newItem,
    quantity: 1
  }
  cartArray.push(newItemInCart);
  return cartArray;
}

function deleteItem(cart, id) {
  cart.cartItems.forEach((items) => {
    if (items.item.id === id) {
      cart.totalAmount -= items.quantity * items.item.price;
      cart.cartCount -= items.quantity;
    }
  })
  cart.cartItems = cart.cartItems.filter((items) => items.item.id !== id);
  return cart;
}