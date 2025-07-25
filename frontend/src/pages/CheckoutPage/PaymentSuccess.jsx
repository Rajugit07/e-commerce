import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clearSelectedProduct  } from "../../store/Reducers/productsReducer";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const reference = queryParams.get("reference");
    const [showContent, setShowContent] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Clear selected products after successful payment
        dispatch(clearSelectedProduct());
    }, [dispatch]);

    const handleContinueShopping = () => {
        navigate("/");
    };

    const handleViewOrder = () => {
        navigate("/orders");
    };

    const copyReference = () => {
        navigator.clipboard.writeText(reference);
        // add a toast notification here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex items-center justify-center p-5 font-sans">
            <div className="bg-white rounded-3xl p-12 max-w-lg w-full text-center shadow-2xl relative overflow-hidden">
                {/* Top colored border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>

                {/* Animated Success Icon */}
                <div className="mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                        <svg
                            className="w-10 h-10 text-white animate-pulse"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div
                    className={`transition-all duration-700 ease-out ${
                        showContent
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                    }`}
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                        Payment Successful!
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Thank you for your purchase. Your payment has been
                        processed successfully.
                    </p>

                    {/* Reference Details */}
                    {reference && (
                        <div className="mb-8">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <div className="text-left">
                                    <span className="text-sm font-semibold text-slate-600 block mb-2">
                                        Transaction Reference
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <code className="bg-slate-800 text-emerald-400 px-3 py-2 rounded-lg font-mono text-sm flex-1 break-all">
                                            {reference}
                                        </code>
                                        <button
                                            className="bg-slate-200 hover:bg-slate-300 text-slate-600 p-2 rounded-md transition-colors duration-200"
                                            onClick={copyReference}
                                            title="Copy reference"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Order Details */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-slate-200">
                                <span className="font-medium text-slate-600">
                                    Order Status
                                </span>
                                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                                    Confirmed
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-200">
                                <span className="font-medium text-slate-600">
                                    Payment Method
                                </span>
                                <span className="font-semibold text-slate-800">
                                    Online Payment
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="font-medium text-slate-600">
                                    Date & Time
                                </span>
                                <span className="font-semibold text-slate-800">
                                    {new Date().toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <button
                            className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 min-w-0 sm:min-w-44"
                            onClick={handleViewOrder}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            View Order Details
                        </button>
                        <button
                            className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2 min-w-0 sm:min-w-44"
                            onClick={handleContinueShopping}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                                />
                            </svg>
                            Continue Shopping
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
                        <p className="flex items-center justify-center gap-2 text-sm">
                            <svg
                                className="w-4 h-4 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            A confirmation email has been sent to your
                            registered email address.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
