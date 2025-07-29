import React from "react";
import { useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLogoutUser } from "../../store/Actions/LogoutAction";

const ProfileDropDown = () => {
    const { user } = useSelector((state) => state.authReducer);
    const userId = useSelector((state) => state.authReducer.user?._id);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handelLogout = () => {
        dispatch(asyncLogoutUser());
        navigate("/login")
    };

    return (
        <>
            <div className="w-56 sm:w-64 md:w-72 bg-white p-4 shadow-2xl border border-zinc-300 rounded-md">
                <div className="flex flex-col border-b border-zinc-300">
                    {user ? (
                        <>
                            <h3 className="text-lg sm:text-xl font-semibold mb-4">
                                Welcome , {user.fullname}
                            </h3>

                            {/* Render admin-specific or user-specific links */}
                            {user.role === "admin" && (
                                <Link
                                    to="/admin/dashboard"
                                    className="text-sm mb-2 underline text-blue-600"
                                >
                                    Go to Admin Dashboard
                                </Link>
                            )}

                            {user.role === "user" && (
                                <>
                                    <ul className="text-sm sm:text-base flex flex-col">
                                        <Link to={`/orders/${userId}`} className="">
                                            Order
                                        </Link>
                                        <Link to="/wishlist" className="my-2">
                                            Wishlist
                                        </Link>
                                    </ul>
                                </>
                            )}

                            <button
                                onClick={handelLogout}
                                className="bg-black text-white p-2 text-sm sm:text-base rounded-md mb-4 uppercase cursor-pointer"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <h3 className="text-lg sm:text-xl font-semibold">
                                Please Login
                            </h3>
                            <p className="text-sm sm:text-base mt-2 mb-2">
                                Access Account and Manage Orders
                            </p>
                            <button className="bg-black text-white p-2 text-sm sm:text-base rounded-md mb-4 uppercase">
                                <Link to="/login">Login/SignUp</Link>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProfileDropDown;
