import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1/products/";

export const productFilterByCategoryApi = async ({
    category,
    subCategory,
    productType,
}) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}?category=${category}&subCategory=${subCategory}&productType=${productType}`,
            {
                headers: {
                    "Content-Type": "Application/json",
                },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
};
