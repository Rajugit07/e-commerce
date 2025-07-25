import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: userFromStorage,
    },
    reducers: {
        authLoading: (state, action) => {
            state.loading = action.payload;
        },
        authRegisterUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        authUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        authLogoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
});

export default authSlice.reducer;
export const { authLoading, authRegisterUser, authUser, authLogoutUser } =
    authSlice.actions;
