import toast from "react-hot-toast";
import { logoutUserApi } from "../../api/LogoutApi";
import { authLogoutUser } from "../Reducers/authReducer";

export const asyncLogoutUser = (Credential, navigate) => async (dispatch) => {
    try {
        const data = await logoutUserApi(Credential);
        if (data) {
            dispatch(authLogoutUser(data.user));
            toast.success("Logout successful");
            navigate("/login");
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error);
    }
};
