import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import "@fontsource/inter";
import { AuthProvider } from "./context/AuthContext";
import { SettingsProvider } from "./context/SettingsContext";
import { NotificationProvider } from "./context/NotificationContext";
ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
    <NotificationProvider>
        <AuthProvider>
            <SettingsProvider>
                <App />
            </SettingsProvider>
        </AuthProvider>
    </NotificationProvider>
</React.StrictMode>
);