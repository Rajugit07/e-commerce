import axios from "axios";

const API_BASE_URL = "https://e-commerce-9kun.onrender.com";

export const productsApi = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}getAllProduct`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
};
