import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore= configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        movie: movieReducer
    }
});

export default appStore;