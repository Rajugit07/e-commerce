import axios from "axios";

const API_BASE_URL = "https://e-commerce-9kun.onrender.com";

//login
export const loginUserApi = async (credentials) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/login`,
            credentials,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
};
