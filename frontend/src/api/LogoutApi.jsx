import axios from "axios";

const API_BASE_URL = "https://e-commerce-9kun.onrender.com/api/v1";

export const logoutUserApi = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/user/logout`,
            {
                headers: {
                    "Content-type": "Application/json",
                },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
