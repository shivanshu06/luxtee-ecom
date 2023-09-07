import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // Initialize the cart as an empty array
  totalPrice: 0, // Initialize the total price as 0
};

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      // Update the total price after adding an item
      state.totalPrice = calculateTotalPrice(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

      // Update the total price after removing an item
      state.totalPrice = calculateTotalPrice(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const itemToUpdate = state.cartItems.find(item => item.id === action.payload);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
        // Update the total price after incrementing quantity
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
    },
    decrementQuantity: (state, action) => {
      const itemToUpdate = state.cartItems.find(item => item.id === action.payload);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
        // Update the total price after decrementing quantity
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
