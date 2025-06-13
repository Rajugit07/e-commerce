import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1/user";

export const logoutUserApi = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/logout`,
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
