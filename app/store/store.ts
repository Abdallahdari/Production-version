import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../shop/[id]/cartSlice";

export default configureStore({
  reducer: {
    cartslice: counterSlice,
  },
});
