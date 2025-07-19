import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../../store/Actions/LoginAuthAction";
import Toast from "../../components/Toast";

const Login = () => {
    const [input, setInput] = useState({ email: "", password: "" });
    const [showPwd, setShowPwd] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.authReducer);

    const handleChange = (e) =>
        setInput({ ...input, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(asyncLoginUser(input, navigate));
    };

    return (
        <>
            <main className="bg-[#f5f3ea] w-full min-h-screen flex items-center justify-center px-4 py-10">
                <section className="bg-[#fdfdfa] w-full max-w-sm p-6 sm:p-8 rounded-2xl shadow-xl ring-1 ring-zinc-200/40">
                    {/* Heading */}
                    <header className="text-center mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#191A1A]">
                            Sign In
                        </h1>
                        <p className="text-sm sm:text-base text-zinc-600 mt-1">
                            Continue your journey
                        </p>
                    </header>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                                className="border border-zinc-300 focus:border-[#191A1A] focus:ring-1 focus:ring-[#191A1A] px-4 py-3 rounded-lg w-full outline-none transition"
                                value={input.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPwd ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                required
                                minLength={6}
                                className="border border-zinc-300 focus:border-[#191A1A] focus:ring-1 focus:ring-[#191A1A] px-4 py-3 pr-12 rounded-lg w-full outline-none transition"
                                value={input.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPwd(!showPwd)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-500 hover:text-[#191A1A] transition"
                            >
                                {showPwd ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 px-4 py-3 bg-[#191A1A] text-white rounded-lg font-semibold
                         hover:bg-[#303232] active:scale-[.98] transition-all disabled:opacity-60"
                        >
                            {loading ? "Logging in…" : "Login"}
                        </button>
                    </form>

                    {/* Footer link */}
                    <p className="text-center text-sm text-zinc-600 mt-6">
                        Don’t have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-[#191A1A] font-semibold hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </section>
            </main>
            <Toast />
        </>
    );
};

export default Login;
