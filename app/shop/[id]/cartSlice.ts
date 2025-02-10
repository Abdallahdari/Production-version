import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  photo: string;
  quantity: number;
  totalPrice: number;
}

// Define the state type
interface CartState {
  cart: CartItem[];
}

// Initial state
const initialState: CartState = {
  cart: [],
};

// Create the slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Add item to cart
    Addingcar(){}
      

    // Remove item from cart
    Dele: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

// Selectors
export const Getitem = (state: { product: CartState }) => state.product.cart;
export const GetTotalItems = (state: { product: CartState }) =>
  state.product.cart.reduce((total, item) => total + item.quantity, 0);

// Export actions and reducer
export const { Addingcart, Dele } = productSlice.actions;
export default productSlice.reducer;
