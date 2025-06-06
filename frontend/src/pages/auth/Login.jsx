import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-[#f5f3ea] w-full min-h-screen flex items-center justify-center px-4">
            <div className="bg-[#fdfdfa] w-full max-w-md p-8 rounded-2xl shadow-xl">
                <div className="mb-10 mt-10 text-center">
                    <h1 className="text-3xl font-semibold mb-2">
                        Welcome Back
                    </h1>
                    <h2 className="text-xl font-medium text-zinc-600">
                        Login your account
                    </h2>
                </div>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Email address"
                        className="border border-zinc-200 px-4 py-3 outline-none rounded-lg w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-zinc-200 px-4 py-3 outline-none rounded-lg w-full"
                    />
                    <button className="px-4 py-3 bg-[#191A1A] text-white rounded-md font-semibold mt-4 w-full cursor-pointer hover:bg-[#303232]">
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
            </div>
        </div>
    );
};

export default Login;
