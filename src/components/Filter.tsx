import { FILTERS } from "../constants/filters";
import { useSettings } from "../context/SettingsContext";
import { TRANSLATIONS, type TranslationKey } from "../constants/translations";
import type { Filter } from "../types";

export function Filter() {

    const { settings, updateSettings } = useSettings()

    function handleChange(filter: Filter) {
        updateSettings("filter", filter)
    }

    return (
        <div className="flex flex-col desktop:flex-row justify-between gap-5">
            <h1 className="text-3xl text-center font-bold">{TRANSLATIONS[settings.language]["Extensions List"]}</h1>
            <div className="flex justify-evenly desktop:gap-7">
                {FILTERS.map(filter => (
                    <button
                        key={filter.value}
                        className={`${settings.filter === filter.value ? "bg-red-400" : "bg-white dark:bg-neutral-800"} rounded-full py-2 px-4 shadow cursor-pointer`}
                        onClick={() => handleChange(filter.value)}
                    >
                        {TRANSLATIONS[settings.language][filter.label as TranslationKey]}
                    </button>
                ))}
            </div>
        </div>
    )
}