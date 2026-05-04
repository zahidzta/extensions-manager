import { createContext, useContext, useState } from "react"

type Settings = {
    theme: "light" | "dark"
}

const defaultSettings: Settings = {
    theme: "dark",
}

type SettingsContextType = {
    settings: Settings
    updateSettings: <K extends keyof Settings>(key: K, value: Settings[K]) => void
}

const SettingsContext = createContext<SettingsContextType | null>(null)

export function SettingsProvider({children} : {children: React.ReactNode}) {
    const [settings, setSettings] = useState<Settings>(defaultSettings)

    const updateSettings = <K extends keyof Settings>(key: K, value: Settings[K]) => {
        setSettings(prev => ({...prev, [key]: value}))
    }

    return (
        <SettingsContext.Provider value={{settings, updateSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    const context = useContext(SettingsContext)
    if (!context) throw new Error("useSettings must be used within SettingsProvider")
    return context;
}