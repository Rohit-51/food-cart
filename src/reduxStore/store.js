import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartStore'

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default store;