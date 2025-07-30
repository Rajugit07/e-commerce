import React, { useEffect } from "react";
import ProductCart from "../../components/ProductCart";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetFilteredProducts } from "../../store/Actions/ProductAction/productAction";
import NotFound from "../NotFound";

const Products = () => {
    const { category, subCategory, productType } = useParams();
    const dispatch = useDispatch();

    const { filteredProduct, loading } = useSelector(
        (state) => state.productReducer
    );

    const { selectedPrice, selectedSize, selectedColor } = useSelector(
        (state) => state.productFilterReducer
    );

    const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "").trim();

    useEffect(() => {
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

    let filteredProducts = filteredProduct;

    //price
    if (selectedPrice !== "all") {
        const price = Number(selectedPrice);
        filteredProducts = filteredProducts.filter((product) =>
            price === 1000 ? product.price > price : product.price <= price
        );
    }

    // size
    if (selectedSize !== "all") {
        filteredProducts = filteredProducts.filter(
            (product) =>
                product.size?.toLowerCase() === selectedSize.toLowerCase()
        );
    }
     //color
     if (selectedColor !== "all") {
        filteredProducts = filteredProducts.filter(
            (product) =>
                Array.isArray(product.color) &&
                product.color
                    .map((c) => c.toLowerCase())
                    .includes(selectedColor.toLowerCase())
        );
    }

    return (
        <>
            {loading ? (
                <p className="text-center mt-10 text-blue-500">
                    Loading products...
                </p>
            ) : filteredProducts.length > 0 ? (
                <ProductCart
                    items={filteredProducts}
                    productType={productType}
                />
            ) : (
                <NotFound/>
            )}
        </>
    );
};

export default Products;
