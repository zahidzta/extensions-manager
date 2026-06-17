import { useSettings } from "../context/SettingsContext"
import { IoLanguage } from "react-icons/io5";

export default function Header() {

    const {settings, updateSettings} = useSettings()

    function handleChange() {
        let theme = settings.theme
        theme = theme === "dark" ? "light" : "dark"
        updateSettings("theme", theme)
    }

    return(
        <header className="flex justify-between bg-white dark:bg-neutral-800 p-3 rounded-2xl">
            <img src={settings.theme === "dark" ? "logo-invert.svg" : "logo.svg" } alt="logo" />
            <div className="flex gap-2">
                <button 
                    onClick={() => handleChange()}
                    className="bg-neutral-100 dark:bg-neutral-700 p-5 rounded-2xl cursor-pointer"
                >
                    <img src={settings.theme === "dark" ? "icon-sun.svg" : "icon-moon.svg"} alt="theme-icon" />
                </button>
                <button 
                    onClick={() => updateSettings("language", settings.language === "en" ? "es" : "en")}
                    className="bg-neutral-100 dark:bg-neutral-700 p-5 rounded-2xl cursor-pointer flex items-center justify-center text-2xl text-neutral-800 dark:text-neutral-100"
                >
                    <IoLanguage />
                </button>
            </div>
        </header>
    )
}