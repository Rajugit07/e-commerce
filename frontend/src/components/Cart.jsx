import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    addToWishlist,
    openProductDescription,
} from "../store/Reducers/productsReducer";
import ImageSlide from "../components/ImageSlide";

const Cart = ({ items }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //add to cart
    const handleShopNow = (item) => {
        dispatch(openProductDescription(item));
        navigate(`/product/description`);
    };

    //wishlist
    const handleAddToWishlist = (e, item) => {
        e.stopPropagation();
        dispatch(addToWishlist(item));
        navigate(`/wishlist`);
    };

    return (
        <section className="w-full overflow-x-hidden">
            <div className="flex flex-wrap gap-4 p-4">
                {items.map((item, idx) => (
                    <ImageSlide
                        key={item.productId || idx}
                        item={item}
                        handleShopNow={handleShopNow}
                        handleAddToWishlist={handleAddToWishlist}
                    />
                ))}
            </div>
        </section>
    );
};

export default Cart;
