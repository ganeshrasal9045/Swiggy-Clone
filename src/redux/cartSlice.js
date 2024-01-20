import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //configs
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // make your state as empty []
        }
    }
});

export const {addToCart, removeFromCart ,clearCart} = cartSlice.actions;

export default cartSlice.reducer;