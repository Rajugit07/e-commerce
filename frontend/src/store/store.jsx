import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/Reducers/authReducer";
import productReducer from "../store/Reducers/productsReducer";
import productFilterReducer from "../store/Reducers/productFilterReducer";

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        productReducer: productReducer,
        productFilterReducer: productFilterReducer,
    },
});
