import { createContext, useContext, useEffect, useState } from "react"
import type { Filter } from "../types"

type Settings = {
    theme: "light" | "dark"
    filter: Filter
    language: "es" | "en"
}

const defaultSettings: Settings = {
    theme: "light",
    filter: "All",
    language: "es"
}

type SettingsContextType = {
    settings: Settings
    updateSettings: <K extends keyof Settings>(key: K, value: Settings[K]) => void
}

const SettingsContext = createContext<SettingsContextType | null>(null)

export function SettingsProvider({children} : {children: React.ReactNode}) {
    const [settings, setSettings] = useState<Settings>(defaultSettings)

    useEffect(() => {
        const root = document.documentElement
        if (settings.theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    }, [settings.theme])

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