import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist,openProductDescription } from "../store/Reducers/productsReducer";
import ImageSlide from "../components/ImageSlide";

const Cart = ({ items }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //add to cart
    const handleShopNow = (item) => {
        dispatch(openProductDescription(item));
        navigate(`/product/description`);
        console.log(openProductDescription(item));
    };

    //wishlist
    const handleAddToWishlist = (e, item) => {
        e.stopPropagation();
        dispatch(addToWishlist(item));
        navigate(`/wishlist`);
    };

    return (
        <div className="w-full overflow-x-auto whitespace-nowrap px-5 mb-5 flex flex-wrap gap-4 py-4 ">
            {items.map((item, idx) => (
                <ImageSlide
                key={item.productId || idx}
                item={item}
                handleShopNow={handleShopNow}
                handleAddToWishlist={handleAddToWishlist}
            />

            ))}
        </div>
    );
};

export default Cart;

