// src/api/orders.js
import axios from "axios";

const API_BASE_URL = "https://e-commerce-9kun.onrender.com";

export const fetchUserOrders = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders`, {
            params: { user: userId },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user orders:", error);
        throw error;
    }
};
