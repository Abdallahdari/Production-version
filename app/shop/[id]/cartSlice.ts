import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    Addingcart(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price; // Update total price
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1, // Initialize quantity
          totalPrice: action.payload.price, // Store total price for easy calculations
        });
      }
    },
    Dele(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const Getitem = (state) => state.product.cart; // Get cart items
export const GetTotalItems = (state) => state.product.cart.length; // Get total number of items in the cart

export const { Addingcart, Dele } = ProductSlice.actions;
export default ProductSlice.reducer;
