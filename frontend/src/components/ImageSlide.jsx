import React, { useState } from "react";

const ImageSlide = ({ item, handleShopNow, handleAddToWishlist }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const handlePrev = () => {
        setCurrentImgIndex((prevIndex) =>
            prevIndex === 0 ? item.image.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImgIndex((prevIndex) =>
            prevIndex === item.image.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div
            className="min-w-[230px] max-w-[250px] h-[420px] flex flex-col items-center border border-zinc-200 p-2 transition-transform rounded-md cursor-pointer"
            onClick={() => handleShopNow(item)}
        >
            <div className="relative w-full h-64">
                <img
                    src={item.image[currentImgIndex]?.url}
                    alt={item.title}
                    className="h-64 w-full rounded-md object-cover"
                />
                {item.image.length > 1 && (
                    <>
                        <button
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering card click
                                handlePrev();
                            }}
                        >
                            &lt;
                        </button>
                        <button
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                        >
                            &gt;
                        </button>
                    </>
                )}
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mt-3 text-center capitalize">
                {item.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1 text-center truncate w-full overflow-hidden whitespace-nowrap">
                {item.description}
            </p>
            <h3 className="mt-3">RS: {item.price}</h3>
            <button
                className="mt-3 px-4 py-1 text-black border border-zinc-300 rounded-md cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent card click on button click
                    handleAddToWishlist(e, item);
                }}
            >
                Add to Wishlist
            </button>
        </div>
    );
};

export default ImageSlide;
