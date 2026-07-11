import { createContext, useContext, useEffect, useState } from "react";

import {
    loginUser,
    registerUser,
    getCurrentUser,
} from "../api/authApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            setLoading(false);
            return;
        }

        getCurrentUser()
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
                localStorage.removeItem("token");
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    const login = async (credentials) => {

        const res = await loginUser(credentials);

        localStorage.setItem(
            "token",
            res.data.access_token
        );

        setUser(res.data.user);

        return res.data;

    };

    const register = async (userData) => {

        await registerUser(userData);

    };

    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>

    );

}

export const useAuth = () => useContext(AuthContext);