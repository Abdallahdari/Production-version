import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  size: string;
  Discount?: number;
  quantity?: number;
}

// Cart state per user
interface CartState {
  [userId: string]: Product[];
}

// Initial state
const initialState: CartState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to Redux cart (after Supabase insert)
    addCart: (
      state,
      action: PayloadAction<{ userId: string; product: Product }>
    ) => {
      const { userId, product } = action.payload;
      if (!state[userId]) state[userId] = [];

      const exists = state[userId].find((item) => item.id === product.id);
      if (!exists) {
        state[userId].push({ ...product, quantity: product.quantity || 1 });
      }
    },

    // Remove product from Redux cart (after Supabase delete)
    remove: (
      state,
      action: PayloadAction<{ userId: string; productId: string }>
    ) => {
      const { userId, productId } = action.payload;
      if (state[userId]) {
        state[userId] = state[userId].filter((item) => item.id !== productId);
      }
    },

    // Load full cart from Supabase on login
    setCart: (
      state,
      action: PayloadAction<{ userId: string; products: Product[] }>
    ) => {
      state[action.payload.userId] = action.payload.products;
    },
  },
});

// Selectors
export const GetItems = (userId: string) => (state: { cart: CartState }) =>
  state.cart[userId] || [];

export const GetTotal = (userId: string) => (state: { cart: CartState }) =>
  state.cart[userId]?.length || 0;

export const GetTotalPrice = (userId: string) => (state: { cart: CartState }) =>
  state.cart[userId]?.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  ) || 0;

export const { addCart, remove, setCart } = cartSlice.actions;
export default cartSlice.reducer;
