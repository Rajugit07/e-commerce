import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist, setSelectedProduct } from "../store/Reducers/productsReducer";

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
                <div
                    className="min-w-[230px] max-w-[250px] h-[420px] flex flex-col items-center border border-zinc-200 p-2 transition-transform  hover:shadow-md rounded-md cursor-pointer"
                    key={item.productId || idx}
                    onClick={() => handleShopNow(item)}
                >
                    <img
                        src={item.image[0]?.url}
                        alt={item.title}
                        className="h-65 w-full rounded-md object-cover"
                    />
                    <h2 className="text-lg font-semibold text-gray-800 mt-3 text-center capitalize">
                        {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 text-center truncate w-full overflow-hidden whitespace-nowrap">
                        {item.description}
                    </p>
                    <h3 className="mt-3">RS: {item.price}</h3>
                    <button
                        className="mt-3 px-4 py-1 text-black border border-zinc-300 rounded-md cursor-pointer"
                        onClick={(e) => handleAddToWishlist(e, item)}
                    >
                        Add to Wishlist
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
