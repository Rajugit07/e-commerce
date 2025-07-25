import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    filteredProduct: [],
    selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || [],
    totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
    wishlistProduct: JSON.parse(localStorage.getItem("wishlistProduct")) || [],
    currWishlist: JSON.parse(localStorage.getItem("currWishlist")) || null,
    currProduct: JSON.parse(localStorage.getItem("currProduct")) || null,
    productDescription:
        JSON.parse(localStorage.getItem("productDescription")) || [],
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

            // Check if product already exists (assuming product has unique id or productId)
            const isExist = existingProducts.some(
                (item) => item.productId === action.payload.productId
            );

            // Always set current product
            state.currProduct = action.payload;
            localStorage.setItem("currProduct", JSON.stringify(action.payload));

            if (!isExist) {
                existingProducts.push(action.payload);
                localStorage.setItem(
                    "selectedProduct",
                    JSON.stringify(existingProducts)
                );
                state.selectedProduct = existingProducts;

                // Calculate total price here
                const totalPrice = existingProducts.reduce((acc, product) => {
                    const priceNum = Number(product.price) || 0;
                    const discount = Number(product.discount) || 0;
                    const coupon = Number(product.coupon) || 0;

                    const discountAmount = (priceNum * discount) / 100;
                    const total = priceNum - discountAmount - coupon;

                    return acc + total;
                }, 0);

                state.totalPrice = Math.round(totalPrice);
                localStorage.setItem(
                    "totalPrice",
                    JSON.stringify(state.totalPrice)
                );
            } else {
                // If needed, update state with existing without changes
                state.selectedProduct = existingProducts;
            }
        },
        clearSelectedProduct: (state) => {
            state.selectedProduct = [];
            state.currProduct = null;
            state.totalPrice = 0;

            localStorage.removeItem("selectedProduct");
            localStorage.removeItem("currProduct");
            localStorage.removeItem("totalPrice");
        },
        openProductDescription: (state, action) => {
            state.productDescription = action.payload;
            localStorage.setItem(
                "productDescription",
                JSON.stringify(action.payload)
            );
            // Always set current product
            state.currProduct = action.payload;
            localStorage.setItem("currProduct", JSON.stringify(action.payload));
        },
        deleteSelectedProduct: (state, action) => {
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

            // Recalculate total price after deletion
            const totalPrice = updatedProducts.reduce((acc, product) => {
                const priceNum = Number(product.price) || 0;
                const discount = Number(product.discount) || 0;
                const coupon = Number(product.coupon) || 0;

                const discountAmount = (priceNum * discount) / 100;
                const total = priceNum - discountAmount - coupon;

                return acc + total;
            }, 0);

            state.totalPrice = Math.round(totalPrice);

            // Update localStorage for totalPrice
            localStorage.setItem(
                "totalPrice",
                JSON.stringify(state.totalPrice)
            );
        },
        addToWishlist: (state, action) => {
            let existingWishlist = JSON.parse(
                localStorage.getItem("wishlistProduct")
            );

            if (!Array.isArray(existingWishlist)) {
                existingWishlist = [];
            }

            // Filter out any null or invalid items to prevent runtime errors
            existingWishlist = existingWishlist.filter(
                (item) => item && item.productId
            );

            const isExist = existingWishlist.some(
                (item) => item.productId === action.payload.productId
            );

            state.currWishlist = action.payload;
            localStorage.setItem("currProduct", JSON.stringify(action.payload));

            if (!isExist) {
                existingWishlist.push(action.payload);
                localStorage.setItem(
                    "wishlistProduct",
                    JSON.stringify(existingWishlist)
                );
                state.wishlistProduct = existingWishlist;
            } else {
                // If needed, update state with existing without changes
                state.wishlistProduct = existingWishlist;
            }
        },
        clearWishlist: (state, action) => {
            let existingWishlist = JSON.parse(
                localStorage.getItem("wishlistProduct")
            );

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
    deleteSelectedProduct,
    addToWishlist,
    clearWishlist,
    openProductDescription,
    clearSelectedProduct,
} = productSlice.actions;
