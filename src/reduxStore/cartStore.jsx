import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const isExist = state.cart.find(item => item?.id === action.payload?.id);
            if(!isExist) {
                state.cart.push(action.payload)
            } else {
                state.cart = state.cart.map(item => item?.id === action.payload.id ? {...item , quantity: item.quantity+1} : item);
            }
        },
        removeItem: (state, action) => {
            state.cart = action.payload
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;