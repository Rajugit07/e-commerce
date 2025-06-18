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
        },
    },
});

export default productSlice.reducer;
export const { getProduct, getProductByCategory } = productSlice.actions;
