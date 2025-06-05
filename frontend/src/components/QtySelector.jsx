import { useState } from "react";

const QtySelector = () => {
    const [qty, setQty] = useState(1);

    const increment = () => setQty((prev) => prev + 1);
    const decrement = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Qty
            </label>
            <div className="flex items-center border border-zinc-200 rounded overflow-hidden w-28">
                <button
                    onClick={decrement}
                    className="w-8 py-1 text-lg font-semibold text-gray-600 hover:bg-zinc-100"
                >
                    -
                </button>
                <div className="flex-1 text-center px-2 text-sm">
                    {qty}
                </div>
                <button
                    onClick={increment}
                    className="w-8 py-1 text-lg font-semibold text-gray-600 hover:bg-zinc-100"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default QtySelector;
