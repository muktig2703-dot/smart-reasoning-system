import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {

    const [notifications, setNotifications] = useState(() => {

        const saved = localStorage.getItem("notifications");

        return saved ? JSON.parse(saved) : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "notifications",
            JSON.stringify(notifications)
        );

    }, [notifications]);

    const addNotification = ({ type, title }) => {

        const notification = {

            id: Date.now(),

            type,

            title,

            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),

        };

        setNotifications((prev) => [
            notification,
            ...prev,
        ]);

    };

    const clearNotifications = () => {

        setNotifications([]);

    };

    return (

        <NotificationContext.Provider
            value={{
                notifications,
                addNotification,
                clearNotifications,
            }}
        >
            {children}
        </NotificationContext.Provider>

    );

}

export function useNotifications() {

    return useContext(NotificationContext);

}