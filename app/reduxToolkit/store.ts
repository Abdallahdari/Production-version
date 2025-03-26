import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: { cart: cartSlice }, // ✅ Fix applied here
});

// Types for Redux
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
