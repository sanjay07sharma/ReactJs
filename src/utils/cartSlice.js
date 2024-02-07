import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            /*
                Here we MUTATING THE STATE
                Earlier in Vanilla(older) redux says => DONT MUTATE STATE
                So how it was done then ? 
                const newState = [...state]
                newState.items.push(action.payload);
                return newState;
                
                Now in Redux Toolkit => We have to mutate the state.
            */
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    } 
});


// export your action and reducer.
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
