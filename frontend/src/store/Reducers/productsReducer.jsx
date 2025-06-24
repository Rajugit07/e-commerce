import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    filteredProduct: [],
    loading: false,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProduct: (state, action) => {
            state.product = action.payload;
        },
        getProductByCategory: (state, action) => {
            state.filteredProduct = action.payload;
            state.loading = false;
        },
        clearFilteredProduct: (state) => {
            state.filteredProduct = [];
            state.loading = true; // Set loading true until new data comes
        },
    },
});

export default productSlice.reducer;
export const { getProduct, getProductByCategory, clearFilteredProduct } =
    productSlice.actions;
