import React, { useRef } from "react";

export default function CategoryScroll({ categoryName, subcategories, image }) {
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
                  max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:justify-start max-sm:hide-scrollbar cursor-grab active:cursor-grabbing"
            >
                {subcategories.map((sub, idx) => (
                    <div
                        key={idx}
                        className="bg-white h-auto w-60 max-sm:w-60 flex-shrink-0 text-center px-2 py-3 rounded-md border border-zinc-200 text-gray-800 hover:shadow-lg transition-shadow duration-200 flex flex-col"
                    >
                        <h2 className="mb-2 mt-1 text-lg font-semibold">
                            {sub}
                        </h2>
                        <img
                            src={image}
                            alt={`${sub} image`}
                            className="w-full h-40 object-cover rounded mb-3"
                        />
                        <button className="w-full bg-black text-white px-6 py-2 rounded-md cursor-pointer font-semibold hover:bg-zinc-800">
                            Shop Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
