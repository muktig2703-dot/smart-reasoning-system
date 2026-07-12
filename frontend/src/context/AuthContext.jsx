import { createContext, useContext, useEffect, useState } from "react";

import {
    loginUser,
    registerUser,
    getCurrentUser,
} from "../api/authApi";
import { useNotifications } from "./NotificationContext";
const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addNotification } = useNotifications();

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
        addNotification({
    type: "success",
    title: `Welcome back ${res.data.user.name}!`,
});

        return res.data;

    };

    const register = async (userData) => {

        await registerUser(userData);

    };

    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);
        addNotification({
    type: "info",
    title: "Logged out successfully",
});

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                setUser,
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