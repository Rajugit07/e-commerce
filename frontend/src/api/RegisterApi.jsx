import axios from "axios";

const API_BASE_URL = "https://e-commerce-9kun.onrender.com";

//register
export const registerUserApi = async (credentials) => {
    try {
        const response = await axios.post(
            `
            ${API_BASE_URL}/register `,
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
        console.log(error);
    }
};
