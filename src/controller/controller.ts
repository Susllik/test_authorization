import axios from "axios"

const baseUrl: string = "http://localhost:3001/users";

export const getRequest = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data
    } catch (e) {
        console.log(`Error getRequest: ${e}`)
    }
};




