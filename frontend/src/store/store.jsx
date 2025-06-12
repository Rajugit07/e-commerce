import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/Reducers/authReducer";

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
    },
});
