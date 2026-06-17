import { useSettings } from "../context/SettingsContext"
import { TRANSLATIONS, type TranslationKey } from "../constants/translations"
import type { Extension } from "../types"

type ExtensionCardProps = {
    info: Extension
    onChange: (name: string) => void
    onDelete: (name: string) => void
}

export default function ExtensionCard({ info, onChange, onDelete }: ExtensionCardProps) {
    const {settings} = useSettings()
    return (
        <div className="bg-white dark:bg-neutral-800 p-5 rounded-2xl shadow space-y-6">
            <div className="flex items-start gap-4">
                <img src={info.logo} alt={info.name} />
                <div className="space-y-1">
                    <h2>{info.name}</h2>
                    <p>{TRANSLATIONS[settings.language][`${info.name}_desc` as TranslationKey]}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <button className={`${settings.theme === "dark" ? "hover:text-neutral-800" : "hover:text-white" } border border-neutral-400 rounded-full py-2 px-4 cursor-pointer hover:bg-red-400`} onClick={() => onDelete(info.name)}>{TRANSLATIONS[settings.language]["Remove"]}</button>

                <button
                    role="switch"
                    aria-checked={info.isActive}
                    onClick={() => onChange(info.name)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-300 cursor-pointer ${info.isActive ? "bg-red-400" : "bg-neutral-300 dark:bg-neutral-500"}`}
                >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${info.isActive ? "translate-x-5" : "translate-x-0"}`}/>
                </button>
            </div>
        </div>
    )
}