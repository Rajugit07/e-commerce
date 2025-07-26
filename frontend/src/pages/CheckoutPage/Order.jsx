import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserOrders } from "../../api/orderApi";
import { useSelector } from "react-redux";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = useSelector((state) => state.authReducer.user?._id);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const data = await fetchUserOrders(userId);
                setOrders(data.orders);
            } catch (err) {
                console.error("Failed to fetch orders:", err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) getOrders();
    }, [userId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                    <p className="text-gray-600 text-lg">Loading your orders...</p>
                </div>
            </div>
        );
    }

    const userOrders = orders.filter((order) => order.user[0] === userId);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center">Your Orders</h1>
                    <p className="text-center text-gray-300 mt-2">
                        View and track all your orders
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {userOrders.length === 0 ? (
                    // Empty State
                    <div className="text-center py-16">
                        <div className="mb-6">
                            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Orders Found</h3>
                            <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
                            <Link
                                to="/"
                                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                            >
                                Start Shopping
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Orders List
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {userOrders.length} Order{userOrders.length !== 1 ? 's' : ''} Found
                            </h2>
                        </div>

                        <div className="grid gap-4">
                            {userOrders.map((order) => (
                                <div
                                    key={order._id}
                                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-4 mb-2">
                                                <h3 className="font-semibold text-gray-800">
                                                    Order #{order._id.slice(-8).toUpperCase()}
                                                </h3>
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                    order.status === 'delivered'
                                                        ? 'bg-green-100 text-green-800'
                                                        : order.status === 'pending'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : order.status === 'processing'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Order ID: {order._id}
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-black">₹{order.totalAmount}</p>
                                            <p className="text-sm text-gray-600">Total Amount</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <button className="text-black font-medium hover:underline text-sm">
                                            View Order Details →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Back to Home Button */}
                        <div className="text-center mt-8 pt-8 border-t border-gray-200">
                            <Link
                                to="/"
                                className="inline-flex items-center space-x-2 bg-white text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                                <span>Back to Home</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;
