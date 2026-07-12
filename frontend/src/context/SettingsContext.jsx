import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

const SettingsContext = createContext();
const defaultSettings = {

    reasoningDepth: "balanced",

    responseStyle: "professional",

    autoSaveHistory: true,

    animations: true,

    autoClearWorkspace: false,

    agents: {
        planner: true,
        reasoner: true,
        critic: true,
        explainer: true,
    },

};
export function SettingsProvider({ children }) {

    const [settings, setSettings] = useState(() => {

    const savedSettings = localStorage.getItem("settings");

try {
    return savedSettings
        ? JSON.parse(savedSettings)
        : defaultSettings;
} catch {
    return defaultSettings;
}

});


useEffect(() => {

    localStorage.setItem(
        "settings",
        JSON.stringify(settings)
    );

}, [settings]);

    
const updateSettings = (newSettings) => {

    setSettings((prev) => ({
        ...prev,
        ...newSettings,

        agents: {
            ...prev.agents,
            ...(newSettings.agents || {})
        }

    }));

};

    return (

        <SettingsContext.Provider
            value={{
                settings,
                updateSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>

    );

}

export function useSettings() {

    return useContext(SettingsContext);

}