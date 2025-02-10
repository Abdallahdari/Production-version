import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/app/shop/[id]/cartSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
