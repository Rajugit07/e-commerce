import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    filteredProduct: [],
    selectedProduct:
        JSON.parse(localStorage.getItem("selectedProduct")) || null,
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
        setSelectedProduct: (state, action) => {
            localStorage.setItem(
                "selectedProduct",
                JSON.stringify(action.payload)
            );
            state.selectedProduct = action.payload;
        },
        clearSelectedProduct: (state) => {
            localStorage.removeItem("selectedProduct");
            state.selectedProduct = null;
        },
    },
});

export default productSlice.reducer;
export const {
    getProduct,
    getProductByCategory,
    clearFilteredProduct,
    setSelectedProduct,
    clearSelectedProduct,
} = productSlice.actions;
