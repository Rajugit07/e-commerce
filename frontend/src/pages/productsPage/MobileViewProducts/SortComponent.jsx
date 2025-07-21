const SortComponent = ({ onClose }) => {
    return (
        <div className="max-sm:w-full fixed inset-0 bg-opacity-40 z-50 flex items-end justify-center">
            <div className="w-full max-w-md bg-white rounded-t-2xl p-4 shadow-lg">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

                <h2 className="text-center text-lg font-semibold mb-4">
                    Sort Options
                </h2>

                <ul className="space-y-3">
                    <li className="text-sm p-2 rounded hover:bg-zinc-100 cursor-pointer">
                        🔼 A–Z (Ascending)
                    </li>
                    <li className="text-sm p-2 rounded hover:bg-zinc-100 cursor-pointer">
                        🔽 Z–A (Descending)
                    </li>
                    <li className="text-sm p-2 rounded hover:bg-zinc-100 cursor-pointer">
                        🕒 Newest First
                    </li>
                    <li className="text-sm p-2 rounded hover:bg-zinc-100 cursor-pointer">
                        ⭐ Most Popular
                    </li>
                </ul>

                <button
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SortComponent;
