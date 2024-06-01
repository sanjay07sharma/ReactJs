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
                Redux uses immer behnd he scenes.
                Immer is a library that helps us to mutate the state.
                Immer is used by Redux Toolkit to handle the state.

            */
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // if i do
            // state = [];
            // it just change the value of state to an empty array but it does not change the value of state.items
            // this is the example of how we can mutate the state.
            // state = [] is not a mutation, but state.items = [] is a mutation.
            state.items.length = 0;
            
            // RTK says that we can mutate the state or return a new state.
            // so by doing return [item : []] will also mutate the state..
        },
        showFilteredItems: (state, action) => {
            state.items.push(action.payload);
        }
    } 
});


// export your action and reducer.
export const {addItem, removeItem, clearCart, showFilteredItems} = cartSlice.actions;
export default cartSlice.reducer;
