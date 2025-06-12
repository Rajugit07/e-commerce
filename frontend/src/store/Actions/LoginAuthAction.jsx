import { loginUserApi } from "../../api/authApi";
import { authUser } from "../Reducers/authReducer";
import toast from "react-hot-toast";

export const asyncLoginUser = (credentials, navigate) => async (dispatch) => {
    try {
        const data = await loginUserApi(credentials);
        if (data.success) {
            dispatch(authUser(data.user));
            toast.success("Login successful!");
            navigate("/");

            if (data.user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } else {
            toast.error(data.message || "Login failed");
        }
    } catch (error) {
        console.log(error);
    }
};
