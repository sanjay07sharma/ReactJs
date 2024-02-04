import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore = configureStore({
    // This reducer is app reducer , it will contain small reducers
    reducer: {
        cart : cartReducer
    }
});

export default appStore
