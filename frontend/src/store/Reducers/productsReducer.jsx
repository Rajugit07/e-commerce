import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    filteredProduct: [],
    selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || [],
    wishlistProduct: JSON.parse(localStorage.getItem("wishlistProduct")) || [],
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
            const existingProducts =
                JSON.parse(localStorage.getItem("selectedProduct")) || [];
            existingProducts.push(action.payload);
            localStorage.setItem(
                "selectedProduct",
                JSON.stringify(existingProducts)
            );
            state.selectedProduct = existingProducts;
        },
        clearSelectedProduct: (state, action) => {
            const existingProducts =
                JSON.parse(localStorage.getItem("selectedProduct")) || [];
            const updatedProducts = existingProducts.filter(
                (product) => product._id !== action.payload._id
            );
            localStorage.setItem(
                "selectedProduct",
                JSON.stringify(updatedProducts)
            );
            state.selectedProduct = updatedProducts;
        },
        addToWishlist: (state, action) => {
            let existingWishlist = JSON.parse(localStorage.getItem("wishlistProduct"));

            if (!Array.isArray(existingWishlist)) {
                existingWishlist = [];
            }

            existingWishlist.push(action.payload);

            localStorage.setItem(
                "wishlistProduct",
                JSON.stringify(existingWishlist)
            );

            state.wishlistProduct = existingWishlist;
        },
        clearWishlist: (state, action) => {
            let existingWishlist = JSON.parse(localStorage.getItem("wishlistProduct"));

            if (!Array.isArray(existingWishlist)) {
                existingWishlist = [];
            }

            const updatedWishlist = existingWishlist.filter(
                (product) => product._id !== action.payload._id
            );

            localStorage.setItem(
                "wishlistProduct",
                JSON.stringify(updatedWishlist)
            );

            state.wishlistProduct = updatedWishlist;
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
    addToWishlist,
    clearWishlist,
} = productSlice.actions;

