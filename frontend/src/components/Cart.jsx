import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist, setSelectedProduct } from "../store/Reducers/productsReducer";
import ImageSlide from "../components/ImageSlide";

const Cart = ({ items }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //add to cart
    const handleShopNow = (item) => {
        dispatch(setSelectedProduct(item));
        navigate(`/checkout/cart/${item._id}`);
    };

    //wishlist
    const handleAddToWishlist = (e, item) => {
        e.stopPropagation();
        dispatch(addToWishlist(item));
        navigate(`/wishlist/${item._id}`);
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

