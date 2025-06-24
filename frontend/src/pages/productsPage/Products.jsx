import React, { useEffect } from "react";
import ProductCart from "../../components/ProductCart";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetFilteredProducts } from "../../store/Actions/ProductAction/productAction";
// import { clearFilteredProduct } from "../../store/Reducers/productsReducer";

const Products = () => {
    const { category, subCategory, productType } = useParams();
    const dispatch = useDispatch();
    const { filteredProduct, loading } = useSelector(
        (state) => state.productReducer
    );
    const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "").trim();

    useEffect(() => {
        console.log("Params =>", { category, subCategory, productType });
        if (category && subCategory && productType) {
            dispatch(
                asyncGetFilteredProducts({
                    category: normalize(category),
                    subCategory: normalize(subCategory),
                    productType: normalize(productType),
                })
            );
        }
    }, [category, subCategory, productType, dispatch]);

    return (
        <>
            <>
                {loading ? (
                    <p className="text-center mt-10 text-blue-500">
                        Loading products...
                    </p>
                ) : filteredProduct.length > 0 ? (
                    <ProductCart
                        items={filteredProduct}
                        productType={productType}
                    />
                ) : (
                    <p className="text-center mt-10 text-red-500">
                        Product not found
                    </p>
                )}
            </>
        </>
    );
};

export default Products;
