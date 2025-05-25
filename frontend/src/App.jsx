import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
function App() {
    return (
        <div className="bg-[#f4f4f4] ">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
export default App;
