import axios from "axios";

const API_BASE_URL = "https://e-commerce-9kun.onrender.com/api/v1";

//register
export const registerUserApi = async (credentials) => {
    try {
        const response = await axios.post(
            `
            ${API_BASE_URL}/user/register `,
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
