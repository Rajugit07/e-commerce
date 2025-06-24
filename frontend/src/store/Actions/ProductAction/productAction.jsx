import { productsApi } from "../../../api/productApi/Product";
import { productFilterByCategoryApi } from "../../../api/productApi/productFilterByCategoryApi";
import {
    clearFilteredProduct,
    getProduct,
    getProductByCategory,
} from "../../Reducers/productsReducer";

export const asyncGetAllProducts = (Credential) => async (dispatch) => {
    try {
        const data = await productsApi(Credential);
        if (data.success) {
            dispatch(getProduct(data.products));
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncGetFilteredProducts = (queryParams) => async (dispatch) => {
    try {
        dispatch(clearFilteredProduct());
        const data = await productFilterByCategoryApi(queryParams);
        if (data.success) {
            dispatch(getProductByCategory(data.products));
        }
    } catch (error) {
        console.log(error);
    }
};
