import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPrice: "all",
    selectedSize: "all",
    selectedColor: "all",
};

const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        setPriceFilter: (state, action) => {
            state.selectedPrice = action.payload;
        },
        setSizeFilter: (state, action) => {
            state.selectedSize = action.payload;
        },
        setColorFilter: (state, action) => {
            state.selectedColor = action.payload;
        },
        clearFilter: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export default productFilterSlice.reducer;
export const { setPriceFilter, setSizeFilter, setColorFilter } =
    productFilterSlice.actions;
