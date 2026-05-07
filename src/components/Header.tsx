import { useSettings } from "../context/SettingsContext"

export default function Header() {

    const {settings, updateSettings} = useSettings()

    function handleChange() {
        let theme = settings.theme
        theme = theme === "dark" ? "light" : "dark"
        updateSettings("theme", theme)
    }

    return(
        <header className="flex justify-between bg-white dark:bg-neutral-800 p-3 rounded-2xl">
            <img src="logo.svg" alt="logo" />
            <button 
                onClick={() => handleChange()}
                className="bg-neutral-100 dark:bg-neutral-700 p-5 rounded-2xl cursor-pointer"
            >
                <img src={settings.theme === "dark" ? "icon-sun.svg" : "icon-moon.svg"} alt="theme-icon" />
            </button>
        </header>
    )
}