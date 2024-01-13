import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './userSlice'

const store = configureStore({
    reducer:{
        
        eCart : cartSliceReducer
    }
});

export default store;