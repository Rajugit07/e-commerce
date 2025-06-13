import toast from "react-hot-toast";
import { registerUserApi } from "../../api/RegisterApi";
import { authRegisterUser } from "../Reducers/authReducer";

export const asyncRegisterUser =
    (credentials, navigate) => async (dispatch) => {
        try {
            const data = await registerUserApi(credentials);
            if (data) {
                dispatch(authRegisterUser(data.user));
                toast.success("Register successful");
                navigate("/login");
            } else {
                toast.error(data.message || "register failed");
            }
        } catch (error) {
            console.log(error);
        }
    };
