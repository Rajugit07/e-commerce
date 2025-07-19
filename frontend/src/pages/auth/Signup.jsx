import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../../store/Actions/registerAction";

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        password: "",
        role: "",
    });
    const [showPwd, setShowPwd] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(asyncRegisterUser(input, navigate));
    };

    return (
        <>
            <main className="bg-[#f5f3ea] w-full min-h-screen flex items-center justify-center px-4 py-10">
                <section className="bg-[#fdfdfa] w-full max-w-sm p-6 sm:p-8 rounded-2xl shadow-xl ring-1 ring-zinc-200/40">
                    {/* Heading */}
                    <header className="text-center mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#191A1A]">
                            Get Started Now
                        </h1>
                        <p className="text-sm sm:text-base text-zinc-800 mt-1">
                            Please create your account
                        </p>
                    </header>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullname" className="sr-only">
                                Full name
                            </label>
                            <input
                                id="fullname"
                                type="text"
                                name="fullname"
                                placeholder="Full name"
                                required
                                className="border border-zinc-300 focus:border-[#191A1A] focus:ring-1 focus:ring-[#191A1A] px-4 py-3 rounded-lg w-full outline-none transition"
                                value={input.fullname}
                                onChange={changeHandler}
                            />
                        </div>

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
                                onChange={changeHandler}
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
                                onChange={changeHandler}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPwd(!showPwd)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-500 hover:text-[#191A1A] transition"
                            >
                                {showPwd ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Role */}
                        <div>
                            <label htmlFor="role" className="sr-only">
                                Role
                            </label>
                            <input
                                id="role"
                                type="text"
                                name="role"
                                placeholder="User or Admin"
                                required
                                className="border border-zinc-300 focus:border-[#191A1A] focus:ring-1 focus:ring-[#191A1A] px-4 py-3 rounded-lg w-full outline-none transition"
                                value={input.role}
                                onChange={changeHandler}
                            />
                        </div>

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="w-full mt-2 px-4 py-3 bg-[#191A1A] text-white rounded-lg font-semibold
                         hover:bg-[#303232] active:scale-[.98] transition-all"
                        >
                            Create account
                        </button>
                    </form>

                    {/* Footer link */}
                    <p className="text-center text-sm text-zinc-600 mt-6">
                        Have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[#191A1A] font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </section>
            </main>
        </>
    );
};

export default Signup;
