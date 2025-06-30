import axios from "axios";

const API_BASE_URL = "https://api.postalpincode.in/pincode";

export const pinCodeApi = async (pincode) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${pincode}`, {
            headers: {
                "Content-type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
};
