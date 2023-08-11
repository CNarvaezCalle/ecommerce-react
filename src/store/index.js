import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice" //productSlice.reducer
import cart from './slices/cart.slice'

const store = configureStore({

  reducer: {
    products,
    cart
  }
})

export default store
