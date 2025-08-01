import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuyButton = () => {
    const navigate = useNavigate();
    const totalPrice = useSelector((state) => state.productReducer.totalPrice);
    const userInfo = useSelector(
        (state) => state.productReducer.selectedProduct
    );
    const authUserId = useSelector((state) => state.authReducer.user?._id);

    const handlePayment = async () => {
        try {
            if (!authUserId) {
                navigate("/login");
                return;
            }
            // Get Razorpay key
            const {
                data: { key },
            } = await axios.get(
                "https://e-commerce-9kun.onrender.com/api/v1/getkey",
                {
                    withCredentials: true,
                }
            );

            // Create order
            const {
                data: { order },
            } = await axios.post(
                "https://e-commerce-9kun.onrender.com/api/v1/checkout",
                {
                    amount: totalPrice * 100,
                    user: authUserId,
                    products: userInfo,
                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "Your Brand Name",
                description: "Product Payment",
                image: "https://example.com/your_logo.png",
                order_id: order.id,
                callback_url:
                    "https://e-commerce-9kun.onrender.com/api/v1/paymentverification",
                prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Corporate Office Address",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.log("Payment failed", error);
        }
    };

    return (
        <div className="mt-6 w-full h-auto">
            <button
                onClick={handlePayment}
                className="w-full p-2 bg-amber-300 rounded-md text-xl font-semibold cursor-pointer uppercase text-zinc-900 border border-zinc-300"
            >
                Proceed
            </button>
        </div>
    );
};

export default BuyButton;
