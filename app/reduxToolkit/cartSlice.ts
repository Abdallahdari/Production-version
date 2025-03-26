import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  size: string;
  Discount?: number;
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [], // Cart should be an array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

// Selector to get total number of items in the cart
//
export const GetItem = (state: { cart: CartState }) => state.cart.cart;
export const Gettotal = (state: { cart: CartState }) => state.cart.cart.length;
export const GetTotalPrice = (state: { cart: CartState }) =>
  state.cart.cart.reduce((total, item) => total + item.price, 0);
export const { addCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
