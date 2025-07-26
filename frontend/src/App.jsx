import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductComponent from "./pages/productsPage/productPage/ProductComponent";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import PaymentSuccess from "./pages/CheckoutPage/PaymentSuccess";
import Order from "./pages/CheckoutPage/Order";
function App() {
    return (
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/:category/:subCategory/:productType"
                    element={<ProductsPage />}
                />
                <Route
                    path="/product/description"
                    element={<ProductComponent />}
                />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/checkout/cart" element={<CheckoutPage />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/orders/:userId" element={<Order />} />
            </Routes>
        </div>
    );
}
export default App;
