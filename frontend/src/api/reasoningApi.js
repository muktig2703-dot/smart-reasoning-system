import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

export const analyzeProblem = async (data) => {

    const response = await api.post(
        "/reasoning/analyze",
        data
    );

    return response.data;

};