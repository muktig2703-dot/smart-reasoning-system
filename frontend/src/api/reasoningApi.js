import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const analyzeProblem = async (problem) => {
    const response = await api.post("/reasoning/analyze", {
        problem,
    });

    return response.data;
};