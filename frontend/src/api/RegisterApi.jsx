import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1/user";

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
