import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryScroll({
    categoryName,
    subcategories,
    getCategoryImage,
    dropDownSubData,
}) {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const onMouseLeave = () => {
        isDragging.current = false;
    };

    const onMouseUp = () => {
        isDragging.current = false;
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; // Adjust scroll speed factor here
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // Function to handle navigation
    const handleShopNowClick = (sub) => {
        const categorySlug = categoryName.toLowerCase(); // men, woman, kids, beauty
        const subcategorySlug = sub.toLowerCase().replace(/\s+/g, "");

        // Get the corresponding product list from dropDownSubData
        const productList = dropDownSubData[subcategorySlug];

        // Get the first product item, fallback to "t-shirt" if undefined
        const firstProductItem =
            productList && productList.length > 0
                ? productList[0].toLowerCase().replace(/\s+/g, "")
                : "t-shirt";

        // Final URL
        const url = `/${categorySlug}/${subcategorySlug}/${firstProductItem}`;
        console.log("Navigating to:", url);
        navigate(url);
    };

    return (
        <div className="p-4 mb-4">
            <h1 className="text-xl font-bold">{categoryName.toUpperCase()}</h1>
            <div
                ref={scrollRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                className="flex flex-wrap gap-4 justify-between items-center mt-2 p-4 rounded-md
                  max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:justify-start max-sm:hide-scrollbar cursor-grab active:cursor-grabbing hide-scrollbar"
            >
                {subcategories.map((sub, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white h-84 w-72 max-sm:w-60 flex-shrink-0 rounded-lg border border-zinc-200 overflow-hidden shadow-sm hover:scale-105 transition-scale duration-300"
                    >
                        {/* image */}
                        {getCategoryImage &&
                        getCategoryImage(categoryName, sub) ? (
                            <img
                                src={getCategoryImage(categoryName, sub)}
                                alt={`${sub} image`}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                No Image
                            </div>
                        )}
                        {/* overlay for readability */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full p-4">
                            {/* Header section with title and badge side by side */}
                            <div className="flex items-center justify-between w-full mb-4">
                                <h2 className="text-sm font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-md">
                                    {sub}
                                </h2>
                                <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                                    New
                                </span>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => handleShopNowClick(sub)}
                                className="w-full bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-md font-semibold uppercase hover:bg-white/30 transition-colors duration-200"
                            >
                                Explore the Collection
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
