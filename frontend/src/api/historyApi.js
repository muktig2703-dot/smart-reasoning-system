import api from "./api";
export const saveHistory = async (data) => {

    return await api.post(
        "/history/",
        data
    );

};


export const getHistory = async () => {

    return await api.get(
        "/history/"
    );

};


export const deleteHistory = (historyId) => {
    return api.delete(`/history/${historyId}`);
};

export const searchHistory = (query) => {
    return api.get(`/history/search?q=${encodeURIComponent(query)}`);
};