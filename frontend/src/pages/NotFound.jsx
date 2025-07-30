import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <FiSearch className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Product Not Found
            </h2>
            <p className="text-gray-600 text-center mb-6 max-w-md">
                Sorry, we couldn’t find the product you’re looking for. It might
                have been removed or the link is broken.
            </p>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
                Go to Home
            </button>
        </div>
    );
};

export default NotFound;
