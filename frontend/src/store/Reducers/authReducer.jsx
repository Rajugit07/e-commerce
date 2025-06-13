import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
    },
    reducers: {
        authLoading: (state, action) => {
            state.loading = action.payload;
        },
        authRegisterUser: (state, action) => {
            state.user = action.payload;
        },
        authUser: (state, action) => {
            state.user = action.payload;
        },
        authLogoutUser: (state) => {
            state.user = null;
        },
    },
});

export default authSlice.reducer;
export const { authLoading, authRegisterUser, authUser, authLogoutUser } =
    authSlice.actions;
