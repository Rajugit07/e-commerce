import Navbar from "../../layouts/Navbar/Navbar";
import { RxCross1 } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    clearWishlist,
    setSelectedProduct,
} from "../../store/Reducers/productsReducer";
import Footer from "../../layouts/Footer";

const WishlistPage = () => {
    const wishlistItems = useSelector(
        (state) => state.productReducer.wishlistProduct
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveWishlist = (product) => {
        dispatch(clearWishlist(product));
    };

    const handleShopNow = (product) => {
        dispatch(setSelectedProduct(product));
        navigate("/checkout/cart/");
    };

    // Empty state component
    const EmptyWishlist = () => (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <FiHeart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Your wishlist is empty
            </h2>
            <p className="text-gray-600 text-center mb-6 max-w-md">
                Save items you love for later. Start exploring and add products to your wishlist.
            </p>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
                Continue Shopping
            </button>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navbar */}
            <Navbar />

            {/* Wishlist Content */}
            <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 bg-gray-50">
                {/* Header Section */}
                <div className="max-w-8xl mx-auto">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                My Wishlist
                            </h1>
                            {wishlistItems && wishlistItems.length > 0 && (
                                <p className="text-gray-600 mt-1">
                                    {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Wishlist Items or Empty State */}
                    {wishlistItems && wishlistItems.length > 0 ? (
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
                            {wishlistItems.map((product) => (
                                <div
                                    key={product._id}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                                >
                                    {/* Remove Icon */}
                                    <button
                                        onClick={() => handleRemoveWishlist(product)}
                                        aria-label="Remove from wishlist"
                                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                                    >
                                        <RxCross1 className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors duration-200" />
                                    </button>

                                    {/* Product Image */}
                                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image[0]?.url}
                                            alt={product.description || "Product"}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.src = '/placeholder-image.jpg'; // Add a fallback image
                                            }}
                                        />

                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
                                        <h2
                                            className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2 leading-tight"
                                            title={product.description}
                                        >
                                            {product.description}
                                        </h2>
                                        <div className="flex items-center gap-2 mt-auto">
                                            <p className="text-lg sm:text-xl font-bold text-emerald-600">
                                                ₹{product.price?.toLocaleString('en-IN')}
                                            </p>
                                            {product.originalPrice && product.originalPrice > product.price && (
                                                <p className="text-sm text-gray-500 line-through">
                                                    ₹{product.originalPrice?.toLocaleString('en-IN')}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Move to Bag Button */}
                                    <button
                                        onClick={() => handleShopNow(product)}
                                        className="w-full text-sm sm:text-base font-semibold py-3 sm:py-4 uppercase transition-all duration-300 border-t border-gray-100 bg-white hover:bg-black hover:text-white active:scale-95"
                                    >
                                        Move to Bag
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <EmptyWishlist />
                    )}
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default WishlistPage;
