import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductComponent from "./pages/productsPage/productPage/ProductComponent";
function App() {
    return (
        <div className="bg-[#f4f4f4] ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/man/topwear/t-shirt" element={<ProductsPage />} />
                <Route path="/products/mens-sneakers" element={<ProductComponent />} />
            </Routes>
        </div>
    );
}
export default App;
