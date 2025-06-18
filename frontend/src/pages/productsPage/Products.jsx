import React, { useEffect } from "react";
import ProductCart from "../../components/ProductCart";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetFilteredProducts } from "../../store/Actions/ProductAction/productAction";

const Products = () => {
    const { category, subCategory, productType } = useParams();
    const dispatch = useDispatch();
    const { filteredProduct } = useSelector((state) => state.productReducer);

    useEffect(() => {
        if (category && subCategory && productType) {
            dispatch(
                asyncGetFilteredProducts({
                    category,
                    subCategory,
                    productType,
                })
            );
        }
    }, [category, subCategory, productType, dispatch]);

    return (
        <>
            {filteredProduct.length > 0 ? (
                <ProductCart items={filteredProduct} productType={productType} />
            ) : (
                <p className="text-center mt-10 text-lg text-red-500">Product not found</p>
            )}
        </>
    );
};

export default Products;
