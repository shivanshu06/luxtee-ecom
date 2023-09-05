import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [], // Initialize the cart as an empty array
  };
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        // Add the item to the cart
        state.cartItems.push(action.payload);
      },
      removeFromCart: (state, action) => {
        // Remove the item from the cart based on its ID, for example
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      },
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;  