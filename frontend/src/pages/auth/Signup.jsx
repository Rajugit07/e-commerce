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
            <div className="bg-[#f5f3ea] w-full min-h-screen flex items-center justify-center px-4">
                <div className="bg-[#fdfdfa] w-full max-w-md p-8 rounded-2xl shadow-xl">
                    <div className="mb-10 mt-10 text-center">
                        <h1 className="text-3xl font-semibold mb-2">
                            Get Started Now
                        </h1>
                        <h2 className="text-xl font-medium text-zinc-800">
                            Please create your account
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Full name"
                                name="fullname"
                                className="border border-zinc-200 px-4 py-3 outline-none rounded-lg w-full"
                                onChange={changeHandler}
                                value={input.fullname}
                            />
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
                            <input
                                type="text"
                                placeholder="user or admin"
                                name="role"
                                className="border border-zinc-200 px-4 py-3 outline-none rounded-lg w-full"
                                onChange={changeHandler}
                                value={input.role}
                            />
                            <button
                                type="submit"
                                className="px-4 py-3 bg-[#191A1A] text-white rounded-md font-semibold mt-4 w-full cursor-pointer hover:bg-[#303232]"
                            >
                                Create account
                            </button>
                        </div>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center text-sm text-zinc-600">
                        Have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[#191A1A] font-semibold hover:underline"
                        >
                            login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
