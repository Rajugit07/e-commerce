import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../../store/Actions/LoginAuthAction";
import Toast from "../../components/Toast";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.authReducer);

    const changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(asyncLoginUser(input, navigate));
    };

    return (
        <>
            <div className="bg-[#f5f3ea] w-full min-h-screen flex items-center justify-center px-4">
                <div className="bg-[#fdfdfa] w-full max-w-md p-8 rounded-2xl shadow-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-10 mt-10 text-center">
                            <h1 className="text-3xl font-semibold mb-2">
                                Sign In
                            </h1>
                            <h2 className="text-xl font-medium text-zinc-600">
                                Continue your journey
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                name="email"
                                className="border border-zinc-200 px-4 py-3 outline-none rounded-lg w-full"
                                onChange={changeHandler}
                                value={input.email}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="border border-zinc-200 px-4 py-3 outline-none rounded-lg w-full"
                                onChange={changeHandler}
                                value={input.password}
                            />
                            <button
                                className="px-4 py-3 bg-[#191A1A] text-white rounded-md font-semibold mt-4 w-full cursor-pointer hover:bg-[#303232]"
                                type="submit"
                                disabled={loading}
                            >
                                Login
                            </button>
                        </div>

                        {/* Signup Link */}
                        <div className="mt-6 text-center text-sm text-zinc-600">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-[#191A1A] font-semibold hover:underline"
                            >
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Toast />
        </>
    );
};

export default Login;
