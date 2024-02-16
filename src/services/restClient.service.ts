import axios, {AxiosError, AxiosInstance} from "axios";

class RestClientService {
    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL:"http://localhost:8000/v1",
            timeout: 5000, // Set your desired timeout
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async get(endpoint:string, params = {}) {
        try {
            const response = await this.instance.get(endpoint, { params });
            return response.data;
        } catch (error) {
            this.handleApiError(error as AxiosError);
        }
    }

    async post(endpoint:string, data = {}) {
        try {
            const response = await this.instance.post(endpoint, data);
            return response.data;
        } catch (error) {
            this.handleApiError(error as AxiosError);
        }
    }

    async put(endpoint:string, data = {}) {
        try {
            const response = await this.instance.put(endpoint, data);
            return response.data;
        } catch (error) {
            this.handleApiError(error as AxiosError);
        }
    }

    async delete(endpoint:string) {
        try {
            const response = await this.instance.delete(endpoint);
            return response.data;
        } catch (error) {
            this.handleApiError(error as AxiosError);
        }
    }

    handleApiError(error:AxiosError) {
        if (error.response) {
            // The request was made, but the server responded with a status code outside the range of 2xx
            console.error('API Error - Response Data:', error.response.data);
            console.error('API Error - Response Status:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('API Error - No Response Received');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('API Error - Request Setup Error:', error.message);
        }

        throw error; // Re-throw the error to let the calling code handle it
    }
}

export default RestClientService;